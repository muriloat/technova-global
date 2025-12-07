import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertUserSchema, loginSchema, insertJobApplicationSchema } from "@shared/schema";
import { z } from "zod";
import crypto from "crypto";
import "express-session";

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  next();
}

async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  const user = await storage.getUser(req.session.userId);
  if (!user || user.role !== "admin") {
    return res.status(403).json({ success: false, message: "Forbidden - Admin access required" });
  }
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = loginSchema.parse(req.body);
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== hashPassword(password)) {
        return res.status(401).json({ 
          success: false, 
          message: "Invalid username or password" 
        });
      }

      req.session.userId = user.id;
      res.json({ 
        success: true, 
        user: { 
          id: user.id, 
          username: user.username, 
          email: user.email, 
          name: user.name, 
          role: user.role 
        } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
      } else {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Failed to logout" });
      }
      res.json({ success: true, message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/me", async (req, res) => {
    if (!req.session.userId) {
      return res.json({ user: null });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user) {
      return res.json({ user: null });
    }
    res.json({ 
      user: { 
        id: user.id, 
        username: user.username, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      } 
    });
  });

  app.post("/api/users", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      const existingUsername = await storage.getUserByUsername(validatedData.username);
      if (existingUsername) {
        return res.status(400).json({ success: false, message: "Username already exists" });
      }
      
      const existingEmail = await storage.getUserByEmail(validatedData.email);
      if (existingEmail) {
        return res.status(400).json({ success: false, message: "Email already exists" });
      }

      const user = await storage.createUser({
        ...validatedData,
        password: hashPassword(validatedData.password),
      });
      
      res.status(201).json({ 
        success: true, 
        user: { 
          id: user.id, 
          username: user.username, 
          email: user.email, 
          name: user.name, 
          role: user.role 
        } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
      } else {
        console.error("Create user error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.get("/api/users", requireAdmin, async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users.map(u => ({ 
        id: u.id, 
        username: u.username, 
        email: u.email, 
        name: u.name, 
        role: u.role,
        createdAt: u.createdAt
      })));
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.get("/api/jobs", async (req, res) => {
    try {
      const jobs = await storage.getJobOpenings();
      res.json(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const job = await storage.getJobOpening(req.params.id);
      if (!job) {
        return res.status(404).json({ success: false, message: "Job not found" });
      }
      res.json(job);
    } catch (error) {
      console.error("Error fetching job:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.post("/api/jobs/apply", async (req, res) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);
      
      const job = await storage.getJobOpening(validatedData.jobId);
      if (!job) {
        return res.status(404).json({ success: false, message: "Job opening not found" });
      }

      const application = await storage.createJobApplication(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Application submitted successfully",
        id: application.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
      } else {
        console.error("Job application error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.get("/api/applications", requireAdmin, async (req, res) => {
    try {
      const applications = await storage.getJobApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Contact submission received successfully",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  app.get("/api/contact", requireAdmin, async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  return httpServer;
}
