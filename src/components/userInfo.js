import content from "./content";

const UserInfo = (props) => {

    return (
        <ul className="infoAbout">
            <li>{props.userDB.name}</li>
            <li>{props.userDB.lastName}</li>
            <li>{props.userDB.work}</li>
            <li>{props.userDB.city}</li>
        </ul>
    )
}

export default UserInfo;