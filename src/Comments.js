
import React, { useState} from "react";
import SingleComment from "./SingleComment";
import {useSelector, useDispatch} from "react-redux"
import uniqid from 'uniqid'
import {commentCreate} from "./redux/actions";



const Comments=(props)=> {
    //console.log("comments props -->", props)

const [textComment, setTextComment]=useState("")
const dispatch = useDispatch()
   const comment= useSelector(state=>{
      const {commentsReducer} =state
       return commentsReducer.comments
    })

    const onChangeHandler=(e)=>{
        setTextComment(e.target.value)
    }

   const onSubmitHandler= (e)=> {
    e.preventDefault();
       console.log("onSubmitHandler comment->",textComment )
       const id=uniqid()
       dispatch(commentCreate(textComment, id))
   }

    return(
        <div className='card-comments'>
            <form onSubmit={onSubmitHandler} className='comments-item-create'>
                <input   onChange={onChangeHandler} value={textComment} type="text"/>
                <input   type="submit" hidden/>
            </form>
            {comment}
            <SingleComment />
            <p></p>
        </div>
    )

}

export default Comments

//onSubmit={onSubmitHandler}