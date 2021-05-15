import { useContext, useEffect } from "react";
import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import RecipeDetail from "../components/RecipeDetail";
import { setRecipeDetail } from "../actions";
import { StoreContext } from "../store";

const { Header, Content, Footer } = Layout;

function Recipe({ match }) {
  const { dispatch } = useContext(StoreContext);
  useEffect(() => setRecipeDetail(dispatch, match.params.recipeId, 0), []);

  return (
    <>
      <Layout className="container layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          {/* <RecipeDetail /> */}
        </Content>
      </Layout>
      <AppFooter />
    </>
  );
}

export default Recipe;
