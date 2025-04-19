import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <div>
      <div className="nav-area-center">
        <nav className="navigation">
          <ul className="parent-ul">
            <li>
              <Link className="nav-link" href="/" prefetch>
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/hakkimizda">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/hizmetlerimiz">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/portfolyo">
                Portfolyo
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/iletisim">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
