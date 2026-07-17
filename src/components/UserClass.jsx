import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2
        }
        console.log("Child Constructor called")
    }

    componentDidMount() {
        console.log("Child ComponentDidMount called")
    }

    render() {

        const { name, location } = this.props
        const { count, count2 } = this.state

        console.log("Child Render called")
        return (
            <div className='user-card'>
                <h1>Count: {count}</h1>
                <h1>Count2: {count2}</h1>
                <button onClick={() => {
                    // Never update the state directly
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })
                }}>Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: _karan.s.s</h4>
            </div>
        )
    }
}

export default UserClass;