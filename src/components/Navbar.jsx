import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiOutlineDocument } from "react-icons/hi"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-20 bg-[#9a4ce7] shadow-2xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/taro.png" alt="/" width="75" height="75" />
        <div>
          <ul className="hidden md:flex">
            <Link href="#home">
              <li className="ml-10 text-md text-white uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-md text-white uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-md text-white uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md text-white uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>

          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 wi[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/taro.png" alt="/" width="75" height="75" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-900 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Hello there</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#home" onClick={handleNav}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#about" onClick={handleNav}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="#skills" onClick={handleNav}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#9a4ce7]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/andrew-mcl/"
                  target="_blank"
                >
                  <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                </a>
                <a href="https://github.com/andrewmcl6081" target="_blank">
                  <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:andrewmcl6081@gmail.com">
                  <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a href="/Andrew_McLaughlin_Resume.pdf" target="_blank">
                  <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <HiOutlineDocument />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
