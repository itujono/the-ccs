import React from "react"
import { Grid, Button, Container, Header, List, Transition, Segment, Label, Icon, Card, Responsive } from "semantic-ui-react"
import { Switch, Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { saveHomeFeatures } from "../../state/actions/homeActions"
import { saveCartItems } from "../../state/actions/cartActions"
import { savePersonalInfo } from "../../state/actions/userActions"
import Appointment from "./Appointment"
import Thankyou from "./Thankyou"
import Posed, { PoseGroup } from "react-pose"
import { mobile } from "../../common";


const RouteContainer = Posed.div({
    enter: { opacity: 1, y: 0, delay: 200, beforeChildren: true },
    exit: { opacity: 0, y: 20 }
})


const GridColumn = Posed.div({
    enter: { staggerChildren: 100 }
})

const Div = Posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 30, opacity: 0 }
})

const Butt = Posed.button({
    enter: { y: 0, opacity: 1, transition: { duration: 100 } },
    exit: { y: 30, opacity: 0 }
})


class Summary extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const { carts, totalPrice, user, savePersonalInfo, location } = this.props

        return (
            <PoseGroup>
                <Grid as={RouteContainer} key={location.pathname} centered padded>
                    <Switch location={location}>
                        <Route exact path="/summary" key="summary" render={() => (
                            <Grid.Column as={GridColumn} width={mobile ? 16 : 8} className="summary">
                                <Div className="navigator">
                                    <Button
                                        as={Link}
                                        to="/start/email"
                                        className="link-btn"
                                        basic
                                        icon="chevron left"
                                    />
                                </Div>
                                <Container textAlign="center">
                                    <Div className="heading">
                                        <Header as="h2" content="Nice!" />
                                        <p>Berikut adalah summary data simulasi online shop kamu. </p>
                                    </Div>
                                    {
                                        carts && carts.map(cart => cart.item).map((item, idx) => {
                                            const price = item.map(item => item.price).reduce((acc, curr) => acc + curr, 0)
                                            return (
                                                <Segment as={Div} key={idx} padded="very" className="main-segment" textAlign="left">
                                                    <Label size="large" floating color="orange">
                                                        <Icon name="checkmark" color="teal" />
                                                        {this.props.cartSection[idx]}
                                                    </Label>
                                                    <Grid verticalAlign="middle" stackable>
                                                        <Grid.Column width={12}>
                                                            <Transition.Group as={Card.Group} animation="fade down" duration={200} itemsPerRow={2} className="cart-card">
                                                                {item.map(sub => (
                                                                    <Card key={sub.id}>
                                                                        <Header as="h4" content={sub.name} />
                                                                        {sub.price}
                                                                    </Card>
                                                                ))}
                                                            </Transition.Group>
                                                        </Grid.Column>
                                                        <Grid.Column width={4}>
                                                            <Container textAlign="center">
                                                                Total <Header as="h4" content={`Rp ${price},00`} />
                                                            </Container>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>
                                            )
                                        })
                                    }
                                    <Container className="total-general">
                                        Total Jendral: <Header as="h3" content={`Rp ${totalPrice},00`} />
                                        <p>Sekali lagi ingat, ini cuma estimasi loh ya. Heheh.</p>
                                        <Button as={Link} to="/summary/appointment" content="Lanjut ke Appointment" className="btn-ccs" />
                                    </Container>
                                </Container>
                            </Grid.Column>
                        )} />
                        <Route path="/summary/appointment" key="appointment" render={() => <Appointment user={user} onSavePersonalInfo={savePersonalInfo} /> } />
                        <Route path="/summary/thankyou" key="thankyou" render={() => <Thankyou user={user} /> } />
                    </Switch>
                </Grid>
            </PoseGroup>
        )
    }
}

const mapState = ({ cart, user }) => {
    const carts = cart && cart.cart
    const cartSection = cart && cart.cart.map(item => item.section)
    const price = cart && cart.cart.map(item => item.item).map(item => item.price)
    const totalPrice = cart && cart.cart.map(item => item.item).flat().map(item => item.price).reduce((acc, curr) => acc + curr, 0)
    
    return {
        carts,
        totalPrice,
        cartSection,
        price,
        user: user.user
    }
}


export default connect(mapState, { saveHomeFeatures, saveCartItems, savePersonalInfo })(Summary)