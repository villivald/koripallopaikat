import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/books">
          <a>About</a>
        </Link>
        <Link href="/top">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
