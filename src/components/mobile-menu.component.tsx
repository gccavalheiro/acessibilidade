"use client";

import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Drawer } from "./drawer.component";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const lastMenuItemRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      firstMenuItemRef.current?.focus();
    }
  }, [isMenuOpen]);

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (!isMenuOpen) return;

    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstMenuItemRef.current) {
          event.preventDefault();
          lastMenuItemRef.current?.focus();
        }
      } else {
        if (document.activeElement === lastMenuItemRef.current) {
          event.preventDefault();
          firstMenuItemRef.current?.focus();
        }
      }
    }
  };

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  function handleMenuItemClick() {
    closeMenu();
  }

  return (
    <>
      <button
        ref={menuButtonRef}
        className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        aria-label={
          isMenuOpen
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {mounted && createPortal(
        <Drawer
          menuRef={menuRef}
          isMenuOpen={isMenuOpen}
          handleMenuKeyDown={handleMenuKeyDown}
          handleMenuItemClick={handleMenuItemClick}
          firstMenuItemRef={firstMenuItemRef}
          lastMenuItemRef={lastMenuItemRef}
        />,
        document.body
      )}

      {mounted && isMenuOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />,
        document.body
      )}
    </>
  );
} 