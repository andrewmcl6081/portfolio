import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";

const links = [
  {
    href: "https://www.linkedin.com/in/andrew-mcl/",
    label: "LinkedIn",
    icon: <FaLinkedin className="text-xl sm:text-2xl" />
  },
  {
    href: "https://github.com/andrewmcl6081",
    label: "Github",
    icon: <FaGithub className="text-xl sm:text-2xl" />
  },
  {
    href: "mailto:andrewmcl6081@gmail.com",
    label: "Email",
    icon: <AiOutlineMail className="text-xl sm:text-2xl" />
  },
  {
    href: "/Andrew_McLaughlin_Resume.pdf",
    label: "Resume",
    icon: <HiOutlineDocument className="text-xl sm:text-2xl" />
  }
];

export default links;