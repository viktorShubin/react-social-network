import Post from "./Post";


const PostsLent = (props) => {


    const postItemMap = props.postItem.map((item) => {
        return <div>
            <Post id={item.id} textMessage={item.PostText}/>
        </div>
    })

    return (
        <div>
            {postItemMap}

        </div>
    )
}

export default PostsLent;