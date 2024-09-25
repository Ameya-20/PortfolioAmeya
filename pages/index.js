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
import ProjectSlider from "../components/ProjectSlider";
import Journey from "../components/Journey";  // Import Journey component
import Typical from 'react-typical'; 
// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    if (workRef.current) {
      window.scrollTo({
        top: workRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.error("aboutRef is not defined.");
    };

  };

  const handleAboutScroll = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.error("aboutRef is not defined.");
    };

  };

  const handleSkillsScroll = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: skillsRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.error("aboutRef is not defined.");
    };
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
          className="text-2xl tablet:text-5xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleSkillsScroll={handleSkillsScroll}
        />
        <div className="laptop:mt-5 mt-5">
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
        className="text-2xl tablet:text-4xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 mt-10"
      >
        <Typical
          steps={[
            'Welcome To My Website 💐🎊', 2000,
            'I am Ameya Rahurkar ✌️😎', 2000,
            
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>

      <Socials className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5" />
    </div>
  

            {/* Image Section */}
            <div className="flex-1 p-5">
              <img
                src={data.profileImage}
                alt="Profile"
                className="rounded-full mx-auto w-72 h-72 object-cover tablet:w-96 tablet:h-96 laptop:w-[30rem] laptop:h-[30rem]"
                style={{ height: "500px", width: "500px" }}
              />
            </div>

          
          
          </div>
        </div>

        {/* Add Journey component here */}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" 
        ref={aboutRef}>
        <Journey/>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
        <ProjectSlider/>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={skillsRef}>
        <Skills/>
        </div>    
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
