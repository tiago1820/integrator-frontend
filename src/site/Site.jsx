import { Menu } from "./components/Menu/Menu";
import { Banner } from "./components/Banner/Banner";
import { Features } from "./components/Features/Features";
import { Testimonial } from "./components/Testimonial/Testimonial";


export const Site = () => {
    return (
        <div>
            <Menu />
            <Banner />
            <Features />
            <Testimonial />
        </div>
    )
};