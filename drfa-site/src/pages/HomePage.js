import MostRecentPostsAside from "../components/MostRecentPostsAside";
import MostRecentPostsList from "../components/MostRecentPostsList";

const HomePage = () => {
    return (
        <>

        <main>
            <h2>Our 2023 Float Concept</h2>
            <img src='../_images/DRFA-concept-2023.bmp' alt='2023 Rose Float Concept' width='100%'/>
            <p>Our concept for the 2023 Pasadena Tournament of Roses&reg; features bees turning beautiful flowers into delicious honey.</p>
            <a href="#">More about our concept</a>
        </main>
        <MostRecentPostsAside />
        </>

    );
}

export default HomePage;