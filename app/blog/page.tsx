import { getBlogPosts } from 'app/db/blog';
import BlogCard from 'app/components/blogCard';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on gaming, software, personal development, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      <p className='text-neutral mb-4'>
        Read my thoughts on gaming, software, personal development, and more.
      </p>
      <div className="scrolling-wrapper">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <BlogCard key={index} {...post.metadata} slug={post.slug} />
          ))}
      </div>
    </section>
  );
}