import Headtext from '../images/HomeIntro/Head.png';
import Carrot from '../images/HomeIntro/carrot.png';
import Tomato from '../images/HomeIntro/tomato.png';
import { Col, Row } from 'antd';
import React from 'react';
import Lottie from 'react-lottie';
import freshEggsJson from '../lottie/fresh-eggs.json';
import vegetablesCookJson from "../lottie/vegetables-cook.json";
import cookMealJson from "../lottie/cooking-food.json";

export default function HomeIntro() {
    const freshEggs = {
        loop: true,
        autoplay: true,
        animationData: freshEggsJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const vegetablesCook = {
        loop: true,
        autoplay: true,
        animationData: vegetablesCookJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const cookMeal = {
        loop: true,
        autoplay: true,
        animationData: cookMealJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="intro-container">
            <h1 className="intro-headtext">
                <img src={Headtext} alt="咖雞煮，讓你在家自己煮" />
            </h1>
            <img className="intro-tomato" src={Tomato} />
            <img className="intro-carrot" src={Carrot} />
            <div className="intro-frame">
                <Row align="middle">
                    <Col span={12}>
                        <Lottie
                            options={vegetablesCook}
                            height={400}
                            width={400}
                        />
                    </Col>
                    <Col span={12}>
                        <h1>咖雞煮提供您最完整的食材包，最迅速的專員配送。</h1>
                        <p>讓您在家輕鬆煮飯，不必出門人擠人買菜，就可以端出一道道美味佳餚。食材新鮮直送，最快12小時內即可到府，當天就能吃到最新鮮的味道。</p>
                        <div>超過百道經典家常菜任您挑選，一份食材包讓你變成煮飯好手食材皆經過食品專業級認證 ，健康無負擔每道料理皆有詳細食譜，食材專業處理，調味醃料一包搞定份量自由選擇、自由搭配、自由調味，幫你省下多餘的食材</div>
                        <p>想要輕鬆端出五菜一湯嗎？還在煩惱想吃的美食做不出來？快來加入咖雞煮的行列吧！</p>
                    </Col>
                </Row>
                <Row align="middle">
                    <Col span={12}>
                        <h1>與在地小農合作，食材新鮮直送，讓您吃的美味且安心。</h1>
                        <p>提供在地小農通路銷售產品，且長期合作，讓小農產品增加曝光度。製作食材包也能解決一些過多無法處理的外觀瑕疵農產品，減少食物浪費。</p>
                        <h1>採用環保方式包裝商品，減少不必要的浪費。</h1>
                        <p>我們使用可以多次重複利用且可回收的棉布袋作為包裝材，提倡減塑的重要性。</p>
                    </Col>
                    <Col span={12}>
                        <Lottie
                            options={freshEggs}
                            height={300}
                            width={300}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Lottie
                            options={cookMeal}
                            width={380}
                            height={320}
                        />
                    </Col>
                    <Col span={12}>
                        <h1>擁有自己的拿手好菜嗎？您是親友間認證的料理小廚神嗎？還是說在研發創新美味佳餚呢？</h1>
                        <p>開始搭配屬於自己的獨門料理包吧！在咖雞煮這邊，提供最新鮮、最特別的食材，為您的美味再加一顆心。</p>
                        <h1>真的找不到您所需要的食材嗎？歡迎透過我們的客服，讓我們了解您的需求！</h1>
                    </Col>
                </Row>
            </div>
        </div>
    );
}