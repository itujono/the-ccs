import React from "react"
import { Grid, Header, List, Button, Container, Icon } from "semantic-ui-react";


const Sidebar = ({ selected, saveTotalCart, total, renderSelected, nextSection }) => {
    return (
        <Grid.Column width={4} className="sidebar">
            <Header as="h4" content="Fitur-fitur yang kamu pilih" />
            <List bulleted divided relaxed="very" verticalAlign="middle" className="selected-list">
                { renderSelected() }
            </List>
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