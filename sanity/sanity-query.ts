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

export const courseQueryBySlug = groq`
  *[_type == "course" && slug.current == $slug][0]{
    ...,
    "lessons": *[_type == "lesson" && references(^._id)]{
      title,
      slug,
      author->{
        name
      },
      publishedAt,
      body
    }
  }
`;

//Lessons query

export const lessonQueryBySlug = groq`
  *[_type == "lesson" && slug.current == $slug][0]{
    title,
    slug,
    author->{
      name
    },
    course->{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    publishedAt,
    body,
    "previousLesson": *[
      _type == "lesson" && course._ref == ^.course._ref && publishedAt < ^.publishedAt
    ] | order(publishedAt desc)[0]{
      title,
      slug,
      publishedAt
    },
    "nextLesson": *[
      _type == "lesson" && course._ref == ^.course._ref && publishedAt > ^.publishedAt
    ] | order(publishedAt asc)[0]{
      title,
      slug,
      publishedAt
    }
  }
`;
