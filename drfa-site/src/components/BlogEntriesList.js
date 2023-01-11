import blogEntries from "../pages/blog-content";
import { Link } from "react-router-dom";

const BlogEntriesList = () => {
    return (
        <>
        {blogEntries.map( blogEntry => (
            <Link key={blogEntry.name} to={`/blog/${blogEntry.name}`} className="blog-list-item">
                {/* Display the title of the blog entry */}
                <h3>{blogEntry.title}</h3>
                {/* Display a small snippet of the blog entry */}
                <p>{blogEntry.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </>
    )

}

export default BlogEntriesList;