export interface Photo {
    url: string;
}

export interface Author {
    bio: string;
    name: string;
    id: string;
    photo: Photo;
}

export interface FeaturedImage {
    url: string;
}

export interface Category {
    name: string;
    slug: string;
}

export interface Node {
    author: Author;
    createdAt: Date;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: FeaturedImage;
    categories: Category[];
}

export interface Post {
    node: Node;
}

export interface PostsConnection {
    edges: Post[]; // renamging edges to posts (Original data will have edges)
}

export interface Data {
    postsConnection: PostsConnection;
}

// Sample data
// {
//     "data": {
//       "postsConnection": {
//         "edges": [
//           {
//             "node": {
//               "author": {
//                 "bio": "Hi there, I'm Abdul Ahad Siddiqui, a Software Engineer 🚀 from India. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡.",
//                 "name": "Abdul Ahad Siddiqui",
//                 "id": "clb9gjtsz34790apmtw2ynz9b",
//                 "photo": {
//                   "url": "https://media.graphassets.com/qABzkIICQgGeYzekX261"
//                 }
//               },
//               "createdAt": "2022-12-04T14:32:06.225059+00:00",
//               "slug": "top-ten-common-mistakes-react-programmers-make",
//               "title": "Top Ten Common Mistakes React Programmers Make",
//               "excerpt": "Sed rhoncus, libero nec imperdiet eleifend, massa justo ullamcorper libero, non porttitor mauris felis sed leo.",
//               "featuredImage": {
//                 "url": "https://media.graphassets.com/kPrn9AjxS0moI2kXKROx"
//               },
//               "categories": [
//                 {
//                   "name": "Web Development",
//                   "slug": "webdev"
//                 }
//               ]
//             }
//           }
//         ]
//       }
//     }
//   }
