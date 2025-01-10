import Image from "next/image"
import "@/data/toolsData";
import toolsData from "@/data/toolsData";

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen px-4 py-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#9a4ce7]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolsData.map((tool, index) => (
            <div key={index} className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-white">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    height={60}
                    width={60}
                    priority
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  {tool.displayName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
