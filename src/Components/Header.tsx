import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-4 bg-[#f7f2ed] text-[#292929] shadow-lg">
      <div
        className="text-xl sm:text-2xl md:text-4xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Studio KRiA
      </div>

      <nav>
        <ul className="flex gap-2 sm:gap-4 md:gap-6 list-none m-0 p-0">
          <li>
            <button
              role="link"
              className="text-sm sm:text-lg md:text-2xl relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              role="link"
              className="text-sm sm:text-lg md:text-2xl relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
              onClick={() =>
                navigate("/projects")
              }
            >
              Projects
            </button>
          </li>
          <li>
            <button
              role="link"
              className="text-sm sm:text-lg md:text-2xl relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
              onClick={() =>
                navigate("/contact-us")
              }
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
