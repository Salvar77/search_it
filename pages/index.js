import Head from "next/head";
import Hero from "@/components/Main/Hero";
import AboutMe from "@/components/Main/AboutMe";
import Projects from "@/components/Main/Projects.";
import Realizations from "@/components/Main/Realizations";
import Contact from "@/components/Main/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Search IT - Usługi tworzenia stron i sklepów internetowych
        </title>
        <meta
          property="og:image"
          content="https://www.searchit.pl/logoJpg1.jpg"
        />
        <meta
          name="description"
          content="Search IT - Usługi tworzenia stron i sklepów internetowych"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <div className="container">
        <AboutMe />
        <Realizations />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
