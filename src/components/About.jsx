import Image from "next/image"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex flex-col items-center py-16 px-4">
      {/* Vertical Line */}
      <div className="bg-gray-200 w-1 h-16 rounded-full mb-8 dark:bg-opacity-60"/>

      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#9a4ce7]">
            About
          </p>
          <h2 className="py-2 text-gray-700">Who I Am</h2>
          <p className="py-2 text-gray-700 text-lg">
            I&apos;m a passionate developer that enjoys building front-end and
            back-end solutions. I thrive on tackling challenging problems and
            enjoy the intrcacy of turning complex issues into streamlined,
            accessible solutions. My journey in development is driven by an
            interest in creating secure and robust applications. I&apos;m
            currently working on new applications with a security focused
            approach and learning how to mitigate and prevent common
            vulnerabilities.
          </p>
          <p className="py-2 text-gray-700 text-lg">
            In my free time I enjoy hobbies such as hiking, fishing, playing
            pool, and seeing friends. My goal is to continue enjoying life while
            learning to become a proficient developer through collaborating with
            others and picking up new technologies and skills along the way.
          </p>
          <a href="https://github.com/andrewmcl6081" target="_blank">
            <p className="py-2 text-gray-700 text-lg underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </a>
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
