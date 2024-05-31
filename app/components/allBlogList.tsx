
"use client"
import BlogListItem from "./blogListItem";
import Pagination from "./pagination";
import { useState } from "react";
import {paginate} from "./paginate";

export default function AllBlogList({allBlogs}) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(allBlogs, currentPage, pageSize);

    return (
        <div>
            <div className="grid grid-cols-3 p-10">
                {paginatedPosts
                .map((post, index) => (
                  <BlogListItem key={index} {...post.metadata} slug={post.slug} />
                ))}
            </div>
            <Pagination
              items={allBlogs.length} // 5
              currentPage={currentPage} // 1
              pageSize={pageSize} // 2
              onPageChange={onPageChange}
              />
        </div>
    )
}
