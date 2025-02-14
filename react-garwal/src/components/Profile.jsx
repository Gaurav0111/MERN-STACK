// using props

function Profile() {
    return (
        <div>
            <h1>Profile Card</h1>
            <ProfileCard name="Gaurav" age={30} greeting={
                <div>
                    <strong>Hi Gaurav, have a wonderful day!</strong>
                </div>
            } >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;

function ProfileCard(props){
    return(
        <>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.greeting}</p>
        <div>  {props.children } </div>
        </>
    )
}