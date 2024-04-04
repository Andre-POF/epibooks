import React, {useState, useEffect} from "react"
import AddComment from "./AddComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar,faTrash } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap";

const apiUrl ="https://striveschool-api.herokuapp.com/api/comments/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA5NGQwZTQ2MTBmZDAwMTk4ZjAyNDYiLCJpYXQiOjE3MTE4ODU1ODIsImV4cCI6MTcxMzA5NTE4Mn0.ZM9z3v4rPBvzp1kJNq36a_5GbgrCbI-Uho95G-LeCYU";

export default function CommentArea({show}) {
    const [newComment, setNewComment] = useState("");
    const [data, setData] = useState([]);
    const [postId, setPostId] = useState("");
    const [currentRate, setCurrentRate] = useState(null);
    let payload = {"comment": newComment, "rate":currentRate, elementId:show};
    
    useEffect(()=>{
        getComments();
    },[show])

   
    //GET API CALL

    async function getComments () {
            try{
                const response = await fetch(`${apiUrl}${show}`, {
                    method:"GET",
                    headers: {Authorization : token}
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');}
                const json = await response.json();
                setData(json);
                console.log(show);
            } catch (error) {
            console.error("Error fetching data:", error);} 
        }     
        
    
    const submitPost = function handleClick () {
        postComments();
    }


    //POST API CALL

    async function postComments () {
        try{
            const res = await fetch((apiUrl),{
                method:"POST", 
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                },
                body:JSON.stringify(payload)
            });
            if (!res.ok) {
                console.log(res.json())
                throw new Error('Network response was not ok');}
                getComments();
            } catch (error) {
                console.log(error);
            }
        }

    // DELETE COMMENT FUNZIONA MALE

    async function deleteComment (postId) {
        try{
            console.log("dentro do try");
            console.log((`${apiUrl}${postId}`));
            const res = await fetch((`${apiUrl}${postId}`),{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: token
                }});
                getComments();
                if (!res.ok) {
                    throw new Error('Network response was not ok');}
                } catch (error) {
                    console.log(error);
                }
        }

    



    return (
        <>
            <div className="mt-5">
                <h6>Comments:</h6>
                <AddComment currentRate={currentRate} setCurrentRate={setCurrentRate}
                 setNewComment={setNewComment} submitPost={submitPost}/>
                {
                    data.map((post, index) => { 
                        
                        return (
                            <div className='g-4'>
                                <div className="d-flex align-items-center justify-content-between mt-4">
                                    <div>
                                        <p className="mb-0 mt-2"><span>{post.comment}</span></p>
                                    <p>
                                    <span>{post.rate}</span>
                                    <FontAwesomeIcon icon={faStar} className="ms-2 mt-2" color={"goldenrod"}></FontAwesomeIcon>
                                    </p>
                                    </div>
                                    <div>
                                        <Button className="me-3" size="sm" variant="outline-danger"
                                        onClick={()=>{setPostId(post._id);
                                            deleteComment(postId);
                                        }}  
                                        > <FontAwesomeIcon icon={faTrash} /> </Button>
                                    </div>
                                </div>
                            </div>
                        )})
                }
            </div>
        </>
    )
}