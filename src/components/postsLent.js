import Post from "./Post";

const PostsLent = () => {

    const postItem = [
        {id: 1, PostText: 'Привет бро'},
        {id: 2, PostText: 'ОО нихуя у тебя кто-то оставил запись'},
        {id: 3, PostText: 'Вау мне нравится эта соцсеть'},
        {id: 4, PostText: 'Лучшая соцсеть в мире'}
    ]


    const postItemMap = postItem.map((item) => {
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