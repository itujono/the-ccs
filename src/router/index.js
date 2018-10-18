import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Start from "../pages/start"
import Features from "../pages/features"
import Summary from "../pages/summary"
import About from "../pages/about"



const router = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/features" to="/features/home" />
            <Redirect exact from="/" to="/start" />
            <Route key="start" path="/start" component={Start} />
            <Route key="features" path="/features/:name" component={Features} />
            <Route key="summary" path="/summary" component={Summary} />
            <Route key="about" path="/about" component={About} />
        </Switch>
    </BrowserRouter>
)

export default router