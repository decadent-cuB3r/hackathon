import { useContext } from "react";
import { Layout } from "antd";
import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer";
// import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  // const { state: {} } = useContext(StoreContext);
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

export default Home;
