import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import CartContent from "../components/CartContent";
const { Header, Content, Footer } = Layout;

export default function Cart() {
    return (
        <>
          <Layout className="container layout-main">
            <Header className="layout-header">
              <AppHeader />
            </Header>
            <Content className="layout-content">
              <CartContent />
            </Content>
          </Layout>
          <AppFooter />
        </>
      );
}
