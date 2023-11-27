import Link from 'next/link';
import './blogCard.css'

export default function BlogCard({ title, publishedAt, bannerImage, slug }) {
    return (
        <Link
            key={slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${slug}`}
        >
            <div className="blog-post">
                <div className="image-container">
                    <img src={bannerImage} alt={title} />
                    <div className="overlay">
                        <h3 className="title">{title}</h3>
                        <p className="date">{publishedAt}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
