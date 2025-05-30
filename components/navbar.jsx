'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Film, LogOut, UserCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from 'react'
import { useAuth } from "@/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import TextLogo from "@/components/text-logo"

// Links shown when NO user is logged in
const guestNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#about", label: "About" },
];

function NavLink({ href, label, pathname }) {
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}

const GuestActions = () => (
  <div className="hidden md:flex items-center space-x-3">
    <Link
      href="/auth?mode=login"
      className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm"
    >
      Login
    </Link>
    <Link
      href="/auth?mode=signup"
      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm ring-1 ring-primary/20"
    >
      Sign Up
    </Link>
  </div>
);

const GuestNav = ({ pathname }) => (
  <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
    {guestNavLinks.map((link) => (
      <NavLink key={link.href} pathname={pathname} {...link} />
    ))}
  </nav>
);

// Links shown when a user IS logged in
const authNavLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
];

const AuthNav = ({ pathname }) => (
  <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
    {authNavLinks.map((link) => (
      <NavLink key={`./${link.href}`} pathname={pathname} {...link} />
    ))}
  </nav>
);

function ProfileDropdown({ onLogout }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full p-2 hover:bg-accent transition-all duration-200 border border-border/50 shadow-sm" aria-label="Profile menu">
          <UserCircle className="h-5 w-5 text-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onLogout} className="text-destructive">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, logout, loading: authLoading } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (theme === 'system' && storedTheme) {
      setTheme(storedTheme)
    }
  }, [theme, setTheme]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-lg shadow-lg border-b border-border/40">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Film className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight">FilmFindr</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {authNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            onClick={() => router.push('/auth?mode=login')}
            className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-primary via-pink-500 to-orange-400 text-white shadow hover:opacity-90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/auth?mode=signup')}
            className="px-4 py-2 rounded-lg font-semibold bg-background border border-primary text-primary hover:bg-primary hover:text-white transition-all shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Sign Up
          </button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-muted/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/40 animate-fade-in z-40">
          <div className="flex flex-col items-center gap-4 py-6">
            {authNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { router.push('/auth?mode=login'); setOpen(false); }}
              className="w-full px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-primary via-pink-500 to-orange-400 text-white shadow hover:opacity-90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Login
            </button>
            <button
              onClick={() => { router.push('/auth?mode=signup'); setOpen(false); }}
              className="w-full px-4 py-2 rounded-lg font-semibold bg-background border border-primary text-primary hover:bg-primary hover:text-white transition-all shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Sign Up
            </button>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}