import React from "react"
import { Grid, Header, List, Container, Button, Card, Icon } from "semantic-ui-react"
import CardItem from "../../components/CardItem";
import { connect } from "react-redux";
import { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial, fetchFeatures } from "../../state/actions/homeActions"
import { saveTotalCart } from "../../state/actions/cartActions";




class Features extends React.Component {

    state = { initial: true, selectedItem: null }

    componentDidMount() {
        const { section } = this.props
        const { initial } = this.state

        if (section) this.props.fetchInitialItems(initial, section.id)
    }    
    
    handleSelectItem = (selectedItem) => {
        const selected = this.props.selected && this.props.selected.find(item => item.id === selectedItem.id)
        
        this.setState({ selectedItem, initial: false })
        
        if (selected) {
            this.props.deleteHomeFeatures(selected.id)
        } else {
            this.props.saveHomeFeatures(selectedItem)
            this.props.fetchFeatures()
        }
        
    }
    
    handleBlur = () => this.setState({ expanded: false })

    handleMakeInitial = () => {
        const { section: { id } } = this.props

        console.log("Initialized!!!!")

        this.props.makeInitial(id)
        this.setState({ initial: true })
    }

    handleRenderFeatures = () => {
        const { selected } = this.props

        const selectedFeatures = selected && selected.map(item => (
            <List.Item className="item" key={item.id}>
                <List.Content>
                    <List.Header as='a'>{item.name}</List.Header>
                    Rp {item.price},00
                </List.Content>
            </List.Item>
        ))

        const initialFeatures = selected && selected.filter(item => item.default).map(item => (
            <List.Item className="item" key={item.id}>
                <List.Content>
                    <List.Header as='a'>{item.name}</List.Header>
                    Rp {item.price},00
                </List.Content>
            </List.Item>
        ))

        return this.state.initial ? initialFeatures : selectedFeatures
    }

    handleSaveTotalCart = (total) => {
        this.props.saveTotalCart(total)
        this.props.history.push('/features/product_detail')
    }

    render() {
        const { selected, features } = this.props
        const { selectedItem } = this.state
        const total = selected && selected.map(item => item.price).reduce((acc, curr) => acc + curr, 0)

        return (
                <Grid centered relaxed="very" className="page-home">
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
                            <List bulleted divided relaxed="very" verticalAlign="middle" className="selected-list">
                                { this.handleRenderFeatures() }
                            </List>
                            { selected && selected.length > 0 ? <Container>
                                Estimasi total
                                <Header as="h4" content={total ? 'Rp ' + total + ',00' : 0} />
                                <div className="next-page">
                                    <p>Puas sama fitur-fitur yang dipilih?</p> <br />
                                    <Button onClick={() => this.handleSaveTotalCart(total)} icon labelPosition='right' className="btn-ccs">
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
                                    features && features.map((item) => {
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
                </Grid>
        )
    }
}

const mapState = ({ home, cart }, ownProps) => {
    const sectionName = ownProps.match.params.name.toLowerCase()

    let section = {}

    if (home.allSections && home.allSections.length > 0) {
        section = home.allSections.filter(sec => sec.name.toLowerCase() === sectionName)[0]
    }

    const initialSelected = section && section.items && section.items.filter(item => item.default)

    return {
        selected: home.selected,
        total: cart.total,
        features: section.items,
        section,
        initialSelected
    }
}

const actionList = { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial, saveTotalCart, fetchFeatures }

export default connect(mapState, actionList)(Features)