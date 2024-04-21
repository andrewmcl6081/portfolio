import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrew | Software Engineer</title>
        <meta name="description" content="Generated by create next app"/>
      </Head>

      <Navbar />

      <Hero />
    </div>
  );
}
