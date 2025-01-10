import Image from "next/image";
import certsData from "@/data/certsData";

const Certifications = () => {
  return (
    <div id="certs" className="w-full py-8 px-4 mb-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#9a4ce7]">
          Certifications
        </p>
        <h2 className="py-4 mb-8">Professional Achievements</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certsData.map((cert, index) => (
            <a
              key={index}
              href={cert.credlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-1/2 lg:w-[360px] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer bg-white flex flex-col justify-between h-full"
            >
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-[120px] sm:w-[140px] lg:w-[160px]">
                  <Image
                    src={cert.imagePath}
                    alt={cert.alt}
                    width={160}
                    height={160}
                    className="rounded-md object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-700">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">Issued {cert.issueDate}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center mt-4 text-gray-600">
          Click on any certification to verify on Credly
        </p>
      </div>
    </div>
  );
};

export default Certifications;