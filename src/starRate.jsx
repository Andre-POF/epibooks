import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function StarRate (props) {
    const {setCurrentRate} = props;
    const [rating,setRating] = useState(null);

    return(
        <>
        {[...Array(5)].map((star, index) => {
            const rate = index + 1;
            return(
                <>
                <label>
                    <input type="radio" name="rate"
                    style={{display:"none"}}
                    value={rate}
                    onClick={()=> {
                        setRating(rate)
                        console.log(rate);
                        setCurrentRate(rate)}}/>
                    <FontAwesomeIcon icon={faStar}
                    color={rate <= (rating) ? "goldenrod" : "grey" }/>
                </label>
                </>
            )
        })}
        </>
    )
} 