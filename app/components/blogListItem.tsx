import Link from 'next/link';
import './blogCard.css'

export default function BlogListItem({ title, publishedAt, bannerImage, slug }) {
    return (
        <Link
            key={slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${slug}`}
        >
            <div className="blog-list-item gap-3 justify-center ">
                <img src={bannerImage} alt={title} className='basis-2/4'/>
                <div className="image-container basis-2/4 flex items-center">    
                    <div>
                        <h3 className="title">{title}</h3>
                        <p className="date">{publishedAt}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
