import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-pink-200 py-4 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Портфолио</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-pink-600 cursor-pointer"
              >
                Обо мне
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-pink-600 cursor-pointer"
              >
                Навыки
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-pink-600 cursor-pointer"
              >
                Проекты
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-800 hover:text-pink-600 cursor-pointer"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;