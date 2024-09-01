import { groq } from "next-sanity";

const courseData = `{
  title,
  metadata,
  slug,
  tags,
  whatWillYouLearn,
  description,
  mainImage
}`;

export const courseQuery = groq`*[_type == "course"] ${courseData}`;

export const courseQueryBySlug = groq`*[_type == "course" && slug.current == $slug][0] ${courseData}`;
