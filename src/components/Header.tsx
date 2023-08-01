import { Link } from "react-router-dom";
import { staticRoutes } from "../routes/routes";

export const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-3xl text-rose-500">Personas</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l overflow-hidden md:border-gray-400	flex flex-wrap items-center text-base justify-center h-16">
          {staticRoutes.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center rounded-md p-1 text-sm text-neutral-900 h-12  hover:border-b-4 border-collapse hover:border-b-neutral-700 hover:bg-neutral-400 hover:text-neutal-100 hover:duration-300 hover:ease-in-out active:text-amber-500 lg:text-lg xl:px-3 xl:py-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
