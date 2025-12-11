import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function ProfileCard({imagePath, name, role, description}) {
const {theme} = useContext(ThemeContext);
    return (
<>
<div className={`${theme === "Light"? "bg-white": "bg-black"}`}>
    <div className= "profileCard"  >
    <img id="profilePhoto" src={imagePath} alt="Photo" />
    <h2>Name: {name}</h2>
    <h3>Role: {role}</h3>
    <h3>Description: {description}</h3>
    </div>
</div>
</>

    )}

export default ProfileCard;