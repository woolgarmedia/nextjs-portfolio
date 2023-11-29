"use client"

import BlogCard from "./blogCard";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ScrollingWrapper({allBlogs}) {
    // Settings for the react-slick carousel
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        variableWidth: true, // Set to true if you want variable width slides
        swipeToSlide: true, // Allow users to drag or swipe directly to a slide
        draggable: true, // Allow users to drag the carousel
    };

    return (
        <Slider {...settings}>
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
        </Slider>
    )
}