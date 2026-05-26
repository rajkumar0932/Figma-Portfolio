import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-purple-400 transition-colors tracking-tight"
          >
            RK<span className="text-purple-400">.</span>
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#about"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#experience"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Experience
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#lab"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Projects
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
