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
      className={`fixed top-16 border-t border-gray-700 focus:translate-x-0 right-0 w-64 h-full bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-label="Menu de navegação mobile"
      aria-hidden={!isMenuOpen}
      role="menu"
      tabIndex={isMenuOpen ? 0 : -1}
      onKeyDown={handleMenuKeyDown}
    >
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          ref={firstMenuItemRef}
          href="/"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Início
        </Link>
        <Link
          href="#wcag"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          WCAG
        </Link>
        <Link
          href="#w3c"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          W3C
        </Link>
        <Link
          ref={lastMenuItemRef}
          href="#boas-praticas"
          className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:bg-gray-700"
          onClick={handleMenuItemClick}
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Boas Práticas
        </Link>
      </nav>
    </div>
  );
}
