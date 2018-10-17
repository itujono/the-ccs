import React from "react"
import { Grid, Header, List, Button, Container, Icon, Transition } from "semantic-ui-react";


const Sidebar = ({ selected, saveTotalCart, total, renderSelected, nextSection, hasSubItems, renderSelectedHasSubItems }) => {
    return (
        <Grid.Column width={4} className="sidebar">
            <Header as="h4" content="Fitur-fitur yang kamu pilih" />
            <Transition.Group animation="fade down" duration={200} as={List} bulleted divided relaxed="very" verticalAlign="middle" className="selected-list">
                { hasSubItems ? renderSelectedHasSubItems() : renderSelected() }
            </Transition.Group>
            { selected && selected.length > 0 ? <Container>
                Estimasi total
                <Header as="h4" content={total ? 'Rp ' + total + ',00' : 0} />
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