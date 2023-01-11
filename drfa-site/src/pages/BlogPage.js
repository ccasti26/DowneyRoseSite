import { useParams } from 'react-router-dom';
import MostRecentPostsAside from '../components/MostRecentPostsAside';
import blogEntries from "./blog-content";

const BlogPage = () => {
    const { blogID } = useParams();
    const blogEntry = blogEntries.find(blogEntry => blogEntry.name === blogID);
    const imagefilepath=`../_images/${blogEntry.imageSRC}`

    return (
        <>
        <main>
        <h1>{blogEntry.title}</h1>
        <img src={imagefilepath} alt={blogEntry.imageALT} />
        {blogEntry.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </main>
        <MostRecentPostsAside />
        </>
    );
}

export default BlogPage;