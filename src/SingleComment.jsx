import {Row, Col, Form} from "react-bootstrap";
import AddComment from "./AddComment";

export default function (props) {
    const {currentRate, setCurrentRate, submitBtn, data, handlePost} = props;
    return (
        <Row>
        <Col>
            <Form>
                <Form.Group>
                    {/* {data.map((comment)=>{
                        return (
                            <div>
                                <p>{comment.comment}</p>
                            </div>
                        )
                    })} */}
                </Form.Group>
            </Form>
        </Col>
    </Row>
    )
}