import AllBlogList from "app/components/allBlogList";
import { getBlogPosts } from "app/db/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Read my thoughts on gaming, software, personal development, and more.",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  allBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  let latestBlog = allBlogs[0];
console.log(latestBlog)
  return (
    <>
      <section className="flex gap-4 bg-[url('/images/clouds.jpg')] h-screen justify-center items-center gap-2 px-6">
        <Link
          key={latestBlog.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${latestBlog.slug}`}>
          <div className="blog-list-item gap-3 justify-center ">
            <img
              src={latestBlog.metadata.bannerImage}
              alt={latestBlog.metadata.title}
              className="basis-2/4"
            />
            <div className="image-container basis-2/4 flex items-center">
              <div>
                <h3 className="title">{latestBlog.metadata.title}</h3>
                <p className="date">{latestBlog.metadata.publishedAt}</p>
              </div>
            </div>
          </div>
        </Link>
      </section>
      <section className="mt-4 mb-4">
        <AllBlogList allBlogs={allBlogs} />
      </section>
    </>
  );
}
