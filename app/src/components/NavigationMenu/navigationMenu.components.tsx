'use client';

import { Icons } from '@skinmama/components/icons';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@skinmama/components/ui/navigation-menu';
import { cn } from '@skinmama/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';
export function NavigationMenuSkinMama() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: 'About Us', url: '/pages/AboutUs' },
    {
      title: 'Contact Us',
      url: '/pages/ContactUs',
    },
  ];
  return (
    <div className="h-16 max-w-screen bg-primary">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {Icons.logo({ className: 'h-8 w-8 text-white' })}
            <span className="ml-2 hidden text-lg font-bold text-white md:inline">
              SkinMama
            </span>
          </Link>
        </div>

        <div className="w-full sm:flex md:hidden font-bold text-white justify-center">
          SkinMama
        </div>

        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <div className="hidden md:flex md:gap-6">
              {navLinks.map((link) => (
                <NavigationMenuLink asChild key={link.title}>
                  <Link
                    href={link.url}
                    className="text-white hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        <button
          className="ml-2 rounded p-2 md:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x h-6 w-6 text-white"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 z-50 bg-primary py-4 shadow-md md:hidden">
          <div className="container mx-auto flex flex-col space-y-3 px-4 items-end font-bold">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                className="text-white hover:text-gray-200"
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href ?? '/'}
          target="_blank"
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
