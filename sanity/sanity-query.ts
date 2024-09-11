import { groq } from "next-sanity";

//Course query

const courseData = `{
  title,
  metadata,
  slug,
  tags,
  whatWillYouLearn,
  description,
  mainImage
}`;

export const courseQuery = groq`*[_type == "course"]{title,slug,mainImage}`;

export const courseQueryBySlug = groq`*[_type == "course" && slug.current == $slug][0] ${courseData}`;

//Lessons query

export const lessonsQueryByCourseSlug = groq