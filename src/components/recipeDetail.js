import { Row, Col, Divider, Layout, Descriptions } from "antd";
import Previous from "./previousPage"

const { Ingredients, Information, General, Steps } = Layout

export default function RecipeDetail({ recipe }) {

    return (
        <Layout className="recipeDetail-container">
            <Previous />
            <General>
                <Row>
                    <Col lg={{ span: 8, offset: 4 }} xs={{ span: 21, offset: 1 }}>
                        <img alt="" className="recipeDetail-image" src={recipe.img} />
                    </Col>
                </Row>
            </General>
            <Divider />
            <Information>

            </Information>
            <Divider />
            <Ingredients>

            </Ingredients>
            <Divider />
            <Steps>

            </Steps>
        </Layout>
    );
}