import Chicago from "./Chicago";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";

function HomePage() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Testimonial />
            <Chicago />
        </main>
    );
}

export default HomePage;