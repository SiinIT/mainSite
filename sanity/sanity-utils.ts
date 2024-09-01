import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import { courseQuery, courseQueryBySlug } from "./sanity-query";

export const client = createClient(clientConfig);

export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string,
  qParams: QueryParams,
  tags: string[],
}): Promise<QueryResponse> {
  return (
    client.fetch <
    QueryResponse >
    (query,
    qParams,
    {
      cache: "no-cache",
      next: { tags },
    })
  );
}

export const getCourses = async () => {
  const data = await sanityFetch({
    query: courseQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
  return data;
};

export const getCourseBySlug = async (slug: string) => {
  const data = await sanityFetch({
    query: courseQueryBySlug,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });

  return data;
};