import './home.css';
import Gallery from "../../components/gallery/gallery";

function Home () {
    return (
    <main className="main">
        <section className="photos">
            <div className="container">
                <h2 className="main__title">Cats Saved from the streets living with a family in a house in Irpin, Ukraine</h2>
                <Gallery/>
            </div>
        </section>
    </main>
    );

}

export default Home;