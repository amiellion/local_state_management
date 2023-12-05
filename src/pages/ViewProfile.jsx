//@dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

//components
import PageContainer from "../components/PageContainer";

//store
import { MainContext } from "../Provider";

function ViewProfile() {

    // get state values from context || src\Provider\index.jsx
    const { userProfile } = useContext(MainContext);
    console.log("🚀 ~ file: ViewProfile.jsx:15 ~ ViewProfile ~ userProfile:", userProfile)


    return (
        <PageContainer>
            <div
                style={{
                    marginBottom: "5%"
                }}
            >
                <h1 style={{ marginBottom: 0 }}>User Profile</h1>
                <p style={{ marginTop: -3 }}>useContext Implementation</p>
                <p style={{ marginTop: -3 }}>Go to <Link to="/edit_profile">Edit Profile</Link> to edit user profile</p>
            </div>
            <p>Name: {userProfile.name}</p>
            <p>Age: {userProfile.age}</p>
            <p>Address: {userProfile.address}</p>
        </PageContainer>
    );
}

export default ViewProfile;