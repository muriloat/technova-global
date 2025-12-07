import { db } from "../server/db";
import { users, jobOpenings } from "../shared/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function seed() {
  console.log("Seeding database...");

  const existingAdmin = await db.select().from(users).where(
    eq(users.username, "admin")
  );

  if (existingAdmin.length === 0) {
    await db.insert(users).values({
      username: "admin",
      email: "admin@technova.global",
      password: hashPassword("admin123"),
      name: "System Administrator",
      role: "admin",
    });
    console.log("Created default admin user (username: admin, password: admin123)");
  } else {
    console.log("Admin user already exists");
  }

  const existingJobs = await db.select().from(jobOpenings);
  
  if (existingJobs.length === 0) {
    await db.insert(jobOpenings).values([
      {
        title: "Senior AI/ML Engineer",
        department: "Artificial Intelligence",
        location: "New York, NY (Hybrid)",
        type: "Full-time",
        description: "We are seeking a talented Senior AI/ML Engineer to join our growing team. You will work on cutting-edge machine learning solutions for enterprise clients, developing and deploying production-grade AI systems that drive business transformation.",
        requirements: "5+ years of experience in machine learning and deep learning\nProficiency in Python, TensorFlow, and PyTorch\nExperience with cloud platforms (AWS, GCP, or Azure)\nStrong understanding of NLP and computer vision\nMS or PhD in Computer Science, Machine Learning, or related field preferred",
      },
      {
        title: "Blockchain Solutions Architect",
        department: "Blockchain & Web3",
        location: "San Francisco, CA (Remote)",
        type: "Full-time",
        description: "Join our blockchain practice as a Solutions Architect to design and implement distributed ledger solutions for financial services, supply chain, and healthcare clients. You will lead technical discovery, architecture design, and implementation oversight for complex blockchain initiatives.",
        requirements: "7+ years of software architecture experience\n3+ years working with blockchain technologies (Ethereum, Hyperledger, etc.)\nExperience with smart contract development (Solidity, Rust)\nStrong understanding of cryptography and security\nExcellent client-facing communication skills",
      },
      {
        title: "IoT Platform Developer",
        department: "Internet of Things",
        location: "Austin, TX (On-site)",
        type: "Full-time",
        description: "We are looking for an experienced IoT Platform Developer to help build next-generation connected solutions for manufacturing and industrial clients. You will design and develop scalable IoT platforms that process millions of device messages and enable real-time analytics.",
        requirements: "4+ years of IoT development experience\nExpertise in MQTT, CoAP, and edge computing\nExperience with time-series databases (InfluxDB, TimescaleDB)\nStrong programming skills in Go, Python, or Node.js\nFamiliarity with industrial protocols (OPC-UA, Modbus)",
      },
    ]);
    console.log("Created sample job openings");
  } else {
    console.log("Job openings already exist");
  }

  console.log("Seed completed!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
