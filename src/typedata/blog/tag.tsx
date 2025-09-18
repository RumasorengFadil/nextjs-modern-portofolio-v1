import { Blog } from "./blog"

export interface Tag{
    id:string
    name:string
    slug:string
    created_at:string
    update_at:string
    blogs: Blog[]
}