'use client'

import Link from 'next/link' 
import TextLogo from './text-logo'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: Brand and Description */}
          <div className="space-y-4">
            <TextLogo />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your AI-powered companion for discovering movies and TV shows tailored to your unique preferences.
            </p>
          </div>

          {/* Column 2: Features */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-1">
              Features
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Recommendations</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Watchlist</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Discover</Link></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-1">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About the developer</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-1">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FilmFindr. All rights reserved. Built with Next.js, Shadcn/ui, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}