import Link from 'next/link';
import { getBlogPosts } from 'app/db/blog';

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
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-blue-600 tracking-tight">
                {post.metadata.title}
              </p>
              <p className='text-xs text-neutral-400'>{post.metadata.publishedAt}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}