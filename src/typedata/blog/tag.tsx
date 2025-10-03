import { Blog } from "./blog"

export interface Tag{
    id:string
    name:string
    slug:string
    blogs_count: string,
    created_at:string
    update_at:string
    blogs: Blog[]
}