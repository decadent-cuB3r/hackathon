import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import RecipeList from "../components/RecipeList";
import recipes from "../json/recipes.json";
const { Header, Content, Footer } = Layout;

function Cook() {
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <RecipeList recipes={recipes} />
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default Cook;
