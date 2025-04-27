'use client';

import { Icons } from '@skinmama/components/icons';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@skinmama/components/ui/navigation-menu';
import { cn } from '@skinmama/lib/utils';
import Link from 'next/link';
import React from 'react';

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: 'Alert Dialog',
//     href: '/docs/primitives/alert-dialog',
//     description:
//       'A modal dialog that interrupts the user with important content and expects a response.',
//   },
//   {
//     title: 'Hover Card',
//     href: '/docs/primitives/hover-card',
//     description:
//       'For sighted users to preview content available behind a link.',
//   },
//   {
//     title: 'Progress',
//     href: '/docs/primitives/progress',
//     description:
//       'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//   },
//   {
//     title: 'Scroll-area',
//     href: '/docs/primitives/scroll-area',
//     description: 'Visually or semantically separates content.',
//   },
//   {
//     title: 'Tabs',
//     href: '/docs/primitives/tabs',
//     description:
//       'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//   },
//   {
//     title: 'Tooltip',
//     href: '/docs/primitives/tooltip',
//     description:
//       'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//   },
// ];

export function NavigationMenuSkinMama() {
  return (
    <div className="h-16 max-w-screen bg-primary">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Icons.logo className="h-8 w-8 text-white" />
            <span className="ml-2 hidden text-lg font-bold text-white md:inline">
              SkinMama
            </span>
          </Link>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <div className="hidden md:flex md:gap-6">
              <NavigationMenuLink asChild>
                <Link href={'/'} className="text-white">
                  About Us{' '}
                </Link>
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href={'/'} className="text-white">
                    Contact Us{' '}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>

            <div className="ml-auto">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/docs"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-white text-primary hover:bg-gray-100'
                    )}
                  >
                    Download App
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        <button className="ml-2 rounded p-2 md:hidden">
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
        </button>
      </div>
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
