import React from "react";
import { Grid, Container, Header, Segment, Button, List, Image, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";



class SummaryHome extends React.Component {

    componentDidMount() {
        if (!this.props.user.name || this.props.user.name === undefined) {
            this.props.history.push('/')
        }
    }

    render() {

        const { user } = this.props

        return (
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
                    <Segment padded="very" className="main-segment">
                        <List divided horizontal relaxed="very">
                            <List.Item>
                                <Image
                                    avatar
                                    src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
                                />
                                <List.Content>
                                    <List.Header>Nama kamu</List.Header>
                                    { user && user.name }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image
                                    avatar
                                    src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
                                />
                                <List.Content>
                                    <List.Header>Email kamu</List.Header>
                                    { user && user.email }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image
                                    avatar
                                    src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                                />
                                <List.Content>
                                    <List.Header>Nama website impian</List.Header>
                                    { user && user.website }
                                </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                </Container>
                <Button as={Link} to="/features/home" icon labelPosition='right' className="btn-ccs" floated="right">
                    Lanjut! <Icon name='chevron right' />
                </Button>
            </Grid.Column>
        );
    }
}

export default withRouter(SummaryHome)
