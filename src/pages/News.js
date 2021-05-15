import { Layout } from "antd";
import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer";

const { Header, Content, Footer } = Layout;
function News() {
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content"></Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default News;
