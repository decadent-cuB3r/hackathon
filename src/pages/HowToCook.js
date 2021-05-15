import { Layout } from "antd";
import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer";
import RecipeList from "../components/RecipeList";
import recipes from "../json/recipe.json";
const { Header, Content, Footer } = Layout;

function Cook({ match }) {
    const recipe = recipes.find(
        x => x.id === match.params.chosenrecipe
    );
    return (
        <Layout className="container layout-main">
            <Header className="layout-header">
                <AppHeader />
            </Header>
            <Content className="layout-content">
                
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default Cook;
