import BlogEntriesList from "../components/BlogEntriesList";
import blogEntries from "./blog-content";

const BlogListPage = () => {
    return (
        <>

        <main>
            <h2>Blog Entries</h2>
            <BlogEntriesList blogEntries={blogEntries} />
        </main>
        
        </>
    );
}

export default BlogListPage;