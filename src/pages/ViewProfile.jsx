import { Button, Form, Input, Checkbox } from "antd";
import { useContext } from "react";
import { MainContext } from "../Provider";


/*

    SPREAD OPPERATOR "..."; arrays || objects

    const array1 = [1,2]
    const array2 = [...array1] === [1,2]


    const object1  = {
        key1: value1,
        key2: value2
    }
    const object2  = {...object1} = {
        key1: value1,
        key2: value2
    }
*/

function ViewProfile() {

    const { userProfile } = useContext(MainContext);
    console.log("🚀 ~ file: ViewProfile.jsx:27 ~ ViewProfile ~ userProfile", userProfile);

    const onFinish = (values) => {
        setUserProfile({ ...values });
        console.log("I SUCCEEDED");
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("I FAILED");
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <p>Name: {userProfile.name}</p>
            <p>Age: {userProfile.age}</p>
            <p>Address: {userProfile.address}</p>
        </div>
    );
}

export default ViewProfile;