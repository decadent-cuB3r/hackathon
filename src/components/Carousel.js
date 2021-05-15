import { Carousel } from 'antd';
import Carousel0 from "../images/carousel/carousel-0.png";
import Carousel1 from "../images/carousel/carousel-1.png";
import Carousel2 from "../images/carousel/carousel-2.png";
import Carousel3 from "../images/carousel/carousel-3.png";
import Carousel4 from "../images/carousel/carousel-4.png";

function onChange(a, b, c) {
    console.log(a, b, c);
}

export default function Slider() {
    return (
        <Carousel afterChange={onChange}>
            <div>
                <img style={{ width: "100%"}} src={Carousel0} alt="vege" />
            </div>
            <div>
                <img style={{ width: "100%"}} src={Carousel1} alt="vege" />
            </div>
            <div>
                <img style={{ width: "100%"}} src={Carousel2} alt="vege" />
            </div>
            <div>
                <img style={{ width: "100%"}} src={Carousel3} alt="vege" />
            </div>
            <div>
                <img style={{ width: "100%"}} src={Carousel4} alt="vege" />
            </div>
        </Carousel>
    );
}