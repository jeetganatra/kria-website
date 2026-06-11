import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact-us" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="flex items-baseline justify-between px-4 py-4 sm:px-6 md:px-12">
        <Link
          to="/"
          className="font-display text-xl leading-none tracking-tight whitespace-nowrap sm:text-2xl md:text-3xl"
        >
          Studio{" "}
          <em className="text-clay">KRiA</em>
        </Link>

        <nav>
          <ul className="m-0 flex list-none items-baseline gap-4 p-0 sm:gap-6 md:gap-10">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `link-underline text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 sm:text-[11px] sm:tracking-[0.22em] md:text-xs ${
                      isActive
                        ? "is-active text-ink"
                        : "text-muted hover:text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
