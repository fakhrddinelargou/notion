import { DiMagento } from "react-icons/di";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const pages = [
    { name: "Home", path: "/notions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="border border-blue-100 bg-white shadow-blue-100 shadow-2xs fixed flex items-center h-18 top-4 rounded-[4rem] left-1/2 transform -translate-x-1/2 justify-center gap-165 w-[50%]">
      <h1>
        <DiMagento size={23} className="text-blue-950" />
      </h1>

      <nav>
        <ul className="flex gap-8 text-[1.5rem] font-medium">
          {pages.map((item) => (
            <li
              key={item.path}
              className="relative group cursor-pointer w-fit text-blue-950"
            >
              <Link to={item.path}>{item.name}</Link>
              <span
                className={`
                  absolute left-0 bottom-0 h-[.2rem] w-0 bg-blue-950 transition-all duration-300
                  group-hover:w-full
                  ${(item.path === currentPath || currentPath === "/home") ? "w-full" : ""}
                `}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
