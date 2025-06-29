import { useState } from 'react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);

  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* Hamburger button for mobile view */}
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-controls="navbarSupportedContent1"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible navigation container */}
        <div
          className={`${isNavOpen ? 'flex' : 'hidden'} flex-grow basis-[100%] items-center lg:flex lg:basis-auto`}
          id="navbarSupportedContent1"
        >
          {/* Logo */}
          <a
            className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="#"
          >
            <img
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: '15px' }}
              alt="TE Logo"
              loading="lazy"
            />
          </a>
          
          {/* Left navigation links */}
          <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row">
            <li className="mb-4 lg:mb-0 lg:pe-2">
              {/* Dashboard link */}
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
              >
                Dashboard
              </a>
            </li>
            {/* Team link */}
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
              >
                Team
              </a>
            </li>
            {/* Projects link */}
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Right elements */}
        <div className="relative flex items-center">
          {/* Icon */}
          <a className="me-4 text-neutral-600 dark:text-white" href="#">
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                />
              </svg>
            </span>
          </a>

          {/* First dropdown container */}
          <div className="relative">
            {/* First dropdown trigger */}
            <a
              className="me-4 flex items-center text-neutral-600 dark:text-white"
              href="#"
              role="button"
              onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}
              aria-expanded={isFirstDropdownOpen}
            >
              {/* Dropdown trigger icon */}
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {/* Notification counter */}
              <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                1
              </span>
            </a>
            
            {/* First dropdown menu */}
            {isFirstDropdownOpen && (
              <ul
                className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark"
                style={{ right: 0 }}
              >
                {/* First dropdown menu items */}
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Second dropdown container */}
          <div className="relative">
            {/* Second dropdown trigger */}
            <a
              className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              role="button"
              onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}
              aria-expanded={isSecondDropdownOpen}
            >
              {/* User avatar */}
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: '25px', width: '25px' }}
                alt="User avatar"
                loading="lazy"
              />
            </a>
            
            {/* Second dropdown menu */}
            {isSecondDropdownOpen && (
              <ul
                className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark"
                style={{ right: 0 }}
              >
                {/* Second dropdown menu items */}
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}