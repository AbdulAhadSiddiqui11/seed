import { request, gql } from 'graphql-request';

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCSM_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                            url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getPostDetails = async (slug: string) => {
    const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
    //console.log(result.post);
    return result.post;
  };

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails() {
            posts(
                orderBy: createdAt_ASC
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    //console.log(result.posts);
    return result.posts;
}

export const getSimilarPosts = async (categories: string[], slug: string) => {
    const query = gql`
        query getPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug, categories });
    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories() {
            categories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.categories;
}

export const submitComment = async (commentObject: {name: string, email: string, comment: string, slug: string}) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentObject)
    })

    return result.json();
}

export const getComments = async (slug: string) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: {post: {slug: $slug}}) {
                name
                createdAt
                comment
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    //console.log(result.comments);
    return result.comments;
}

export const getCategoryPost = async (slug: string) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
    //console.log(result.postsConnection.edges);
    return result.postsConnection.edges;
  };