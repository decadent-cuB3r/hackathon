import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import RecipeDetail from "../components/RecipeDetail"
import recipes from "../json/recipes.json";

const { Header, Content, Footer } = Layout;



function HowToCook({ match }) {
  const choseRecipe = recipes.find(
    (x) => x.id === match.params.recipeId
  )
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <RecipeDetail recipe={choseRecipe} />
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default HowToCook;
