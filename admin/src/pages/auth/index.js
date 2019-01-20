import React from "react"
import { Router } from "@reach/router";
import Login from "./Login";
import Logout from "./Logout"
import { connect } from "react-redux"
import { authUser } from "../../state/actions/authActions"



class Auth extends React.Component {

    handleAuthUser = (credentials) => {
        this.props.authUser(credentials)
    }

    render() {
        return (
            <Router>
                <Login path="login" onLogin={this.handleAuthUser} />
                <Logout path="logout" />
            </Router>
        )
    }
}


// const mapState = ({ auth }) => ({

// })

export default connect(null, { authUser })(Auth)