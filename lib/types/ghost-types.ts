export type PostOrPage = {
    slug?: string
    id?: string
    uuid?: string,
    title?: string, 
    html: string,
    comment_id?: string ,
    feature_image?: string,
    feature_image_alt?: string | null,
    feature_image_caption?: string | null,
    featured?: boolean,
    visibility?: string,
    created_at?: string,
    updated_at?: string,
    published_at?: string,
    custom_excerpt?: string | null,
    codeinjection_head?: string | null,
    codeinjection_foot?: string | null,
    custom_template?: string | null,
    canonical_url?: string | null,
    send_email_when_published?: boolean,
    url?: string,
    excerpt?: string,
    reading_time?: number,
    access?: boolean,
    og_image?: null,
    og_title?: null,
    og_description?: null,
    twitter_image?: null,
    twitter_title?: null,
    twitter_description?: null,
    meta_title?: null,
    meta_description?: string | null,
    email_subject?: string | null
    authors?: Author[],
    tags: Tag[]
    primary_author: Author,
    primary_tag?: Tag
};

export type Author = {
    slug?: string,
    id?: string,
    name?: string,
    profile_image?: string,
    cover_image?: string,
    bio?: string,
    website?: string,
    location?: string,
    facebook?: string,
    twitter?: string,
    meta_title?: string,
    meta_description?: string,
    url?: string
};

export type Tag = {
    slug?: string,
    id?: string,
    name?: string,
    description?: string,
    feature_image?: string,
    visibility?: string,
    meta_title?: string,
    meta_description?: string,
    og_image?: string,
    og_title?: string,
    og_description?: string,
    twitter_image?: string,
    twitter_title?: string,
    twitter_description?: string,
    codeinjection_head?: string,
    codeinjection_foot?: string,
    canonical_url?: string,
    accent_color?: string,
    url?: string
}