export interface FeaturedImage {
    url: string;
}

export interface Photo {
    url: string;
}

export interface Author {
    name: string;
    bio: string;
    photo: Photo;
}

export interface Child2 {
    text: string;
    bold?: boolean;
    italic?: boolean;
}

export interface Child {
    type: string;
    children: Child2[];
}

export interface Raw {
    children: Child[];
}

export interface Content {
    raw: Raw;
}

export interface Category {
    name: string;
    slug: string;
}

export interface PostDetailInterface {
    title: string;
    excerpt: string;
    featuredImage: FeaturedImage;
    author: Author;
    createdAt: Date;
    slug: string;
    content: Content;
    categories: Category[];
}

