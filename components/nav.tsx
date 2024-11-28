"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "ABOUT ME" },
    { href: "/resume", label: "RESUME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="flex items-center space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
