import { z } from "zod";

export const userFormValidation = z.object({
  name: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(50, "Username must not be longer than 50 characters."),
  email: z.string().email("invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "invalid phone number"),
});
