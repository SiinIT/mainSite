import React from "react";

import Header2 from "@/components/headers/Header2";
import SearchPopup from "@/components/headers/component/SearchPopup";
import Blogs from "@/components/homes/home-2/Blogs";
import Awards from "@/components/homes/common/Awards";
import Features from "@/components/homes/home-2/Features";
import Hero from "@/components/homes/home-2/Hero";

import Portfolio from "@/components/homes/home-2/Portfolio";
import Skills from "@/components/homes/common/Skills";
import Video from "@/components/homes/home-2/Video";
import Clients from "@/components/homes/home-2/Clients";
import Cta from "@/components/homes/home-3/Cta";
import Footer5 from "@/components/footers/Footer5";
import MarqueeComponent from "@/components/common/Marquee";
import Steps from "@/components/homes/home-5/Steps";
import { getCourses } from "@/sanity/sanity-utils";


export const metadata = {
  title: "Home 2 || Frisk - Creative Agency & Portfolio Nextjs Template",
};


export default async function HomePage2() {

  const courses = await getCourses();

  console.log(courses)

  return (
    <>
      <SearchPopup />
      <Header2 />
      <Hero />
      <MarqueeComponent />
      <Features />
      <Skills />
      <Portfolio />
      <Steps/>
      <Awards />
      <Video />
      <Blogs courses={courses} />
      <Clients />
      <Cta />
      <Footer5 />
    </>
  );
}
