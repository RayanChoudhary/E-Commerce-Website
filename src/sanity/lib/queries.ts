import { defineQuery } from "next-sanity";

export const allProductsQuery = (`
*[_type == "product"]{
  _id,
  name,
  description,
  price,
  "imageUrl": image.asset->url,
  category->{
    name,
    slug
  },
  tags,
  dimensions {
    width,
    height,
    depth,
    _type
  },
  features
}
`);

    export  const fourProduct = defineQuery(`
        *[_type == "product"][0..3]{
        _id,
        category,
        name,
        slug,
        price,
        quantity,
        tags,
        description,
        features,
        dimensions,
        "imageUrl":image.asset->url
        }`)


        // sanity/lib/queries.ts
export const categoriesQuery = `*[_type == "category"]{
    name
  }`;

// sanity/lib/queries.ts
export const userByIdQuery = `
  *[_type == "user" && _id == $id][0]{
    _id,
    name,
    email,
    image,
    emailVerified
  }
`;

export const userByEmailQuery = `
  *[_type == "user" && email == $email][0]{
    _id,
    name,
    email,
    image,
    emailVerified
  }
`;

export const userByAccountQuery = `
  *[_type == "user" && provider == $provider && providerAccountId == $providerAccountId][0]{
    _id,
    name,
    email,
    image,
    emailVerified,
    provider,
    providerAccountId
  }
`;

export const SearchBarquery = `*[_type == "product" && (name match $searchTerm || description match $searchTerm)] {
  _id,
  name,
  description,
  price,
  "imageUrl": image.asset->url
}`;