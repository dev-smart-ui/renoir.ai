"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Resources", id: "resources" },
];

export function Header() {
  const router = useRouter();

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    if (window.location.pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const section = document.getElementById(hash);
    if (section) {
      setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md" id="top">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
         <Image src='/logo.png' width={100} height={40} alt='logo'/>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="text-sm hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="/#contact"
          onClick={(e) => handleSmoothScroll(e, "contact")}
          className="bg-primary text-[12px] md:text-[16px] text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition font-semibold"
        >
          Boost Your Sales Now
        </a>
      </nav>
    </header>
  );
}
