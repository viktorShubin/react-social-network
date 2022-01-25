import Avatar from "./avatar";
import UserInfo from "./userInfo";
import Posts from "./posts";
const Content = (props) => {
    return (
        <div className="content">
            <div className="backgroundFon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9gCM1LCN4oLTDr-9RvWkHPbcd704XV3TsMHRYwz4Jqre3lUiYgYRAxVTFUV0vU7K9g&usqp=CAU" alt=""/>
            </div>
            <div>
                {/*<img className="avatar" src="https://www.hindisoch.com/wp-content/uploads/2019/11/Small-Dog-Playing-Pet-Hanging-Playing-Photo-Image.jpg" alt=""/>*/}
                <Avatar imageAvatar="https://www.karusel-tv.ru/f/uploads/monthly_05_2015/post-133886-0-32456700-1431958548.jpeg"/>
                <UserInfo/>

            </div>

            <Posts/>


        </div>
    )
}

export default Content;