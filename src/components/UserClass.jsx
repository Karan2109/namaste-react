import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        }
        // console.log("Child Constructor called")
    }

    async componentDidMount() {
        // console.log("Child ComponentDidMount called")

        // API Call
        const data = await fetch("https://api.github.com/users/Karan2109");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        // console.log(json);
    }

    componentDidUpdate() {
        // console.log("ComponentDidUpdate called")
    }

    componentWillUnmount() {
        // console.log("ComponentWillUnmount called") 
    }

    render() {
        // console.log("Child Render called")

        const { name, location, avatar_url } = this.state.userInfo

        return (
            <div className='user-card'>
                <img src={avatar_url} alt="avatar_url" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: _karan.s.s</h4>
            </div>
        )
    }
}

export default UserClass;