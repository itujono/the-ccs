import React from "react"
import { Grid, Header, Container, Card, List } from "semantic-ui-react"
import CardItem from "../../components/CardItem";



class Home extends React.Component {

    state = { expanded: false, selectedItem: null }


    handleSelectItem = (selectedItem) => {
        const selected = this.props.selected && this.props.selected.find(item => item.id === selectedItem.id)

        this.setState({ selectedItem })

        if (selected) {
            this.props.handleDelete(selected.id)
        } else {
            this.props.handleSaveHome(selectedItem)
        }

    }

    handleBlur = () => this.setState({ expanded: false })

    render() {
        const { items, selected } = this.props
        const { selectedItem } = this.state
        const total = selected && selected.map(item => item.price).reduce((acc, curr) => acc + curr, 0)

        return (
            <React.Fragment>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <Header as="h3" content="Bagian: Home" />
                        Aku akan menyadarkan Pak Prabowo bahwa dia adalah anak Indonesia.
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4} className="sidebar">
                        <Header as="h4" content="Fitur-fitur yang kamu pilih" />
                        <List bulleted divided relaxed="very" verticalAlign='middle' className="selected-list">
                            {
                                selected && selected.map(item => {
                                    return (
                                        <List.Item key={item.id}>
                                            <List.Content>
                                                <List.Header as='a'>{item.name}</List.Header>
                                                Rp {item.price},00
                                            </List.Content>
                                        </List.Item>
                                    )
                                })
                            }
                        </List>
                        <Container>
                            Estimasi total
                            <Header as="h4" content={total ? 'Rp ' + total + ',00' : 0} />
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Container>
                            <Card.Group itemsPerRow={3}>
                            {
                                items && items.map((item) => {
                                    const inArray = selected && selected.find(sel => sel.id === item.id)

                                    return <CardItem
                                        item={item}
                                        inArray={inArray}
                                        key={item.id}
                                        selectedItem={selectedItem}
                                        handleSelectItem={this.handleSelectItem}
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