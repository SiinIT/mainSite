import React from "react";
import MarqueeComponent from "@/components/common/Marquee";
import Footer5 from "@/components/footers/Footer5";
import Header2 from "@/components/headers/Header2";
import Cta from "@/components/homes/home-3/Cta";
import { getLessonBySlug } from "@/sanity/sanity-utils";
import RenderBodyContent from "../../components/RenderBodyContent";
import Breadcumb from "../../components/Breadcumb";
import Link from "next/link";

export default async function Lesson({ params }) {
  const l = await getLessonBySlug(params.lesson_slug);

  const { title, slug, course, body, publishedAt, nextLesson, previousLesson } = l;

  console.log(l);

  return (
    <>
      <Header2 sticky={true} />
      <div className="project-details-page-area mb-80">
        <Breadcumb title={title} mainImage={course.mainImage} />
        <div className="container">
          <div className="container mt-5">
            <div className="row justify-content-between flex-row-reverse mb-80">
              <div className="col-lg-12">
                <div className="title-area mb-35">
                  <h2 className="sec-title">{title}</h2>
                  <div className="sec-text mt-30">
                    <RenderBodyContent content={body} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              {/* Pulsante "Precedente" */}
              {previousLesson ? (
                <Link
                  className="nav-btn"
                  scroll={false}
                  href={`/course/${course.slug.current}/lesson/${previousLesson.slug.current}`}
                >
                  <i className="fa fa-arrow-left"></i>
                  <span className="link-effect">
                    <span className="effect-1">Precedente</span>
                    <span className="effect-1">Precedente</span>
                  </span>
                </Link>
              ) : (
                <Link
                  className="nav-btn"
                  scroll={false}
                  href={`/course/${course.slug.current}`}
                >
                  <i className="fa fa-arrow-left"></i>
                  <span className="link-effect">
                    <span className="effect-1">Introduzione</span>
                    <span className="effect-1">Introduzione</span>
                  </span>
                </Link>
              )}

              {/* Pulsante "Prossimo" */}
              {nextLesson ? (
                <Link
                  className="nav-btn"
                  scroll={false}
                  href={`/course/${course.slug.current}/lesson/${nextLesson.slug.current}`}
                >
                  <span className="link-effect">
                    <span className="effect-1">Prossimo</span>
                    <span className="effect-1">Prossimo</span>
                  </span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              ) : (
                <Link
                  className="nav-btn"
                  scroll={false}
                  href={`/course/${course.slug.current}`}
                >
                  <span className="link-effect">
                    <span className="effect-1">Fine</span>
                    <span className="effect-1">Fine</span>
                  </span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <MarqueeComponent />
      <Cta />
      <Footer5 />
    </>
  );
}
