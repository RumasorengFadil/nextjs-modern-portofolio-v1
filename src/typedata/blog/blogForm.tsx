import { JSONContent } from "novel";

export interface BlogForm {
    id: string
    title: string,
    tags: string[],
    status: string,
    content: string,
    contentJSON: string,
    thumbnail: File | string,
    categoryId: string,
    image_url: string,
}
