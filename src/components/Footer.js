import { Descriptions, Row, Col } from 'antd';
import InstagramLogo from "../images/InstagramLogo.svg";
import FacebookLogo from "../images/FacebookLogo.svg";
import { Link, Route } from "react-router-dom";

export default function Footer() {
    return (
        <footer clsasName="footer">
            <Row>
                <Col span={6}>
                    <Row>
                        <img src="" alt="LOGO" />
                    </Row>
                    <Row>
                        <img src={FacebookLogo} alt="FB" />
                        <img src={InstagramLogo} alt="IG" />
                    </Row>
                </Col>
                <Col span={8}>
                    <Link to="">聯絡我們</Link>
                    <Link to="">人才招募</Link>
                    <Link to="">隱私權政策</Link>
                    <Link to="">服務條款</Link>

                </Col>
                <Col span={10}>
                    <Descriptions>
                        <Descriptions.Item label="聯絡電話">02-12345678</Descriptions.Item>
                        <Descriptions.Item label="總部地址">台北市xxxxxxxxxxxxxxxxxxxxx</Descriptions.Item>
                        <Descriptions.Item label="總部地址">台北市xxxxxxxxxxxxxxxxxxxxx</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </footer >
    )
}