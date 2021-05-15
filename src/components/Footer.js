import { Descriptions, Row, Col } from "antd"
import { icons } from "antd/lib/image/PreviewGroup"

export default function Footer() {
    return (
        <footer>
            <Row>
                <Col justify="right" align="top">
                    <Row>
                        <img src="" alt="LOGO" />
                    </Row>
                    <Row>
                        <img src="./images/InstagramLogo.svg" />
                    </Row>
                </Col>
                <Col justify="center" align="bottom">
                </Col>
                <Col justify="left" align="top">
                </Col>
            </Row>
        </footer>
    )
}