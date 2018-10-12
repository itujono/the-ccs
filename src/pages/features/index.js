import React from "react"
import { Grid, Header } from "semantic-ui-react"
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveHomeFeatures, deleteHomeFeatures } from "../../state/actions/homeActions";
import Home from "./Home";



class Features extends React.Component {

    handleSaveHomeFeatures = (data) => {
        this.props.saveHomeFeatures(data)
    }

    handleDeleteHomeFeatures = (id) => {
        this.props.deleteHomeFeatures(id)
    }

    render() {

        const { items, selected } = this.props

        return (
            <Grid centered padded>
                <Switch>
                    <Redirect exact from="/features" to="/features/home" />
                    <Route
                        path="/features/home"
                        render={() => <Home items={items} handleDelete={this.handleDeleteHomeFeatures} handleSaveHome={this.handleSaveHomeFeatures} selected={selected} />}
                    />
                </Switch>
            </Grid>
        )
    }
}

const mapState = ({ home }) => ({
    items: home.items,
    selected: home.selected
})

export default connect(mapState, { saveHomeFeatures, deleteHomeFeatures })(Features)