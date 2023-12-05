//@dependencies
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//component
import PageContainer from "../components/PageContainer";


function ViewProfile() {

    //get state from redux using useSelectorHook
    // state = object || view src/store for the keys (configured within combineReducers) 
    const USER_DETAILS = useSelector(state => state.user);
    console.log("🚀 ~ file: ViewProfile.jsx:27 ~ ViewProfile ~ userProfile", USER_DETAILS);

    return (
        <PageContainer>
            <div
                style={{
                    marginBottom: "5%"
                }}
            >
                <h1 style={{ marginBottom: 0 }}>User Profile</h1>
                <p style={{ marginTop: -3 }}>Redux Implementation</p>
                <p style={{ marginTop: -3 }}>Go to <Link to="/edit_profile">Edit Profile</Link> to edit user profile</p>
            </div>
            <p>Name: {USER_DETAILS.name}</p>
            <p>Age: {USER_DETAILS.age}</p>
            <p>Address: {USER_DETAILS.address}</p>
        </PageContainer>
    );
}

export default ViewProfile;