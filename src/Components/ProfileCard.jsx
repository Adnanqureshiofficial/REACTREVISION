
function ProfileCard({imagePath, name, role, description}) {

    return (
<>
<div className="profileCard">
    <img id="profilePhoto" src={imagePath} alt="Photo" />
    <h2>Name: {name}</h2>
    <h3>Role: {role}</h3>
    <h3>Description: {description}</h3>
</div>
</>

    )}

export default ProfileCard;