"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import { motion } from "framer-motion";
import ConstructionModal from "./ConstructionModal";
import { useLanguage } from "@/providers/LanguageContext";
import { Globe } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from "@/providers/ThemeContext";

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [showConstructionModal, setShowConstructionModal] = useState(false);
  const { dictionary, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  const handleLinkClick = (e, link) => {
    if (link.showModal) {
      e.preventDefault();
      setShowConstructionModal(true);
    }
  };

  const links = [
    {
      href: "/#about",
      label: dictionary?.navigation.about,
    },
    {
      href: '/#contact-form',
      label: dictionary?.navigation.contact,
    },
    {
      href: "/#faq",
      label: dictionary?.navigation.faq,
    },
  ];

  // A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
  // The header is responsive, and on mobile, the links are hidden behind a burger button.
  // ... existing code ...

  return (
    <>
      <header className="bg-white dark:bg-[#12182a] relative">
        <nav className="container flex items-center justify-between px-8 py-4 mx-auto relative z-10">
          {/* ... Logo existente ... */}
          <div className="flex lg:flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                className="flex items-center gap-2 shrink-0"
                href="/"
                title={`${config.appName} hompage`}
              >
                <Image
                  src={logo}
                  alt={`${config.appName} logo`}
                  className="w-8 dark:invert" // Añade dark:invert si tu logo es oscuro
                  placeholder="blur"
                  priority={true}
                  width={32}
                  height={32}
                />
                <span className="font-bold text-lg bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {config.appName}
                </span>
              </Link>
            </motion.div>
          </div>
          {/* Links con animación */}
          <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-xl text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  title={link.label}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}


            {/* Botón de tema - Añadir antes del botón de idioma */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
            </motion.button>

            {/* Botón de idioma */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            >
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span className="uppercase text-gray-600 dark:text-gray-300">{language}</span>
            </motion.button>
          </div>

          {/* Burger button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl sm:max-w-sm"
          >
            {/* Botón de cerrar */}
            <div className="flex justify-end">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-900 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Links del menú móvil */}
            <div className="mt-6 flow-root">
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    onClick={(e) => {
                      handleLinkClick(e, link);
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Botones de tema e idioma */}
            <div className="py-4 mt-4 flex flex-col gap-4">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sun className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                <span className="uppercase text-gray-600 dark:text-gray-300">{language}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <ConstructionModal
        isOpen={showConstructionModal}
        onClose={() => setShowConstructionModal(false)}
      />
    </>
  );
};

export default Header;
