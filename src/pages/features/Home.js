import React from "react"
import { Grid, Header } from "semantic-ui-react";


class Home extends React.Component {
    render() {
        return (
            <Grid.Column width={12}>
                <Header as="h3" content="Bagian: Home" />
                Aku akan menyadarkan Pak Prabowo bahwa dia adalah anak Indonesia.
            </Grid.Column>
        )
    }
}

export default Home