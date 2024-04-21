import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineDocument } from "react-icons/hi"

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#9a4ce7]">Andrew</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Computer Science Student</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            TEST ipsum dolor sit amet, consectetur adipiscing elit. Donec
            faucibus molestie est, ac ultrices ex porttitor nec. Sed condimentum
            finibus auctor. Integer eu imperdiet nunc. Vivamus nisi urna,
            egestas nec nisi rhoncus, posuere interdum sem. Donec nulla nunc,
            sollicitudin nec leo a, varius rutrum justo. Cras nec nisl cursus,
            vulputate purus in, venenatis ante. Aliquam imperdiet, nulla et
            accumsan sodales, enim urna iaculis est, sit amet vulputate enim
            elit sit amet orci. Nullam et suscipit ex.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/andrew-mcl/" target="_blank">
              <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin className="text-2xl" />
              </div>
            </a>
            <a href="https://github.com/andrewmcl6081" target="_blank">
              <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-2xl" />
              </div>
            </a>
            <a href="mailto:andrewmcl6081@gmail.com">
              <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-2xl" />
              </div>
            </a>
            <a href="/Andrew_McLaughlin_Resume.pdf" target="_blank">
              <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineDocument className="text-2xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
