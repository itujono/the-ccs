import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Start from "../pages/start"
import Features from "../pages/features"



const router = (props) => {


    return (
        <BrowserRouter>
            <Switch>
                <Route key="start" exact path="/" component={Start} />
                <Route key="features" path="/features/:name" component={Features} />
            </Switch>
        </BrowserRouter>
    )
}

export default router