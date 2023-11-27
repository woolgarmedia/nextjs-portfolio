import BlogCard from "./blogCard";
import { Metadata } from 'app/types/metadata';

export default function BlogHorizontalScrolling(blogPosts: Metadata[]) {
    return (
        <div className="scrolling-wrapper">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      );
}