'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/results', label: 'Results' },
  { href: '/fixtures', label: 'Fixtures' },
  { href: '/players', label: 'Players' },
  { href: '/tables', label: 'Tables' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-surface-800 border-b border-surface-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/lfc-crest.svg"
              alt="Liverpool FC"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-bold text-white text-sm tracking-wide hidden sm:block">
              LFC <span className="text-lfc-gold">2025/26</span>
            </span>
          </Link>

          {/* Nav links */}
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-lfc-red text-white'
                        : 'text-surface-200 hover:text-white hover:bg-surface-700'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
