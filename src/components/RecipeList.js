import RecipeInfo from "./RecipeInfo"
import { Card, Row, Col } from 'antd';

function RecipeList ({ recipes }) {
    return (
        <>
            <Row className="" gutter={[32, 32]}>
                {recipes.map((recipe) => (
                    <Col
                        key={recipe.id}
                        sm={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 6 }}
                        xxl={{ span: 6 }}
                    >
                        <RecipeInfo recipe={recipe} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default RecipeList;