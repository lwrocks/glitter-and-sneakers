import Link from "next/link";

export default function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div>
        <div>
          {/* Logo and Site Name */}
          <div>
            <Link href="/">
              <a>
                <span>Glitter and Sneakers</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav Desktop */}
      <nav>
        <Link href="/basketball">
          <a>Basketball</a>
        </Link>
        <Link href="/soccer">
          <a>Soccer</a>
        </Link>
        <Link href="/volleyball">
          <a>Volleyball</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
      </nav>
    </header>
  );
}
