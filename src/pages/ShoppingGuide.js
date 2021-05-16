import { Layout } from "antd";
import AppHeader from "../components/Header";
import ShoppingGuideContent from "../components/ShoppingGuideContent";
import AppFooter from "../components/Footer";

const { Header, Content, Footer } = Layout;
function ShoppingGuide() {
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <ShoppingGuideContent />
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default ShoppingGuide;
