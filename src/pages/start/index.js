import React from "react"
import { Grid, Container, Header, Card, Button } from "semantic-ui-react"
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
    { key: 3, src: mandiri },
    { key: 4, src: pos },
    { key: 5, src: tiki }
]


const RouteContainer = Posed.div({
    enter: { opacity: 1, y: 0, delay: 200, beforeChildren: true },
    exit: { opacity: 0, y: 20 }
});


class Start extends React.Component {

    handleSaveUserInfo = (data) => {
        this.props.savePersonalInfo(data)
    }

    render() {

        const { location, user } = this.props

        return (
            <PoseGroup>
                <RouteContainer key={location.pathname} columns={4} verticalAlign="middle" className="ui centered padded middle aligned four column grid home">
                    <Switch location={location}>
                        <Route exact path="/" key="welcome" render={() => (
                            <Grid.Column width={6}>
                                <Container textAlign="center">
                                    <Header as="h2" content="Welcome!" className="welcome" />
                                    <p>
                                        Kamu mau bikin online shop? Murah tapi professional? Yang gampang dikelola sendiri? Yang seprofessional online shop - online shop di bawah ini? Serius?
                                    </p>
                                    <div>
                                        <Button as={Link} to="/start/email" className="btn-ccs" content="Mau, dong!" size="big" />
                                    </div>
                                </Container>
                                <Card.Group itemsPerRow={5}>
                                {
                                    images.map(item => (
                                        <Card key={item.key} image={item.src} />
                                    ))
                                }
                                </Card.Group>
                            </Grid.Column>
                        )} />
                        <Route path="/start/email" key="email" render={() => <Personal user={user} handleSaveUserInfo={this.handleSaveUserInfo} />} />
                        <Route path="/start/app_name" key="app_name" render={() => <AppName user={user} handleSaveUserInfo={this.handleSaveUserInfo} />} />
                        <Route path="/start/summary" key="summary" render={() => <Summary user={user} />} />
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