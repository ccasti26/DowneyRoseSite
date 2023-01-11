import blogEntries from "../pages/blog-content";
import { Link } from "react-router-dom";

const MostRecentPostsList = () => {
    return (
        <>
        <Link key={blogEntries[0].name} to={`/blog/${blogEntries[0].name}`} className="blog-list-item">
        <img src={`../_images/${blogEntries[0].imageSRC}`} alt={blogEntries[0].imageALT} />
            <h3>{blogEntries[0].title}</h3>
            <h5>{blogEntries[0].date}</h5>
            <p>{blogEntries[0].content[0].substring(0, 150)}...</p>
        </Link>
        <Link key={blogEntries[1].name} to={`/blog/${blogEntries[1].name}`} className="blog-list-item">
            <img src={`../_images/${blogEntries[1].imageSRC}`} alt={blogEntries[1].imageALT} />
            <h3>{blogEntries[1].title}</h3>
            <h5>{blogEntries[1].date}</h5>
            <p>{blogEntries[1].content[0].substring(0, 150)}...</p>
        </Link>
        <Link key={blogEntries[2].name} to={`/blog/${blogEntries[2].name}`} className="blog-list-item">
            <img src={`../_images/${blogEntries[2].imageSRC}`} alt={blogEntries[2].imageALT} />
            <h3>{blogEntries[2].title}</h3>
            <h5>{blogEntries[2].date}</h5>
            <p>{blogEntries[2].content[0].substring(0, 150)}...</p>
        </Link>
        </>

    );
}

export default MostRecentPostsList;