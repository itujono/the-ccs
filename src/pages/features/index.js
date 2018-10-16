import React from "react"
import { Grid, Header, List, Container, Button, Card, Tab } from "semantic-ui-react"
import CardItem from "../../components/CardItem";
import Sidebar from "../../components/Sidebar";
import { connect } from "react-redux";
import { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial, fetchFeatures } from "../../state/actions/homeActions"
import { saveTotalCart, saveCartItems } from "../../state/actions/cartActions";




class Features extends React.Component {

    state = { initial: true, selectedItem: null, hovered: false }

    componentDidMount() {
        const { section, initialSelected, selected, subItems } = this.props
        const { initial } = this.state

        if (section) this.props.fetchInitialItems(initial, section.id, subItems)
        if (initialSelected && selected) {
            const initialId = initialSelected.map(item => item.id)
            const selectedId = selected.map(item => item.id)

            if (initialId[0] !== selectedId[0] && initialId[1] !== selectedId[1]) {
                this.props.makeInitial(section.id)
            }
        }
    }

    componentDidUpdate(prevProps) {
        const { section, initialSelected, selected } = this.props
        const { initial } = this.state
        
        if (prevProps.section !== this.props.section ) {
            if (section) this.props.fetchInitialItems(initial, section.id)
            if (initialSelected && selected) {
                const initialId = initialSelected.map(item => item.id)
                const selectedId = selected.map(item => item.id)
    
                if (initialId[0] !== selectedId[0] && initialId[1] !== selectedId[1]) {
                    this.props.makeInitial(section.id)
                }
            }
        }

    }
    
    handleSelectItem = (selectedItem) => {
        const { subItems } = this.props
        const selected = this.props.selected && this.props.selected.find(item => item.id === selectedItem.id)
                
        if (selected) {
            this.props.deleteHomeFeatures(selected.id)
        } else {
            if (subItems && subItems[0] !== undefined) {
                return;
            } else {
                this.setState({ selectedItem, initial: false })
                this.props.saveHomeFeatures(selectedItem)
                this.props.fetchFeatures()
            }
        }
    }

    handleOnChangeItem = (selectedItem) => {
        const selected = this.props.selected && this.props.selected.find(item => item.id === selectedItem.id)

        if (selected) {
            this.props.deleteHomeFeatures(selected.id)
        } else {
            this.setState({ selectedItem, initial: false })
            this.props.saveHomeFeatures(selectedItem)
            this.props.fetchFeatures()
        }
    }
    
    handleBlur = () => this.setState({ expanded: false })

    handleMakeInitial = () => {
        const { section: { id } } = this.props

        this.props.makeInitial(id)
        this.setState({ initial: true })
    }

    handleRenderSelected = () => {
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

    handleRenderSelectedHasSubItems = () => {
        const { selected } = this.props

        const selectedFeatures = selected && selected.map(item => (
            <List.Item className="item" key={item.id}>
                <List.Content>
                    <List.Header as='a'>{item.parent}</List.Header>
                    <List.Description>
                        <p>{item.name}</p>
                        Rp {item.price},00
                    </List.Description>
                </List.Content>
            </List.Item>
        ))

        const initialFeatures = selected && selected.filter(item => item.default).map(item => (
            <List.Item className="item" key={item.id}>
                <List.Content>
                    <List.Header as='a'>{item.parent}</List.Header>
                    <List.Description>
                        <p>{item.name}</p>
                        Rp {item.price},00
                    </List.Description>
                </List.Content>
            </List.Item>
        ))

        return this.state.initial ? initialFeatures : selectedFeatures

    }

    handleSaveTotalCart = (total) => {
        const { nextSection, selected } = this.props
        // const name = section.name.toLowerCase().replace(' ', '_')

        if (nextSection && selected) {
            this.props.saveTotalCart(this.props.total + total)
            this.props.saveCartItems(selected)
            this.props.history.push(`/features/${nextSection.toLowerCase()}`)
        }
    }

    renderTab = () => {
        const { features, selected, subItems } = this.props
        const { selectedItem } = this.state
        const hasSubItems = subItems && subItems[0] !== undefined

        const tabbed = features && features.map(item => ({
            menuItem: item.name, render: () => (
                <Tab.Pane attached={false}>
                    <Card.Group itemsPerRow={3}>
                    {
                        item.subitems.map(sub => {
                            const inArray = selected && selected.find(sel => sel.id === item.id)

                            return (
                                <CardItem
                                    item={sub}
                                    inArray={inArray}
                                    key={sub.id}
                                    selectedItem={selectedItem}
                                    handleSelectItem={this.handleSelectItem}
                                />
                            )
                        })
                    }
                    </Card.Group>
                </Tab.Pane>
            )
        }))

        return tabbed
    }

    render() {
        const { selected, features, section, subItems, nextSection } = this.props
        const { selectedItem } = this.state
        const hasSubItems = subItems && subItems[0] !== undefined
        const total = selected && !hasSubItems && selected.map(item => item.price).reduce((acc, curr) => acc + curr, 0)
        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
        ]


        return (
                <Grid centered relaxed="very" className="page-features">
                    <Grid.Row>
                        <Grid.Column width={14}>
                            { section.name !== 'Home' && <div className="navigator">
                                <Button basic icon="chevron left" className="link-btn" onClick={this.props.history.goBack} />
                            </div>}
                            <Header as="h2" className="heading">
                                Bagian: <span className="tosca">{section.name}</span>
                            </Header>
                            Silakan pilih fitur-fitur yang kamu mau untuk online shop kamu.
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Sidebar
                            selected={selected}
                            saveTotalCart={this.handleSaveTotalCart}
                            total={total}
                            hasSubItems={hasSubItems}
                            nextSection={nextSection}
                            renderSelectedHasSubItems={this.handleRenderSelectedHasSubItems}
                            renderSelected={this.handleRenderSelected}
                        />
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
                                {
                                    hasSubItems ? <Tab menu={{ secondary: true }} panes={this.renderTab()} className="tabbed-cards" /> : (
                                    <Card.Group itemsPerRow={3}>
                                    {
                                        features && features.map((item) => {
                                            const inArray = selected && selected.find(sel => sel.id === item.id)

                                            return <CardItem
                                                item={item}
                                                inArray={inArray}
                                                key={item.id}
                                                hovered={this.state.hovered}
                                                hasSubItems={hasSubItems}
                                                subItems={subItems}
                                                selectedItem={selectedItem}
                                                onChangeItem={this.handleOnChangeItem}
                                                handleSelectItem={this.handleSelectItem}
                                            />
                                        })
                                    }
                                    </Card.Group>
                                    )
                                }
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}

const mapState = ({ home, cart }, ownProps) => {
    const sectionName = ownProps.match.params.name.toLowerCase()
    const allSections = home.allSections
    let section = {}

    if (allSections && allSections.length > 0) {
        section = allSections.filter(sec => sec.name.toLowerCase() === sectionName)[0]
    }

    const initialSelected = section && section.items && section.items.filter(item => item.default)
    const subItems = section && section.items && section.items.map(feat => feat.subitems)
    const nextSectionId = allSections && allSections.filter(sect => sect.id === section.id)[0].id + 1
    const nextSection = allSections && allSections.filter(section => section.id === nextSectionId).map(item => item.name)[0]

    return {
        total: cart.total,
        // generalTotal: [ ...cart.total ],
        cart: cart.cart,
        selected: home.selected,
        features: section.items,
        sectionName,
        allSections: home.allSections,
        nextSection,
        subItems,
        section,
        initialSelected
    }
}

const actionList = { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial, saveTotalCart, fetchFeatures, saveCartItems }

export default connect(mapState, actionList)(Features)