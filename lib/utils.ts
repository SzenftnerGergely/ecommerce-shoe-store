// @ts-ignore
import { client } from "@/app/lib/sanity";
import { type ClassValue, clsx } from "clsx"
// @ts-ignore
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
