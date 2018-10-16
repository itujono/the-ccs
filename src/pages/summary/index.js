import React from "react"
import { Grid, Button, Container, Header, List, Image, Segment } from "semantic-ui-react"
import { Switch, Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { saveHomeFeatures } from "../../state/actions/homeActions"
import { saveCartItems } from "../../state/actions/cartActions"


class Summary extends React.Component {
    render() {

        const { cart } = this.props

        return (
            <Grid centered padded>
                <Switch>
                    <Route path="/summary" render={() => (
                        <Grid.Column width={8} className="summary-home">
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
                                    <p>
                                        So far so good. Berikut adalah summary data diri
                                        kamu.
                                    </p>
                                </div>
                                {
                                    cart && cart.map(item => {
                                        return (
                                            <Segment padded="very" className="main-segment" textAlign="left">
                                                <Grid>
                                                    <Grid.Column width={12}>
                                                        <List divided horizontal relaxed="very">
                                                            {item.map(sub => {
                                                                return (
                                                                    <List.Item>
                                                                        <List.Content>
                                                                            <List.Header>Nama kamu</List.Header>
                                                                            {sub.name} <br /> {sub.price}
                                                                        </List.Content>
                                                                    </List.Item>
                                                                )
                                                            })}
                                                        </List>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        Total <Header as="h3" content={`Rp 5000000,00`} />
                                                    </Grid.Column>
                                                </Grid>
                                            </Segment>
                                        )
                                    })
                                }
                                <Container>
                                    Total Jendral: <Header as="h3" content={`Rp ${this.props.price},00`} />
                                </Container>
                            </Container>
                        </Grid.Column>
                    )} />
                </Switch>
            </Grid>
        )
    }
}

const mapState = ({ home, cart }) => {
    const carts = cart && cart.cart.map(item => item)
    const price = cart && cart.cart.flat().map(item => item.price).reduce((acc, curr) => acc + curr)
    
    return {
        cart: carts,
        price
    }
}


export default connect(mapState, { saveHomeFeatures, saveCartItems })(Summary)