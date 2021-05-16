import { Row, Col } from 'antd';
import { Layout } from "antd";
import AppHeader from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import UserPhoto from "../components/UserPhoto";
import ProfileNav from "../components/ProfileNav";
import AppFooter from "../components/Footer";

const { Header } = Layout;

function Login() {
  return (
    <>
      <Layout className="layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <div className="layout-content">
          <Row className="container">
            <Col span={5} offset={2}>
              <UserPhoto/>
              <ProfileNav/>
            </Col>
            <Col lg={16} offset={1}>
              <ProfileInfo />
            </Col>
          </Row>
        </div>
      </Layout>
      <AppFooter />
    </>
  );
}

export default Login;
