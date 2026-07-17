import React from 'react'
import User from "./User"
import UserClass from "./UserClass"

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             {/* <User name={"Karan Singh (Function)"}/> */}
//             <UserClass name={"Karan Singh (Class)"} location={"Mumbai Class"} />
//         </div>

//     )
// }

class About extends React.Component {

    constructor(props) {
        super(props);

        console.log("Parent Constructor called")
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount called")
    }

    render() {
        console.log("Parent Render called")
        return (
            <div>
                <h1>About Class Component</h1>
                {/* <User name={"Karan Singh (Function)"}/> */}
                <UserClass name={"Karan Singh (Class)"} location={"Mumbai Class"} />
                <UserClass name={"Karan Singh (Class)"} location={"Mumbai Class"} />
            </div>

        )
    }
}

export default About