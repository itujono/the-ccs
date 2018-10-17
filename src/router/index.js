import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Start from "../pages/start"
import Features from "../pages/features"
import Summary from "../pages/summary";



const router = (props) => {


    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/features" to="/features/home" />
                <Redirect exact from="/" to="/start" />
                <Route key="start" path="/start" component={Start} />
                <Route key="features" path="/features/:name" component={Features} />
                <Route key="summary" path="/summary" component={Summary} />
            </Switch>
        </BrowserRouter>
    )
}

export default router