import MarqueeComponent from "@/components/common/Marquee";
import Breadcumb from "@/components/contact/Breadcumb";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Cta from "@/components/homes/home-3/Cta";
import Footer5 from "@/components/footers/Footer5";
import Header2 from "@/components/headers/Header2";
import React from "react";

export const metadata = {
  title: "Contact || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function ContactPage() {
  return (
    <>
      <Header2 sticky={true}/>      
      <Breadcumb />
      <ContactInfo />
      <Contact />
      <MarqueeComponent />
      <Cta/>
      <Footer5 />
    </>
  );
}
