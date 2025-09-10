interface Link {
    active: boolean,
    label: string | null,
    url: string | null
}
export interface Pagination<T> {
    data: T[],
    links: Link[]
    from: string,
    last_page: string
    next_page_url: string 
    prev_page_url: string 
    current_page: number 
}
