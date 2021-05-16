import { useContext } from "react";
import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import AppCarousel from "../components/Carousel";
import AppIntro from "../components/introHome"
// import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  // const { state: {} } = useContext(StoreContext);
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <div className="home-background">
          <Content className="layout-content">
            <AppCarousel />
            <AppIntro />
          </Content>
        </div>
      </Layout>
      <AppFooter />
    </>
  );
}

export default Home;
