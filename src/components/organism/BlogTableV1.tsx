"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { Pagination } from "@/typedata/pagination/pagination";
import { Blog } from "@/typedata/blog/blog";
import axiosClient from "@/lib/axiosClient";

const ALL_COLUMNS = ["title", "author", "date", "status", "comments", "views"];

export default function BlogTable({ pagination, onDelete = () => { }, searchDefValue = null }: { pagination: Pagination<Blog>, onDelete?: (res: unknown) => void, searchDefValue?: string | null }) {
  const {
    data: blogs,
    prev_page_url,
    next_page_url,
  } = pagination;

  // Columns visibility state
  const [visibleColumns, setVisibleColumns] = useState<string[]>(ALL_COLUMNS);

  // Search state
  const [searchKey, setSearchKey] = useState<string>(searchDefValue ?? "");

  // Select state
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const allSelected = selectedRows?.length === blogs?.length;

  const router = useRouter();
  //Using usePage hooks
  // const { props } = usePage();

  // Access message error or success
  // const flash = props.flash as { success?: string, error?: string }

  //Using useForm hooks

  // Toggle select all
  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(blogs.map((b) => b.id));
    }
  };

  // Toggle single row
  const toggleSelectRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  // Toggle visible column
  const toggleColumn = (column: string) => {
    setVisibleColumns((prev) =>
      prev.includes(column)
        ? prev.filter((col) => col !== column)
        : [...prev, column]
    );
  };

  return (
    <div className="">
      {/* Header Filter */}
      <div className="flex items-center py-4 gap-2">
        <form className="w-full" onSubmit={(e) => {
          e.preventDefault();
          const url = new URL(window.location.href);
          url.searchParams.set("search", searchKey);
          url.searchParams.set("page", "1");

          router.push(url.pathname + "?" + url.searchParams.toString());
        }}>
          <Input placeholder="Search blog title..." onChange={(e) => setSearchKey(e.target.value)} value={searchKey} className="max-w-sm" />
        </form>
        {selectedRows.length > 0 && (
          <Button
            variant="destructive"
            onClick={() => {
              if (confirm("Are you sure you want to delete selected blogs?")) {
                axiosClient.delete("/api/blog/destroys", {
                  data: {
                    ids: selectedRows
                  }
                }).then(res => {
                  setSelectedRows([]);
                  onDelete(res);
                });
              }
            }}
          >
            Delete Selected ({selectedRows.length})
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {ALL_COLUMNS.map((column) => (
              <DropdownMenuCheckboxItem
                key={column}
                checked={visibleColumns.includes(column)}
                onCheckedChange={() => toggleColumn(column)}
              >
                {column}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table Content */}
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox
                  aria-label="Select all"
                  checked={allSelected}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              {visibleColumns.includes("title") && <TableHead>Title</TableHead>}
              {visibleColumns.includes("author") && <TableHead>Author</TableHead>}
              {visibleColumns.includes("date") && <TableHead>Date</TableHead>}
              {visibleColumns.includes("status") && <TableHead>Status</TableHead>}
              {visibleColumns.includes("comments") && <TableHead>Comments</TableHead>}
              {visibleColumns.includes("views") && <TableHead>Views</TableHead>}
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <Checkbox
                    aria-label="Select row"
                    checked={selectedRows.includes(blog.id)}
                    onCheckedChange={() => toggleSelectRow(blog.id)}
                  />
                </TableCell>
                {visibleColumns.includes("title") && (
                  <TableCell>{blog.title}</TableCell>
                )}
                {visibleColumns.includes("author") && (
                  <TableCell>{blog.user.name}</TableCell>
                )}
                {visibleColumns.includes("date") && (
                  <TableCell>
                    {format(new Date(blog.created_at), "dd MMM yyyy")}
                  </TableCell>
                )}
                {visibleColumns.includes("status") && (
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${blog.status === "draft"
                        ? "bg-gray-100 text-gray-700"
                        : "bg-green-100 text-green-700"
                        }`}
                    >
                      {blog.status}
                    </span>
                  </TableCell>
                )}
                {visibleColumns.includes("comments") && (
                  <TableCell>{blog.comments.length}</TableCell>
                )}
                {visibleColumns.includes("views") && (
                  <TableCell>{blog.views}</TableCell>
                )}
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <Link href={`/admin/manage-blog/preview/${blog.id}`}>
                        <DropdownMenuItem className="cursor-pointer">
                          Preview
                        </DropdownMenuItem>
                      </Link>
                      <Link href={`/admin/manage-blog/edit/${blog.id}`}>
                        <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem
                        onClick={() => {
                          if (confirm("Are you sure you want to delete selected blogs?")) {
                            axiosClient.delete(`/api/blog/destroy/${blog?.id}`).then((res) => {
                              onDelete(res);
                            });
                          }
                        }}
                        className="text-red-500 cursor-pointer"
                      >
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4 text-sm text-muted-foreground">
        <div>{selectedRows.length} row(s) selected.</div>
        <div className="space-x-2">
          <div
            className="inline-block"
            onClick={(e) => {
              e.preventDefault();
              if (!prev_page_url) return;

              const page = new URL(prev_page_url ?? "").searchParams.get("page") || null;
              const url = new URL(window.location.href);
              url.searchParams.set("page", page ?? "");

              router.push(url.pathname + "?" + url.searchParams.toString(), {scroll:false});
            }}
          >
            <Button
              variant="outline"
              size="sm"
              className={`${prev_page_url ? "" : "bg-muted text-muted-foreground cursor-auto hover:text-muted-foreground"}`}
            >
              Previous
            </Button>
          </div>
          <div
            className="inline-block"
            onClick={(e) => {
              e.preventDefault();
              if (!next_page_url) return;
              const page = new URL(next_page_url ?? "").searchParams.get("page") || null;
              const url = new URL(window.location.href);
              url.searchParams.set("page", page ?? "");

              router.push(url.pathname + "?" + url.searchParams.toString(), {scroll:false});
            }}
          >
            <Button
              variant="outline"
              size="sm"
              className={`${next_page_url ? "" : "bg-muted text-muted-foreground cursor-auto hover:text-muted-foreground"}`}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

