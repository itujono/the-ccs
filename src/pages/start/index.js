import React from "react"
import { Grid, Container, Header, Image, Button, Segment } from "semantic-ui-react"
import { connect } from "react-redux"
import { Switch, Route, Link } from "react-router-dom";
import { savePersonalInfo } from "../../state/actions/userActions";
import Posed, { PoseGroup } from "react-pose";
import bni from "../../images/bni.png"
import jne from "../../images/jne.svg"
import mandiri from "../../images/mandiri.png"
import pos from "../../images/pos.svg"
import tiki from "../../images/tiki.svg"
import Personal from "./Personal";
import AppName from "./AppName";
import Summary from "./Summary";




const images = [
    { key: 1, src: bni },
    { key: 2, src: jne },
    { key: 3, src: mandiri }
]


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


class Start extends React.Component {

    handleSaveUserInfo = (data) => {
        this.props.savePersonalInfo(data)
    }

    render() {

        const { location, user } = this.props

        return (
            <PoseGroup>
                <RouteContainer key={location.pathname} columns={4} verticalAlign="middle" className="ui stackable centered padded middle aligned four column grid home">
                    <Switch location={location}>
                        <Route exact path="/start" key="welcome" render={() => (
                            <Grid.Column as={GridColumn} computer={6} mobile={16}>
                                <Container as={Div} textAlign="center">
                                    <Header as="h2" content="Welcome!" className="welcome" />
                                    <p>
                                        Kamu mau bikin online shop? Murah tapi professional? Yang gampang dikelola sendiri? Yang seprofessional online shop - online shop di bawah ini? Serius?
                                    </p>
                                    <div>
                                        <Button as={Link} to="/start/email" className="btn-ccs" content="Mau, dong!" size="big" />
                                    </div>
                                </Container>
                                <Segment.Group horizontal>
                                {
                                    images.map(item => (
                                        <Segment basic as={Div} key={item.key}>
                                            <Image src={item.src} />
                                        </Segment>
                                    ))
                                }
                                </Segment.Group>
                            </Grid.Column>
                        )} />
                        <Route path="/start/email" key="email" render={() => <Personal user={user} handleSaveUserInfo={this.handleSaveUserInfo} />} />
                        <Route path="/start/app_name" key="app_name" render={() => <AppName user={user} handleSaveUserInfo={this.handleSaveUserInfo} />} />
                        <Route path="/start/summary" key="summary" render={() => <Summary user={user} />} />
                        <div>
                            <Header as="h4" content="Hello geng!" />
                        </div>
                    </Switch>
                </RouteContainer>
            </PoseGroup>
        )
    }
}


const mapState = ({ hello, user }) => ({
    hello: hello.hello,
    user: user.user
})

export default connect(mapState, { savePersonalInfo })(Start)