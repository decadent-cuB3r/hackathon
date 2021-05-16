import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import RecipeDetail from "../components/recipeDetail";
import recipes from "../json/recipes.json";
import { useContext, useEffect } from "react";
import { setRecipeDetail } from "../actions";
import { StoreContext } from "../store"
const { Header, Content, Footer } = Layout;

function HowToCook({ match }) {
	const { dispatch } = useContext(StoreContext);   
	useEffect(() => setRecipeDetail(dispatch, match.params.chosenRecipe, 0),[])
  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <RecipeDetail recipe ={chosenRecipe}/>
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default HowToCook;
