import SingleComment from "./SingleComment";

export default function (props) {
    const {currentRate, setCurrentRate, submitBtn, data} = props;

    return (
    <>  
        <SingleComment currentRate={currentRate} setCurrentRate={setCurrentRate} data={data} submitBtn={submitBtn} />
    </>
    )
}