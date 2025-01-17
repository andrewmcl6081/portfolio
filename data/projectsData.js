
import { MessageCircleMore, Images, CarFront } from "lucide-react";

const projects = [
  {
    title: "Cloud Chat",
    description: "A highly scalable real-time mesaaging platform supporting multi-user conversations, file attachments, user lookup by email, presence tracking, and powered by AWS",
    technologies: ["Remix, WebSockets, Auth0, Redis, RDS"],
    github: "https://github.com/andrewmcl6081/cloudchat",
    live: "https://www.google.com",
    category: "Fullstack Application",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-600",
    icon: MessageCircleMore
  },
  {
    title: "Textract",
    description: "Light weight and efficient screenshot tool written in Go enabling users to extract text from selected screen areas",
    technologies: ["Go", "OpenGL", "RobotGo", "OCR"],
    github: "https://github.com/andrewmcl6081/cloudchat",
    live: "https://www.google.com",
    category: "Desktop Application",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    icon: Images
  },
  {
    title: "Traffic Counter",
    description: "Advanced video processing pipeline in OpenCV that accurately counts vehicles traveling in different directions on a busy road",
    technologies: ["OpenCV", "C++", "CMake"],
    github: "https://github.com/andrewmcl6081/traffic-counter",
    live: "https://www.google.com",
    category: "Video Processing Pipeline",
    gradientFrom: "from-red-500",
    gradientTo: "to-orange-600",
    icon: CarFront
  }
];

export default projects;