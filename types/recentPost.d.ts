export interface FeaturedImage {
    url: string;
}

export interface RecentPost {
    title: string;
    featuredImage: FeaturedImage;
    createdAt: Date;
    slug: string;
}

