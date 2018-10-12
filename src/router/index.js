import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Start from "../pages/start"
import Features from "../pages/features";



const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/features" component={Features} />
                <Route exact path="/" component={Start} />
            </Switch>
        </BrowserRouter>
    )
}

export default router