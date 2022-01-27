
const UserInfo = (props) => {

    return (
        <ul className="infoAbout">
            <li >{props.name}</li>
            <li>{props.lastname}</li>
            <li>{props.city}</li>
            <li>{props.work}</li>
        </ul>
    )
}

export default UserInfo;