import React from "react"
import { Grid, Button, Container, Header, List, Transition, Segment, Label, Icon, Card } from "semantic-ui-react"
import { Switch, Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { saveHomeFeatures } from "../../state/actions/homeActions"
import { saveCartItems } from "../../state/actions/cartActions"
import { savePersonalInfo } from "../../state/actions/userActions";
import Appointment from "./Appointment";
import Thankyou from "./Thankyou";


class Summary extends React.Component {
    render() {

        const { carts, totalPrice, user, savePersonalInfo } = this.props

        return (
            <Grid centered padded>
                <Switch>
                    <Route exact path="/summary" render={() => (
                        <Grid.Column width={8} className="summary">
                            <div className="navigator">
                                <Button
                                    as={Link}
                                    to="/start/email"
                                    className="link-btn"
                                    basic
                                    icon="chevron left"
                                />
                            </div>
                            <Container textAlign="center">
                                <div className="heading">
                                    <Header as="h2" content="Nice!" />
                                    <p> So far so good. Berikut adalah summary data diri kamu. </p>
                                </div>
                                {
                                    carts && carts.map(cart => cart.item).map((item, idx) => {
                                        const price = item.map(item => item.price).reduce((acc, curr) => acc + curr, 0)
                                        return (
                                            <Segment key={idx} padded="very" className="main-segment" textAlign="left">
                                                <Label size="large" floating color="orange">
                                                    <Icon name="checkmark" color="teal" />
                                                    {this.props.cartSection[idx]}
                                                </Label>
                                                <Grid verticalAlign="middle">
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
                    <Route path="/summary/appointment" render={() => <Appointment user={user} onSavePersonalInfo={savePersonalInfo} /> } />
                    <Route path="/summary/thankyou" render={() => <Thankyou user={user} /> } />
                </Switch>
            </Grid>
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