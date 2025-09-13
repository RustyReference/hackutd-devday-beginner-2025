import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Courses from "./components/courses";
import CourseCard from "./components/coursecard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Courses />
    </>
  );
}
