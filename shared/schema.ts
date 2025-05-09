import { pgTable, text, serial, timestamp, integer, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact message schema
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isRead: boolean("is_read").default(false),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export type InsertContactMessage = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Project schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  technologies: text("technologies").array().notNull(),
  demoLink: text("demo_link").notNull(),
  githubLink: text("github_link").notNull(),
  category: text("category").notNull(), // frontend, backend, fullstack
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projectSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.string().url("Image must be a valid URL"),
  technologies: z.array(z.string()).min(1, "At least one technology is required"),
  demoLink: z.string().url("Demo link must be a valid URL"),
  githubLink: z.string().url("GitHub link must be a valid URL"),
  category: z.enum(["frontend", "backend", "fullstack"]),
  featured: z.boolean().optional(),
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  image: true,
  technologies: true,
  demoLink: true,
  githubLink: true,
  category: true,
  featured: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Skill schema
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  category: text("category").notNull(), // frontend, backend, database, tools
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const skillSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  icon: z.string(),
  category: z.enum(["frontend", "backend", "database", "tools"]),
});

export const insertSkillSchema = createInsertSchema(skills).pick({
  name: true,
  icon: true,
  category: true,
});

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;

// Workshop schema
export const workshops = pgTable("workshops", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  role: text("role").notNull(),
  organization: text("organization").notNull(),
  date: text("date").notNull(),
  description: text("description").notNull(),
  skills: text("skills").array().notNull(),
  image: text("image").notNull(),
  type: text("type").notNull(), // conducted, attended
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const workshopSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  role: z.string(),
  organization: z.string(),
  date: z.string(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  skills: z.array(z.string()),
  image: z.string().url("Image must be a valid URL"),
  type: z.enum(["conducted", "attended"]),
  featured: z.boolean().optional(),
});

export const insertWorkshopSchema = createInsertSchema(workshops).pick({
  title: true,
  role: true,
  organization: true,
  date: true,
  description: true,
  skills: true,
  image: true,
  type: true,
  featured: true,
});

export type InsertWorkshop = z.infer<typeof insertWorkshopSchema>;
export type Workshop = typeof workshops.$inferSelect;

// Certification schema
export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  issuer: text("issuer").notNull(),
  year: text("year").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // certification, workshop
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const certificationSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  issuer: z.string(),
  year: z.string(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  type: z.enum(["certification", "workshop"]),
  featured: z.boolean().optional(),
});

export const insertCertificationSchema = createInsertSchema(certifications).pick({
  title: true,
  issuer: true,
  year: true,
  description: true,
  type: true,
  featured: true,
});

export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type Certification = typeof certifications.$inferSelect;
