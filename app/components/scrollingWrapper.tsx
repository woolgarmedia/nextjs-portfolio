
"use client"
import BlogCard from "./blogCard";
import useEmblaCarousel from 'embla-carousel-react'
import "./scroll.css"

export default function ScrollingWrapper({allBlogs}) {
  const [emblaRef] = useEmblaCarousel();  

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {allBlogs
                .map((post, index) => (
                  <BlogCard key={index} {...post.metadata} slug={post.slug} />
                ))}
            </div>
        </div>
    )
}
