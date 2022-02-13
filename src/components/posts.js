import AddPost from "./addPost";
import PostsLent from "./postsLent";
const Posts = (props) => {
    return (
        <div>
            Мои записи
            <AddPost/>
            <PostsLent postItem={props.postItem}/>
        </div>
    )
}

export default Posts;