import { Button, Form } from "react-bootstrap"
import StarRate from "./starRate";

export default function AddComment (props) {
    
    const {currentRate, setCurrentRate, submitBtn, handlePost} = props;
    return (
        <>
        <Form>
            <Form.Group>
                <Form.Control
                id="commentBox"
                className="mb-2 mt-2"
                type="text"
                placeholder="Comment..."
                onChange={(e) => {handlePost(e.target.value)}}
                ></Form.Control>
                <StarRate currentRate={currentRate} setCurrentRate={setCurrentRate} className="mb-2"/>
            </Form.Group>
            <Button className="mt-2 p-1 px-2" variant="outline-secondary" size="sm"
            onClick={submitBtn}> Submit </Button>
        </Form>
        </>
    )
}