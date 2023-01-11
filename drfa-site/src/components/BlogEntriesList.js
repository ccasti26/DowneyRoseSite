import blogEntries from "../pages/blog-content";
import { Link } from "react-router-dom";

const BlogEntriesList = () => {
    return (
        <>
        {blogEntries.map( blogEntry => (
            <Link key={blogEntry.name} to={`/blog/${blogEntry.name}`} className="blog-list-item">
                <img src={`../_images/${blogEntry.imageSRC}`} alt={blogEntry.imageALT} />
                {/* Display the title of the blog entry */}
                <h3>{blogEntry.title}</h3>
                <h5>{blogEntry.date}</h5>
                {/* Display a small snippet of the blog entry */}
                <p>{blogEntry.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </>
    )

}

export default BlogEntriesList;