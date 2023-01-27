import MostRecentPostsAside from "../components/MostRecentPostsAside";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>

        <main>
            <h2>Our 2023 Float Concept</h2>
            <img src='../_images/DRFA-concept-2023.bmp' alt='2023 Rose Float Concept' width='100%'/>
            <p>Our concept for the 2023 Pasadena Tournament of Roses&reg; features bees turning beautiful flowers into delicious honey.</p>
            <Link key={'concept-2023-float'} to={`/blog/concept-2023-float`}>More about our concept</Link>
        </main>
        <MostRecentPostsAside />
        </>

    );
}

export default HomePage;