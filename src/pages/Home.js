import { useContext } from "react";
import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import AppCarousel from "../components/Carousel";
// import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  // const { state: {} } = useContext(StoreContext);
  return (
    <Layout className="container layout-main">
      <AppHeader />
      <Content className="layout-content">
        <AppCarousel />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;
