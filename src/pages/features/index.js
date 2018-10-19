import React from "react"
import { Grid, Header, List, Container, Button, Card, Tab } from "semantic-ui-react"
import CardItem from "../../components/CardItem";
import Sidebar from "../../components/Sidebar";
import { connect } from "react-redux";
import { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial, fetchFeatures } from "../../state/actions/homeActions"
import { saveTotalCart, saveCartItems } from "../../state/actions/cartActions";
import { mobile } from "../../common";




class Features extends React.Component {

    state = { initial: true, selectedItem: null, hovered: false, activeIndex: 0 }

    componentDidMount() {
        window.scrollTo(0, 0)

        const { section, subItems } = this.props
        const { initial } = this.state

        if (section) this.props.fetchInitialItems(initial, section.id, subItems)
    }

    componentDidUpdate(prevProps) {
        const { section, initialSelected, selected, subItems } = this.props
        const { initial } = this.state
        
        if (prevProps.section.id !== section.id ) {
            window.scrollTo(0, 0)
            this.setState({ activeIndex: 0 })

            if (section) {
                this.props.fetchInitialItems(initial, section.id, subItems)
            }

            if (initialSelected && selected) {
                const initialId = initialSelected.map(item => item.id)
                const selectedId = selected.map(item => item.id)
    
                if (initialId[0] !== selectedId[0] && initialId[1] !== selectedId[1]) {
                    this.handleMakeInitial()
                }
            }
        }
    }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })
    
    handleSelectItem = (selectedItem) => {
        const selected = this.props.selected && this.props.selected.find(item => item.id === selectedItem.id)
        const required = this.props.required && this.props.required.find(item => item.id === selectedItem.id)
        const subRequired = this.props.subItemsRequired && this.props.subItemsRequired.find(item => item.id === selectedItem.id)

        if (required || subRequired) return
        else this.setState({ initial: false })

        if (selected) this.props.deleteHomeFeatures(selected.id)
        else {
            this.props.saveHomeFeatures(selectedItem)
            this.props.fetchFeatures()
            this.setState({ selectedItem })
        }
    }
    
    handleBlur = () => this.setState({ expanded: false })

    handleMakeInitial = () => {
        const { section: { id }, subItems } = this.props

        this.props.makeInitial(id, subItems)
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
        const { nextSection, selected, section: { name } } = this.props
        const url = name === 'Additional' ? "/summary" : `/features/${nextSection.toLowerCase()}`

        if (selected) {
            this.props.saveTotalCart(this.props.total + total)
            this.props.saveCartItems({ item: selected, section: name })
            this.props.history.push(url)
        }
    }

    renderTab = () => {
        const { features, selected, subItemsRequired } = this.props
        const { selectedItem } = this.state

        const tabbed = features && features.map(item => ({
            menuItem: item.name, render: () => (
                <Tab.Pane attached={false}>
                    <Card.Group itemsPerRow={mobile ? 2 : 3}>
                    {
                        item.subitems.map(sub => {
                            const inArray = selected && selected.find(sel => sel.id === sub.id)
                            const subRequired = subItemsRequired && subItemsRequired.find(req => req.id === sub.id)

                            return (
                                <CardItem
                                    item={sub}
                                    inArray={inArray}
                                    key={sub.id}
                                    selectedItem={selectedItem}
                                    subItemsRequired={subRequired}
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
        const { selected, features, section, subItems, nextSection, required } = this.props
        const { selectedItem, activeIndex } = this.state
        const hasSubItems = subItems && subItems[0] !== undefined
        const total = selected && selected.map(item => item.price).reduce((acc, curr) => acc + curr, 0)


        return (
            <Grid centered relaxed="very" stackable className="page-features">
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
                <Grid.Row className="mobile-reversed">
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
                                hasSubItems ? <Tab
                                    menu={{ secondary: true }}
                                    panes={this.renderTab()}
                                    onTabChange={this.handleTabChange}
                                    activeIndex={activeIndex}
                                    className="tabbed-cards"
                                /> : (
                                <Card.Group itemsPerRow={mobile ? 1 : 3}>
                                {
                                    features && features.map((item) => {
                                        const inArray = selected && selected.find(sel => sel.id === item.id)
                                        const requiredItems = required && required.find(req => req.id === item.id)
                                        // const subRequired = subItemsRequired && subItemsRequired.find(req => req.id === item.id)

                                        return <CardItem
                                            item={item}
                                            inArray={inArray}
                                            key={item.id}
                                            hasSubItems={hasSubItems}
                                            subItems={subItems}
                                            selectedItem={selectedItem}
                                            required={requiredItems}
                                            // subItemsRequired={subRequired}
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
    const required = section && section.items && section.items.filter(item => item.required)
    const subItems = section && section.items && section.items.map(feat => feat.subitems)
    const subItemsRequired = section && section.items && section.items.map(feat => feat.subitems).flat().filter(item => item.required)
    const nextSectionId = allSections && allSections.filter(sect => sect.id === section.id)[0].id + 1
    const nextSection = allSections && allSections.filter(section => section.id === nextSectionId).map(item => item.name)[0]

    return {
        total: cart.total,
        cart: cart.cart,
        selected: home.selected,
        features: section.items,
        sectionName,
        allSections,
        nextSection,
        subItems,
        section,
        required,
        subItemsRequired,
        initialSelected
    }
}

const actionList = { saveHomeFeatures, deleteHomeFeatures, fetchInitialItems, makeInitial, saveTotalCart, fetchFeatures, saveCartItems }

export default connect(mapState, actionList)(Features)