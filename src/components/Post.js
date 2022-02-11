import Avatar from "./avatar";
import styles from '../scc-modules/post.module.css'

const Post = (props) => {





    return (
        <div>
            <Avatar imageAvatar="https://www.hindisoch.com/wp-content/uploads/2019/11/Small-Dog-Playing-Pet-Hanging-Playing-Photo-Image.jpg
"/>
          <span>{props.textMessage}</span>

        </div>
    )
}

export default Post;