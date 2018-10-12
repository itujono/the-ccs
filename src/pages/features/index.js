import React from "react"
import { Grid } from "semantic-ui-react"
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";



class Features extends React.Component {
    render() {
        return (
            <Grid centered padded>
                <Switch>
                    <Redirect exact from="/features" to="/features/home" />
                    <Route path="/features/home" render={() => <Home /> } />
                </Switch>
            </Grid>
        )
    }
}

export default Features