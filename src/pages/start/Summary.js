import React from "react";
import { Grid, Container, Header, Segment, Button, List, Image, Icon, Responsive } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom"
import { mobile } from "../../common"
import Posed from "react-pose"



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


class SummaryHome extends React.Component {

    componentDidMount() {
        if (!this.props.user.name || this.props.user.name === undefined) {
            this.props.history.push('/')
        }
    }

    render() {

        const { user } = this.props

        return (
            <Grid.Column as={GridColumn} width={8} className="summary-home">
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
                    <div className="heading">
                        <Header as="h2" content="Nice!" />
                        <p>
                            So far so good. Berikut adalah summary data diri
                            kamu.
                        </p>
                    </div>
                    <Segment padded="very" className="main-segment">
                        <Responsive as={List} divided={!mobile} horizontal={!mobile} relaxed="very">
                            <List.Item as={Div}>
                                <Image
                                    avatar
                                    src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
                                />
                                <List.Content>
                                    <List.Header>Nama kamu</List.Header>
                                    { user && user.name }
                                </List.Content>
                            </List.Item>
                            <List.Item as={Div}>
                                <Image
                                    avatar
                                    src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
                                />
                                <List.Content>
                                    <List.Header>Email kamu</List.Header>
                                    { user && user.email }
                                </List.Content>
                            </List.Item>
                            <List.Item as={Div}>
                                <Image
                                    avatar
                                    src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                                />
                                <List.Content>
                                    <List.Header>Nama website impian</List.Header>
                                    { user && user.website }
                                </List.Content>
                            </List.Item>
                        </Responsive>
                    </Segment>
                    <Button as={Link} fluid={mobile} to="/features/home" icon labelPosition='right' className="btn-ccs" floated="right">
                        Lanjut! <Icon name='chevron right' />
                    </Button>
                </Container>
            </Grid.Column>
        );
    }
}

export default withRouter(SummaryHome)
