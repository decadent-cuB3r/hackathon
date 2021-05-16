import { Row, Col, Divider, Layout, Descriptions } from "antd";
import Previous from "./previousPage"
import recipeDetail from "../images/RecipeInfo/recipeDetail.png"


const { Ingredients, Information, General, Steps } = Layout

export default function RecipeDetail({ recipe }) {

    return (
        <Layout className="recipeDetail-container">
            {/* <Previous />
            <General>
                <div>{recipe.name}</div>
                <img src={recipe.img} />
            </General>
            <Divider />
            <Information>

            </Information>
            <Divider />
            <Ingredients>

            </Ingredients>
            <Divider />
            <Steps>

            </Steps> */}
            <img src= { recipeDetail } alt="" className=""/>

        </Layout>
    );
}