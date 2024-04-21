import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineDocument } from 'react-icons/hi'

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#9a4ce7]">Andrew</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Computer Science Student</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            faucibus molestie est, ac ultrices ex porttitor nec. Sed condimentum
            finibus auctor. Integer eu imperdiet nunc. Vivamus nisi urna,
            egestas nec nisi rhoncus, posuere interdum sem. Donec nulla nunc,
            sollicitudin nec leo a, varius rutrum justo. Cras nec nisl cursus,
            vulputate purus in, venenatis ante. Aliquam imperdiet, nulla et
            accumsan sodales, enim urna iaculis est, sit amet vulputate enim
            elit sit amet orci. Nullam et suscipit ex.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin className="text-2xl" />
            </div>
            <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub className="text-2xl" />
            </div>
            <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail className="text-2xl" />
            </div>
            <div className="rounded-full border-2 border-gray-400 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineDocument className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
