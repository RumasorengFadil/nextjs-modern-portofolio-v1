import { User } from "../auth/user"
import { BlogTag } from "./blogTag"
import { Category } from "./category"
import { Comment } from "./comments"

export interface Blog {
    id: string,
    category_id:string,
    title: string,
    user:User,
    tags: BlogTag[],
    comments: Comment[],
    slug: string,
    content: string,
    contentJSON: string,
    excerpt: string,
    status: string,
    thumbnail: string,
    image_url: string,
    category: Category,
    created_at:string,
    updated_at:string,
    published_at:string,
    views:string,
}
