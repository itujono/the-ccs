import React from "react"
import { Grid, Header, Container, Card, List, Button, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom";
import CardItem from "../../components/CardItem"



class Home extends React.Component {

    state = { initial: true, selectedItem: null }

    componentDidMount() {
        this.props.fetchInitialItems(this.state.initial)
    }


    handleSelectItem = (selectedItem) => {
        const selected = this.props.selected && this.props.selected.find(item => item.id === selectedItem.id)

        this.setState({ selectedItem, initial: false })

        if (selected) {
            this.props.handleDelete(selected.id)
        } else {
            this.props.handleSaveHome(selectedItem)
        }

    }

    handleBlur = () => this.setState({ expanded: false })

    handleRenderItems = () => {
        const { selected } = this.props

        const selectedItems = selected && selected.map(item => (
            <List.Item key={item.id}>
                <List.Content>
                    <List.Header as='a'>{item.name}</List.Header>
                    Rp {item.price},00
                </List.Content>
            </List.Item>
        ))

        const initialItems = selected && selected.filter(item => item.default).map(item => (
            <List.Item key={item.id}>
                <List.Content>
                    <List.Header as='a'>{item.name}</List.Header>
                    Rp {item.price},00
                </List.Content>
            </List.Item>
        ))

        return this.state.initial ? initialItems : selectedItems
    }

    handleMakeInitial = () => {
        this.props.makeInitial()
        this.setState({ initial: true })
    }

    render() {
        const { items, selected } = this.props
        const { selectedItem } = this.state
        const total = selected && selected.map(item => item.price).reduce((acc, curr) => acc + curr, 0)

        return (
            <React.Fragment>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <Header as="h2" className="heading">
                            Bagian: <span className="tosca">Home</span>
                        </Header>
                        Aku akan menyadarkan Pak Prabowo bahwa dia adalah anak Indonesia.
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4} className="sidebar">
                        <Header as="h4" content="Fitur-fitur yang kamu pilih" />
                        <List bulleted divided relaxed="very" verticalAlign='middle' className="selected-list">
                            { this.handleRenderItems() }
                        </List>
                        { selected && selected.length > 0 ? <Container>
                            Estimasi total
                            <Header as="h4" content={total ? 'Rp ' + total + ',00' : 0} />
                            <div style={{ marginTop: '2em' }}>
                                <p>Udah ngerasa puas sama fitur-fitur yang dipilih?</p> <br />
                                <Button as={Link} to="/features/product_detail" icon labelPosition='right' className="btn-ccs">
                                    Lanjut ke Product Detail <Icon name='chevron right' />
                                </Button>
                            </div>
                        </Container> : <p>Hmm, silakan pilih fitur-fitur nya ya.</p>}
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Container textAlign="right" style={{ marginBottom: '2em' }}>
                            <Button
                                content="Pilihan yang direkomendasikan"
                                className="btn-ccs"
                                icon="checkmark"
                                disabled={this.state.initial}
                                onClick={this.handleMakeInitial}
                            />
                        </Container>
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