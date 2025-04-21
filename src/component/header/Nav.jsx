import React from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/portfolyo", label: "Portfolyo" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

function Nav() {
  return (
    <div>
      <div className="nav-area-center">
        <nav className="navigation">
          <ul className="parent-ul">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="parent-li">
                <Link href={link.href} className="parent-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
