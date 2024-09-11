import MarqueeComponent from "@/components/common/Marquee";
import Footer5 from "@/components/footers/Footer5";
import Header2 from "@/components/headers/Header2";
import Cta from "@/components/homes/home-3/Cta";
import { getCourseBySlug } from "@/sanity/sanity-utils";
import CourseDetails from './components/CourseDetails'
export const metadata = {
  title: "Project Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default async function ProjectPageDetails({ params }) {

  const course = await getCourseBySlug(params.slug);

  return (
    <>
      <Header2 sticky={true}/>
      <CourseDetails course={course}/>
      <MarqueeComponent />
      <Cta/>
      <Footer5 />
    </>
  );
  
}
