import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Start from "../pages/start"
import Features from "../pages/features"



const router = (props) => {


    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/features" to="/features/home" />
                <Route key="start" exact path="/" component={Start} />
                <Route key="features" path="/features/:name" component={Features} />
            </Switch>
        </BrowserRouter>
    )
}

export default router