import React from "react"
import { Grid, Header, List, Button, Container, Icon, Transition, Accordion } from "semantic-ui-react";



const Sidebar = ({ selected, saveTotalCart, total, cart, tempTotal, accordion, onClickAccordion, renderSelected, nextSection, hasSubItems, section, renderSelectedHasSubItems }) => {
    return (
        <Grid.Column width={4} className="sidebar">
            <Header as="h4" content="Fitur-fitur yang kamu pilih" />
            <Transition.Group animation="fade down" duration={200} as={List} bulleted divided relaxed="very" verticalAlign="middle" className="selected-list">
                { hasSubItems ? renderSelectedHasSubItems() : renderSelected() }
            </Transition.Group>
            { selected && selected.length > 0 ? <Container>
                Estimasi total - { section.name }
                <Header as="h4" content={total ? 'Rp ' + total + ',00' : 0} />
                { section && section.name !== 'Home' && <div className="temporary-total">
                    <Accordion styled>
                        <Accordion.Title onClick={onClickAccordion} active={accordion}>
                            <Icon name="dropdown" />
                            Total Sementara: Rp {tempTotal + total},00
                        </Accordion.Title>
                        <Accordion.Content active={accordion}>
                            <List divided relaxed="very">
                                {cart && cart.map(item => {
                                    return (
                                        <List.Item>
                                            <List.Header content={`Bagian: ${item.section}`} />
                                            <List.Description>
                                                Rp {item.total},00
                                            </List.Description>
                                        </List.Item>
                                    )
                                })}
                            </List>
                        </Accordion.Content>
                    </Accordion>
                </div>}
                <div className="next-page">
                    <p>Puas sama fitur-fitur yang dipilih?</p> <br />
                    <Button onClick={() => saveTotalCart(total)} icon labelPosition='right' className="btn-ccs">
                        Lanjut ke {nextSection} <Icon name='chevron right' />
                    </Button>
                </div>
            </Container> : <p>Hmm, silakan pilih fitur-fitur nya ya.</p>}
        </Grid.Column>
    )
}

export default Sidebar