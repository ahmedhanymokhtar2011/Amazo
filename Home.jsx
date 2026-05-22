import Banner from "./src/components/banner/Banner";
import Hero from "./src/components/hero/Hero";
import Products from "./src/components/products/Products";
import Subscribe from "./src/components/subscribe/Subscribe";
import Testimonials from "./src/components/testimonials/Testimonials";
import TopProducts from "./src/components/topProducts/TopProducts";

function Home({ handleOrderPopup }) {
    return (
        <>
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Subscribe />
            <Products />

            <Testimonials />
        </>
    );
}

export default Home;
