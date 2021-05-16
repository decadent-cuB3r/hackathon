import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import recipes from "../json/recipes.json";
import RecipeDetail from "../components/RecipeDetail"
const { Header, Content, Footer } = Layout;
import { useContext, useEffect } from 'react';
import { StoreContext }from '../store'


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
          <RecipeDetail recipe={chosenRecipe} />
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default HowToCook;
