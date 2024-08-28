import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Skills from "../components/Skills"; // Import the Skills component

import Journey from "../components/Journey";  // Import Journey component

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head className="text-2xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          className="text-2xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          {/* Create a flex or grid layout for the image and text */}
          <div className="flex flex-col-reverse laptop:flex-row mt-5 items-center">
            <div className="w-full laptop:w-1/2">
              <h1
                ref={textOne}
                className="text-2xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-2xl tablet:text-4xl laptop:text-7xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-2xl tablet:text-4xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-2xl tablet:text-4xl laptop:text-8xl laptopl:text-9xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
              <Socials className="text-2xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5" />
            </div>

            {/* Image Section */}
            <div className="flex-1 p-5">
              <img
                src={data.profileImage}
                alt="Profile"
                className="rounded-full mx-auto w-72 h-72 object-cover tablet:w-96 tablet:h-96 laptop:w-[28rem] laptop:h-[28rem]"
              />
            </div>

          
          
          </div>
        </div>

        {/* Add Journey component here */}
        <Journey />

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Some Analytics Projects</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        
        <Skills/>
            
        {/*
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
 */}
        <Footer />
      </div>
    </div>
  );
}
