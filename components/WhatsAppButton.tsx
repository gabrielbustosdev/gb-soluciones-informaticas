'use client'

import { Button } from "./ui/button"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  message: string;
  phone: string;
  children: ReactNode;
  className?: string;
}

export function WhatsAppButton({ 
  message, 
  phone, 
  children, 
  className 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
        className
      )}
    >
      {children}
    </Button>
  );
}