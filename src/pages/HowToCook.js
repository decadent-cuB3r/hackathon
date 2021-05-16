import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import recipes from "../json/recipes.json";
import RecipeDetail from "../components/RecipeDetail"

const { Header, Content, Footer } = Layout;



function HowToCook({ match }) {
  const chosenRecipe = recipes.find(
    (x) => x.id === match.params.chosenRecipeId
  )
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <RecipeDetail recipe={chosenRecipe} />
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default HowToCook;
