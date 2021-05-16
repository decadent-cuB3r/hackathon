import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
<<<<<<< HEAD
import RecipeDetail from "../components/recipeDetail";
import recipes from "../json/recipes.json";
=======
>>>>>>> 0f95e93b32441302e45224f9ded93313b4f1b67f
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
