import { 
  type User, type InsertUser, 
  type ContactSubmission, type InsertContact,
  type JobOpening, type InsertJobOpening,
  type JobApplication, type InsertJobApplication,
  users, contactSubmissions, jobOpenings, jobApplications 
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllUsers(): Promise<User[]>;
  
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  getJobOpenings(): Promise<JobOpening[]>;
  getJobOpening(id: string): Promise<JobOpening | undefined>;
  createJobOpening(job: InsertJobOpening): Promise<JobOpening>;
  
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplications(): Promise<JobApplication[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await db
      .select()
      .from(users)
      .orderBy(desc(users.createdAt));
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(contact)
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async getJobOpenings(): Promise<JobOpening[]> {
    return await db
      .select()
      .from(jobOpenings)
      .orderBy(desc(jobOpenings.createdAt));
  }

  async getJobOpening(id: string): Promise<JobOpening | undefined> {
    const [job] = await db.select().from(jobOpenings).where(eq(jobOpenings.id, id));
    return job || undefined;
  }

  async createJobOpening(job: InsertJobOpening): Promise<JobOpening> {
    const [opening] = await db
      .insert(jobOpenings)
      .values(job)
      .returning();
    return opening;
  }

  async createJobApplication(application: InsertJobApplication): Promise<JobApplication> {
    const [app] = await db
      .insert(jobApplications)
      .values(application)
      .returning();
    return app;
  }

  async getJobApplications(): Promise<JobApplication[]> {
    return await db
      .select()
      .from(jobApplications)
      .orderBy(desc(jobApplications.createdAt));
  }
}

export const storage = new DatabaseStorage();
