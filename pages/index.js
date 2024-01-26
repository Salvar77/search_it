import Head from "next/head";
import Hero from "@/components/Main/Hero";
import AboutMe from "@/components/Main/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Search IT</title>
        <meta name="description" content="Search IT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <AboutMe />
    </>
  );
}
