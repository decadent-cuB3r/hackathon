import { Layout } from "antd";
import AppHeader from "../components/Header";
import LoginForm from "../components/LoginForm";
import AppFooter from "../components/Footer";

const { Header, Content, Footer } = Layout;

function Login() {
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <LoginForm />
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default Login;
