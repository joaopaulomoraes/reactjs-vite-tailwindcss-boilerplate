import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#222831] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-[#00ADB5] transition-colors hover:text-[#EEEEEE]"
          >
            CarRental
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="block text-[#EEEEEE] hover:text-[#00ADB5] md:hidden"
          >
            <svg
              className="size-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className={`hidden items-center space-x-8 md:flex`}>
            <Link
              to="/"
              className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
            >
              Cars
            </Link>
            <Link
              to="/about"
              className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="rounded-md bg-[#00ADB5] px-6 py-2 font-semibold text-[#EEEEEE] transition-all hover:bg-[#393E46]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            } fixed inset-y-0 right-0 z-50 w-64 bg-[#222831] p-6 shadow-xl transition-all duration-300 ease-in-out md:hidden`}
          >
            <div className="flex flex-col space-y-6">
              <Link
                to="/"
                className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/cars"
                className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
                onClick={toggleMenu}
              >
                Cars
              </Link>
              <Link
                to="/about"
                className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="rounded-md bg-[#00ADB5] px-6 py-2 text-center font-semibold text-[#EEEEEE] transition-all hover:bg-[#393E46]"
                onClick={toggleMenu}
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 md:hidden"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
