import { Descriptions } from 'antd';
import InstagramLogo from "../images/InstagramLogo.svg";
import FacebookLogo from "../images/FacebookLogo.svg";
import { Link, Route } from "react-router-dom";

export default function Footer() {
    return (
        <footer clsasName="footer">
            <div className="Row">
                <div className="Col" >
                    <div className="Row">
                        <img src="" alt="LOGO" />
                    </div>
                    <div className="Row">
                        <img src={FacebookLogo} alt="FB" />
                        <img src={InstagramLogo} alt="IG" />
                    </div>
                </div>
                <div className="Col" >
                    <Link to="">聯絡我們</Link>
                    <Link to="">人才招募</Link>
                    <Link to="">隱私權政策</Link>
                    <Link to="">服務條款</Link>
                </div>
                <div className="Col" >
                    <Descriptions>
                        <Descriptions.Item label="聯絡電話">02-12345678</Descriptions.Item>
                        <Descriptions.Item label="總部地址">台北市xxxxxxxxxxxxxxxxxxxxx</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </footer>
    )
}