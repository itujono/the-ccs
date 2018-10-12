import React from "react"
import { Grid, Header, Container, Card, List } from "semantic-ui-react"
import CardItem from "../../components/CardItem";



class Home extends React.Component {

    state = { expanded: false, selectedItem: null }

    handleSelectItem = (selectedItem) => {
        console.log(selectedItem)
        this.setState({ selectedItem })
    }

    handleBlur = () => this.setState({ expanded: false })

    render() {
        const { items, selected } = this.props
        const { selectedItem } = this.state

        return (
            <React.Fragment>
                <Grid.Row width={12}>
                    <Grid.Column>
                        <Header as="h3" content="Bagian: Home" />
                        Aku akan menyadarkan Pak Prabowo bahwa dia adalah anak Indonesia.
                        <List divided verticalAlign='middle'>
                            {
                                selected && selected.map(item => {
                                    return (
                                        <List.Item>
                                            <List.Content>
                                                <List.Header as='a'>{item.name}</List.Header>
                                                {item.description}
                                            </List.Content>
                                        </List.Item>
                                    )
                                })
                            }
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header as="h4" content="Ini Sidebar" />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Container>
                            <Card.Group itemsPerRow={3}>
                            {
                                items && items.map((item) => {
                                    return <CardItem
                                        item={item}
                                        key={item.id}
                                        id={item.id}
                                        selectedItem={selectedItem}
                                        handleSelectItem={this.handleSelectItem}
                                        name={item.name}
                                        price={item.price}
                                        description={item.description}
                                    />
                                })
                            }
                            </Card.Group>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </React.Fragment>
        )
    }
}

export default Home