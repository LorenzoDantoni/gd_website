import { groq } from "next-sanity";

// Get all posts with optional filtering and sorting
export const postsQuery = (federation?: string, sort: string = "desc") => {
  const filter = federation ? `&& federation == "${federation}"` : "";

  return groq`*[_type == "post" ${filter}] | order(publishedAt ${sort}) {
    _id,
    _createdAt,
    title,
    slug,
    federation,
    publishedAt,
    mainImage,
    "imageURL": mainImage.asset->url,
    body
  }`;
};

// Get a single post by its _id
export const postQuery = groq`*[_type == "post" && _id == $id][0]{
  _id,
  _createdAt,
  title,
  slug,
  federation,
  publishedAt,
  mainImage,
  "imageURL": mainImage.asset->url,
  body
}`;

// Get the last 4 posts sorted by date
export const lastPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...4] {
  _id,
  _createdAt,
  title,
  slug,
  federation,
  publishedAt,
  mainImage,
  "imageURL": mainImage.asset->url,
  body
}`;

// Get all posts by federation
export const postsByFederationQuery = groq`*[_type == "post" && federation == $federation] | order(publishedAt desc)[0...4] {
  _id,
  _createdAt,
  title,
  slug,
  federation,
  publishedAt,
  mainImage,
  "imageURL": mainImage.asset->url,
  body
}`;

// Get all distinct federations
export const federationsQuery = groq`array::unique(*[_type == "post" && defined(federation)].federation)`;
