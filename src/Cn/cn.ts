import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const Cn = (...input:ClassValue[])=>twMerge(clsx(...input))