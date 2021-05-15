import { Descriptions, Row, Col } from 'antd';
import InstagramLogo from "../images/InstagramLogo.svg";
import FacebookLogo from "../images/FacebookLogo.svg";
import { Link, Route } from "react-router-dom";
import LOGO from "../images/KagiLogo.png"
import LOGOtext from "../images/KagiTitle.png"

export default function Footer() {
    return (
        <footer clsasName="footer">
            <Row justify="space-between">
                <Col span={6}>
                    <Row align="middle" justify="space-around">
                        <img src={LOGO} alt="LOGO" />
                        <img src={LOGOtext} alt="LOGOtext" style={{ height: '100%', width: 'auto' }} />
                    </Row>
                    <Row justify="center">
                        <img src={FacebookLogo} alt="FB" />
                        <img src={InstagramLogo} alt="IG" />
                    </Row>
                </Col>
                <Col span={6}>
                    <Descriptions column={1} >
                        <Descriptions.Item label="聯絡電話">02-12345678</Descriptions.Item>
                        <Descriptions.Item label="總部地址">台北市xxxxxxxxxxx</Descriptions.Item>
                        <Descriptions.Item label="客服時間">
                            周一至周五10:00-17:00<br />
                            假日10:00-15:00
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={6}>
                    <Row justify="space-between">
                        <Link to="" style={{textDecoration: 'none'}}>聯絡我們</Link>
                        <Link to="" style={{textDecoration: 'none'}}>人才招募</Link>
                        <Link to="" style={{textDecoration: 'none'}}>隱私權政策</Link>
                        <Link to="" style={{textDecoration: 'none'}}>服務條款</Link>
                    </Row>
                </Col>
            </Row>
        </footer >
    )
}