import { groq } from "next-sanity";

// Get all posts with optional filtering and sorting
export const postsQuery = (
  federation?: string,
  sort: string = "desc",
  search?: string,
) => {
  const filters = [];
  if (federation) {
    filters.push(`federation == "${federation}"`);
  }
  if (search) {
    filters.push(`title match "*${search}*"`);
  }

  const filter = filters.length > 0 ? `&& ${filters.join(" && ")}` : "";

  return groq`*[_type == "post" ${filter}] | order(publishedAt ${sort}) {
    _id,
    _createdAt,
    title,
    slug,
    federation,
    publishedAt,
    cardImage,
    postImage,
    "cardImageURL": cardImage.asset->url,
    "postImageURL": postImage.asset->url,
    body,
    documents[]->{
      _id,
      title,
      "fileURL": file.asset->url,
      federation,
      publishedAt
    }
  }`;
};

export const documentsQuery = (
  federation?: string,
  sort: string = "desc",
  search?: string,
) => {
  const filters = [];
  if (federation) {
    filters.push(`federation == "${federation}"`);
  }
  if (search) {
    filters.push(`title match "*${search}*"`);
  }
  const filter = filters.length > 0 ? `&& ${filters.join(" && ")}` : "";

  return groq`*[_type == "documento" ${filter}] | order(publishedAt ${sort}) {
    _id,
    _createdAt,
    title,
    slug,
    federation,
    publishedAt,
    "fileURL": file.asset->url
  }`;
};

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  slug,
  federation,
  publishedAt,
  cardImage,
  postImage,
  "cardImageURL": cardImage.asset->url,
  "postImageURL": postImage.asset->url,
  body,
  documents[]->{
    _id,
    title,
    "fileURL": file.asset->url,
    federation,
    publishedAt
  }
}`;

export const lastPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...4] {
  _id,
  _createdAt,
  title,
  slug,
  federation,
  publishedAt,
  cardImage,
  postImage,
  "cardImageURL": cardImage.asset->url,
  "postImageURL": postImage.asset->url,
  body,
  documents[]->{
    _id,
    title,
    "fileURL": file.asset->url,
    federation,
    publishedAt
  }
}`;

// Get all posts by federation
export const postsByFederationQuery = groq`*[_type == "post" && federation == $federation] | order(publishedAt desc)[0...4] {
  _id,
  _createdAt,
  title,
  slug,
  federation,
  publishedAt,
  cardImage,
  postImage,
  "cardImageURL": cardImage.asset->url,
  "postImageURL": postImage.asset->url,
  body,
  documents[]->{
    _id,
    title,
    "fileURL": file.asset->url,
    federation,
    publishedAt
  }
}`;

// Get all distinct federations
export const federationsQuery = groq`array::unique(*[_type == "post" && defined(federation)].federation)`;

// Get all distinct federations for documents
export const documentFederationsQuery = groq`array::unique(*[_type == "documento" && defined(federation)].federation)`;

// Get all documents by federation
export const documentsByFederationQuery = groq`*[_type == "documento" && federation == $federation] | order(publishedAt desc)[0...4] {
  _id,
  _createdAt,
  title,
  slug,
  federation,
  publishedAt,
  "fileURL": file.asset->url
}`;
