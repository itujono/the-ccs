import React, { Component } from "react";
import "./styles/styles.scss";
import { Provider } from "react-redux"
import store from "./state/store"
import Main from "./pages/main";
import { Router, Redirect } from "@reach/router";
import Login from "./pages/auth/Login";
import Auth from "./pages/auth";
import Logout from "./pages/auth/Logout";
import { Row, Col } from "antd";



class App extends Component {
    render() {
        return (
            <Provider store={store()}>
                <Row className="App">
                    <Col>
                        <Router>
                            <Main path="/*" />
                            <Login path="login" />
                            <Logout path="logout" />
                        </Router>
                    </Col>
                </Row>
            </Provider>
        );
    }
}

export default App;
