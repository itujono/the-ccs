import React from "react"
import { Grid, Header } from "semantic-ui-react"
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial } from "../../state/actions/homeActions"
import { saveTotalCart } from "../../state/actions/cartActions";
import Home from "./Home"
import Posed, { PoseGroup } from "react-pose";





const RouteContainer = Posed.div({
    enter: { opacity: 1, y: 0, delay: 200, beforeChildren: true },
    exit: { opacity: 0, y: 20 }
})

class Features extends React.Component {

    handleSaveHomeFeatures = (data) => {
        this.props.saveHomeFeatures(data)
    }

    handleDeleteHomeFeatures = (id) => {
        this.props.deleteHomeFeatures(id)
    }

    handleSaveTotalCart = (total) => {
        this.props.saveTotalCart(total)
        this.props.history.push('/features/product_detail')
    }

    render() {

        const { items, selected, location } = this.props

        return (
            <PoseGroup>
                <RouteContainer key={location.pathname} centered relaxed="very" className="ui centered very relaxed grid page-home">
                    <Switch location={location}>
                        <Redirect exact from="/features" to="/features/home" />
                        <Route
                            path="/features/home"
                            render={() =>
                                <Home
                                    key="home"
                                    items={items}
                                    handleDelete={this.handleDeleteHomeFeatures}
                                    handleSaveHome={this.handleSaveHomeFeatures}
                                    fetchInitialItems={this.props.fetchInitialItems}
                                    makeInitial={this.props.makeInitial}
                                    saveTotalCart={this.handleSaveTotalCart}
                                    selected={selected}
                                />
                            }
                        />
                    </Switch>
                </RouteContainer>
            </PoseGroup>
        )
    }
}

const mapState = ({ home, cart }) => ({
    items: home.items,
    selected: home.selected,
    total: cart.total
})

const actionList = { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial, saveTotalCart }

export default connect(mapState, actionList)(Features)