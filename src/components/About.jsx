import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#9a4ce7]">
            About
          </p>
          <h2 className="py-2 text-gray-700">Who I Am</h2>
          <p className="py-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            faucibus molestie est, ac ultrices ex porttitor nec. Sed condimentum
            finibus auctor. Integer eu imperdiet nunc. Vivamus nisi urna,
            egestas nec nisi rhoncus, posuere interdum sem. Donec nulla nunc,
            sollicitudin nec leo a, varius rutrum justo. Cras nec nisl cursus,
            vulputate purus in, venenatis ante. Aliquam imperdiet, nulla et
            accumsan sodales, enim urna iaculis est, sit amet vulputate enim
            elit sit amet orci. Nullam et suscipit ex.
          </p>
          <p className="py-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            faucibus molestie est, ac ultrices ex porttitor nec. Sed condimentum
            finibus auctor. Integer eu imperdiet nunc. Vivamus nisi urna,
            egestas nec nisi rhoncus, posuere interdum sem. Donec nulla nunc,
            sollicitudin nec leo a, varius rutrum justo. Cras nec nisl cursus,
            vulputate purus in, venenatis ante. Aliquam imperdiet, nulla et
            accumsan sodales, enim urna iaculis est, sit amet vulputate enim
            elit sit amet orci. Nullam et suscipit ex.
          </p>
          <p className="py-2 text-gray-700 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-[320px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center py-2 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/body_shot.jpg"
            alt="/"
            width="300"
            height="150"
          />
        </div>
      </div>
    </div>
  )
}

export default About
