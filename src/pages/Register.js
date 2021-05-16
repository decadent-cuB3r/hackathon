import { Row, Col } from 'antd';
import { Layout } from "antd";
import AppHeader from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import AppFooter from "../components/Footer";
import cookPot from "../images/HomeIntro/cookPot.png"

const { Header, Content, Footer } = Layout;

function Login() {
  return (
    <>
      <Layout className="layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <div className="layout-content">
          <div className="container">
            <RegisterForm/>
          </div>
        </div>
      </Layout>
      <AppFooter />
    </>
  );
}

export default Login;
