import Image from "next/image";
import Link from "next/link";
import Breadcumb from "./Breadcumb";
import RenderBodyContent from "./RenderBodyContent";
import LectureList from "../lecture/components/LectureList"
import { notFound } from 'next/navigation'

export default async function CourseDetails({ course }) {

  console.log(course);

  const { title, slug, whatWillYouLearn, description, mainImage } = course;
  
  return (
    <div className="project-details-page-area">
      <Breadcumb title={title} mainImage={mainImage} />
      <div className="container mt-5">
        <div className="row justify-content-between flex-row-reverse mb-80">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span>Category:</span>Development
                </li>
                <li>
                  <span>Software:</span>WordPress, Figma
                </li>
                <li>
                  <span>Service:</span>Development
                </li>
                <li>
                  <span>Client:</span>Eunice Mills
                </li>
                <li>
                  <span>Date:</span>October 6, 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{title}</h2>
              <div className="sec-text mt-30">
              <RenderBodyContent content={description} />
              </div>
            </div>
            <h3 className="mt-35">Cosa Imparerai ?</h3>
            <div className="sec-text mb-n1">
              <RenderBodyContent content={whatWillYouLearn} />
            </div>
          </div>
          <div className="col-lg-12">
          <h3 className="mt-35">Lezioni</h3>
            <p className="sec-text mb-n1">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
