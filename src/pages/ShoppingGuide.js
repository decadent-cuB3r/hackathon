import { Layout } from "antd";
import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer";

const { Header, Content, Footer } = Layout;
function ShoppingGuide() {
  return (
    <Layout className="container layout-main">
      <Header className="layout-header">
        <AppHeader />
      </Header>
      <NavBar />
      <Content className="layout-content"></Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default ShoppingGuide;
