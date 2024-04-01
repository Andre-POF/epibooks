import React, {useState, useEffect} from "react"
import CommentList from "./CommentList";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

const apiUrl ="https://striveschool-api.herokuapp.com/api/comments/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA5NGQwZTQ2MTBmZDAwMTk4ZjAyNDYiLCJpYXQiOjE3MTE4ODU1ODIsImV4cCI6MTcxMzA5NTE4Mn0.ZM9z3v4rPBvzp1kJNq36a_5GbgrCbI-Uho95G-LeCYU";

export default function CommentArea({show}) {
    const [newComment, setNewComment] = useState("");
    const [data, setData] = useState([]);
    // const [getApi,setGetApi] = useState ([]);
    const [currentRate, setCurrentRate] = useState(null);
    const payload = { comment: newComment, rate:currentRate};
    
    useEffect(()=>{
        getComments();
    },[show])


    async function getComments () {
            try{
                const response = await fetch(`${apiUrl}${show}`, {
                    method:"GET",
                    headers: {Authorization : token}
                });
                // if (!response.ok) {
                //     throw new Error('Response was not ok');
                //   }
                const json = await response.json();
                console.log(`esta é a resposta da API ${show}`);
                console.log(json);
                setData(json);
            } catch (error) {
            console.error("Error fetching data:", error);} 
        }     
        
    const btnFunction = function handleClick () {
        postComments();
            // setData([...data,newComment]);
        }

    async function postComments () {
        try{
            const res = await fetch((apiUrl),{
                method:"POST", 
                body:JSON.stringify(payload),
                headers: {Authorization: `${token}`,
                'Content-Type': "application/json"}
            })
            } catch (error) {
                console.log(error);
            }
    }

    return (
        <>
            <div className="mt-5">
                <h6>Comments:</h6>
                <AddComment/>
                {
                    data.map((post, index) => { 
                        return (
                            <div className='g-4'>
                                <SingleComment data={data} newComment={newComment}
                                currentRate={currentRate} setCurrentRate={setCurrentRate}
                                handlePost = {setNewComment}/>
                               <p>{post.comment}</p>      
                            </div>
                        )})
                }
            </div>
        </>
    )
}