'use client';

import { motion, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
};

export function Navbar() {
  return (
    <aside className="p-3 tracking-tight shadow-lg">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-3 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row justify-between w-full space-x-0 items-center">
                <NavLogo/>  
                <div className='flex gap-2 uppercase font-sans'>
                  {Object.entries(navItems).map(([path, { name }]) => {
                    return <NavItem key={path} path={path} name={name} />;
                  })}
                </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

let cx = (...classes) => classes.filter(Boolean).join(' ');

function NavLogo(){
  return (
    <div>
      <h3 className='font-extrabold uppercase font-sans text-3xl'>Cal Codes</h3>
    </div>
  )
}

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  let isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cx(
        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
        {
          'text-neutral-500': !isActive,
        }
      )}
    >
      <span className="relative py-1 px-2">
        {name}
        {path === pathname ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
