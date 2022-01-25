import styles from '../scc-modules/post.module.css'
const Avatar = (props) => {
    return (
        <img className={styles.postImage} src={props.imageAvatar} alt=""/>
    )
}
export default Avatar;