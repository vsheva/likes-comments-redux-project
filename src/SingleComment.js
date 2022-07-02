// import {useSelector, useDispatch} from "react-redux"
// import {inputText} from "./redux/actions"


function SingleComment(props) {
    console.log("single comment props -->", props)

    return(
            <form className='comments-item'>
                <div className='comments-item-delete'>&times;</div>
                <input   type="text"/>
                <input   type="submit" hidden/>
            </form>


    )

}

export default SingleComment