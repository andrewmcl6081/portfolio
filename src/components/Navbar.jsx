import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleNav = () => setNav(!nav);

  const navLinks = [
    { displayName: "Home", name: "home", href: "#home" },
    { displayName: "About", name: "about", href: "#about" },
    { displayName: "Projects", name: "projects", href: "#projects" },
    { displayName: "Certs", name: "certs", href: "#certs"},
    { displayName: "Skills", name: "skills", href: "#skills" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe actions
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed w-full z-[100]">
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-gray-200 items-center justify-center rounded-full px-6 py-3 shadow-md">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} >
            <span
              onClick={() => setActiveLink(link.name)}
              className={`mx-4 text-gray-700 text-sm md:text-lg transition-all duration-300 ${
                activeLink === link.name
                  ? "bg-white text-black px-4 py-2 rounded-full shadow"
                  : "hover:text-black"
              }`}
            >
              {link.displayName}
            </span>
          </Link>
        ))}
        
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={handleNav}
          style={{
            backgroundColor: "white",
            backgroundImage: "none",
          }}
          className="p-3 rounded-full shadow-lg hover:bg-gray-200 active:bg-gray-300 focus:outline-none transition-all duration-300"
          aria-label="Open menu"
        >
          <AiOutlineMenu size={25} className="text-gray-700"/>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div 
          className={
            nav
              ? "fixed left-0 top-0 wi[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <Image src="/taro.png" alt="Bubble Tea Logo" width={40} height={40} className="rounded-full" />
              <h2 className="font-semibold text-gray-800">Hello there</h2>
            </div>
          </div>
          <nav className="mt-6 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setNav(false);
                }}
              >
                <div
                  className={`mb-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                    activeLink === link.name
                      ? "bg-white shadow-md text-purple-700"
                      : "text-gray-600 hover:bg-white/50 hover:text-purple-600"
                  }`}
                >
                  {link.displayName}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;