import { Tag } from "./tag";

export interface BlogTag {
    blog_id: string;
    tag: Tag
    tag_id: string;
    created_at: string;
    update_at: string;
}
