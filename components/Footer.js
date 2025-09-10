import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] border-t border-[#222] py-8 text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-6 md:space-y-0">
        {/* Brand and developer */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-main_red">Echo</span>
            <span className="font-semibold text-xl">Flick</span>
          </div>
          <span className="text-lg text-gray-400 flex items-center">
            Developed by{" "}
            <span className="font-semibold text-main_red ml-1">Safwat Yasser</span>
          </span>
          <span className="text-xs text-gray-500 mt-1">
            &copy; {new Date().getFullYear()} EchoFlick. All rights reserved.
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 items-center">
          <Link
            href="/"
            className="hover:text-main_red transition flex items-center"
          >
            Home
          </Link>
          <Link
            href="/movie"
            className="hover:text-main_red transition flex items-center"
          >
            Movies
          </Link>
          <Link
            href="/tv"
            className="hover:text-main_red transition flex items-center"
          >
            TV Shows
          </Link>
          <Link
            href="/mylist"
            className="hover:text-main_red transition flex items-center"
          >
            My List
          </Link>
        </nav>
        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-end space-y-1">
          <span className="text-sm flex items-center">
            <EnvelopeIcon className="w-4 h-4 mr-1" />
            <a
              href="mailto:safwatyasser49@gmail.com"
              className="text-main_red hover:underline text-sm"
            >
              safwatyasser49@gmail.com
            </a>
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            <PhoneIcon className="w-4 h-4 mr-1" />
            +20 155 451 9267
          </span>
          <div className="flex space-x-3 mt-1">
            <a
              href="https://github.com/safwatyasser26"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main_red"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/safwat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main_red"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
