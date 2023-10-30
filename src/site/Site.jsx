import { Menu } from "./components/Menu/Menu";
import { Banner } from "./components/Banner/Banner";
import { Features } from "./components/Features/Features";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Prices } from "./components/Prices/Prices";

export const Site = () => {
    return (
        <div>
            <Menu />
            <Banner />
            <Features />
            <Testimonial />
            <Prices />
        </div>
    )
};