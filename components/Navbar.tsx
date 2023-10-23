import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    src: "/assets/icons/search.svg",
    alt: "search",
  },
  {
    src: "/assets/icons/black-heart.svg",
    alt: "heart",
  },
  {
    src: "/assets/icons/user.svg",
    alt: "user",
  },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex itens-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            alt="Pricewise Logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>

        <div className="flex gap-3 items-center">
          {navItems.map((item) => (
            <Image
              key={item.alt}
              src={item.src}
              alt={item.alt}
              width={28}
              height={28}
              className="object-contain cursor-pointer"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
