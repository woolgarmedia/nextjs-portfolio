import ScrollingWrapper from 'app/components/scrollingWrapper';
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
      
      <h2 className="font-medium text-1xl">latest blogs</h2>
      <ScrollingWrapper allBlogs={allBlogs}/>
    </section>
  );
}