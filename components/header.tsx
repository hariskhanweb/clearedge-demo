"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
      if (
        solutionsDropdownRef.current &&
        !solutionsDropdownRef.current.contains(event.target as Node) &&
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMounted]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (solutionsTimeoutRef.current) {
        clearTimeout(solutionsTimeoutRef.current);
      }
    };
  }, []);

  const solutionsLinks = [
    { href: "/printing-solutions", label: "Printing Solutions" },
    { href: "/communication-solutions", label: "Communication Solutions" },
  ];

  const resourcesLinks = [
    { href: "#", label: "Blog" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "Support Center" },
  ];

  return (
    <nav className="bg-brand-blue-dark h-[113.156px] flex items-center relative">
      <div className="container flex items-center justify-between">
        <Link href="/" className="h-[70.642px] w-[315.198px] flex items-center">
          <Image
            src="/assets/logo.png"
            alt="ClearEdge"
            width={315}
            height={71}
            className="h-auto w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-[37.945px]">
          <Link
            href="/"
            className="text-[18.973px] font-roboto text-white hover:opacity-80 transition-opacity"
          >
            Services
          </Link>
          <div
            ref={solutionsRef}
            className="relative"
            onMouseEnter={() => {
              if (solutionsTimeoutRef.current) {
                clearTimeout(solutionsTimeoutRef.current);
              }
              setIsSolutionsOpen(true);
            }}
            onMouseLeave={() => {
              solutionsTimeoutRef.current = setTimeout(() => {
                setIsSolutionsOpen(false);
              }, 150);
            }}
          >
            <div className="flex items-center gap-[4.743px] cursor-pointer group">
              <span className="text-[18.973px] font-roboto text-white">
                Solutions
              </span>
              <ChevronDown
                className={`w-[28.459px] h-[28.459px] text-white group-hover:opacity-80 transition-transform ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isSolutionsOpen && (
              <div
                ref={solutionsDropdownRef}
                className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-50"
                onMouseEnter={() => {
                  if (solutionsTimeoutRef.current) {
                    clearTimeout(solutionsTimeoutRef.current);
                  }
                }}
                onMouseLeave={() => {
                  solutionsTimeoutRef.current = setTimeout(() => {
                    setIsSolutionsOpen(false);
                  }, 150);
                }}
              >
                {solutionsLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block px-4 py-2 text-text-dark hover:bg-gray-100 transition-colors text-[16px] font-roboto"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/about-us"
            className="text-[18.973px] font-roboto text-white hover:opacity-80 transition-opacity"
          >
            About us
          </Link>
          <div
            ref={resourcesRef}
            className="relative"
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
              setIsResourcesOpen(true);
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => {
                setIsResourcesOpen(false);
              }, 150);
            }}
          >
            <div className="flex items-center gap-[4.743px] cursor-pointer group">
              <span className="text-[18.973px] font-bold font-roboto text-white">
                Resources
              </span>
              <ChevronDown
                className={`w-[28.459px] h-[28.459px] text-white group-hover:opacity-80 transition-transform ${
                  isResourcesOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isResourcesOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-50"
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setIsResourcesOpen(false);
                  }, 150);
                }}
              >
                {resourcesLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block px-4 py-2 text-text-dark hover:bg-gray-100 transition-colors text-[16px] font-roboto"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden xl:flex items-center gap-4">
          <Button variant="outline" size="default" className="rounded-[48px]">
            Contact
          </Button>
          <Button
            variant="default"
            size="default"
            className="rounded-[48px] bg-brand-teal hover:bg-brand-teal/85"
          >
            Support
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-brand-blue-dark border-t border-white/10 z-50">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block text-[18.973px] font-roboto text-white hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full text-[18.973px] font-roboto text-white"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                Solutions
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isSolutionsOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {solutionsLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-[16px] font-roboto text-white/90 hover:text-white transition-colors py-1"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsSolutionsOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about-us"
              className="block text-[18.973px] font-roboto text-white hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full text-[18.973px] font-bold font-roboto text-white"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isResourcesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {resourcesLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-[16px] font-roboto text-white/90 hover:text-white transition-colors py-1"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsResourcesOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-4 space-y-3 border-t border-white/10">
              <Button
                variant="outline"
                size="default"
                className="rounded-[48px] w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Button>
              <Button
                variant="default"
                size="default"
                className="rounded-[48px] bg-brand-teal hover:bg-brand-teal/85 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

