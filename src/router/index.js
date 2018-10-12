import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Start from "../pages/start"
import Features from "../pages/features";



const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Start} />
                <Route exact path="/features" component={Features} />
            </Switch>
        </BrowserRouter>
    )
}

export default router