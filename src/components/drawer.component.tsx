import Link from "next/link";
import React from "react";

interface DrawerProps {
  menuRef: React.RefObject<HTMLDivElement | null>;
  isMenuOpen: boolean;
  handleMenuKeyDown: (event: React.KeyboardEvent) => void;
  handleMenuItemClick: () => void;
  firstMenuItemRef: React.RefObject<HTMLAnchorElement | null>;
  lastMenuItemRef: React.RefObject<HTMLAnchorElement | null>;
}

export function Drawer(props: DrawerProps) {
  const {
    menuRef,
    isMenuOpen,
    handleMenuKeyDown,
    handleMenuItemClick,
    firstMenuItemRef,
    lastMenuItemRef,
  } = props;

  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      className={`fixed top-16 border-t border-gray-700 right-0 w-64 h-full bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-label="Menu de navegação mobile"
      onKeyDown={handleMenuKeyDown}
    >
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          ref={firstMenuItemRef}
          href="/"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
        >
          Início
        </Link>
        <Link
          href="#wcag"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
        >
          WCAG
        </Link>
        <Link
          href="#w3c"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
        >
          W3C
        </Link>
        <Link
          ref={lastMenuItemRef}
          href="#boas-praticas"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
        >
          Boas Práticas
        </Link>
      </nav>
    </div>
  );
}
