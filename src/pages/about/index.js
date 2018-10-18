import React from "react"
import { Grid, Button, Header, Container, List, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"


class About extends React.Component {

    handleGoBack = () => this.props.history.goBack()

    render() {
        return (
            <Grid centered padded className="faq">
                <Grid.Column width={8}>
                    <div className="navigator">
                        <Button onClick={this.handleGoBack} className="link-btn" basic icon="chevron left" />
                    </div>
                    <Container style={{ marginBottom: '3em' }}>
                        <Header as="h2" className="heading">
                            Bagian: <span className="tosca">Tanya Jawab</span>
                        </Header>
                        Baca-baca supaya banyak tau, khususnya tentang The CCS.
                    </Container>
                    <Container>
                        <Header as="h4" content="Tentang The CCS" />
                        <List relaxed="very">
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Siapa The CSS ini sebenernya?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah? Karena perseteruan antara ikan bobo dan ikan cantik takkan berhenti sampai di persimpangan jalan raya.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kok kalian belum ada portfolio?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah?
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Emang udah berapa taun kalian di dunia web development?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah?
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kenapa saya harus hire kalian untuk bikin online shop saya nanti?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah?
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kalian orang jujur gak sih?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah? Karena perseteruan antara ikan bobo dan ikan cantik takkan berhenti sampai di persimpangan jalan raya.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Container>
                    <Container>
                        <Header as="h4" content="Tentang Project Simulator Ini" />
                        <List relaxed="very">
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Gimana cara saya make project simulator ini?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah? Karena perseteruan antara ikan bobo dan ikan cantik takkan berhenti sampai di persimpangan jalan raya.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Harga yang saya dapetin di akhir itu belum final kan?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah?
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kalo harga tiap feature yang ada itu udah final apa belum?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah?
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kalo saya udah setuju dan mau ketemu, kalian bisa dateng ke kota saya?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah? Karena perseteruan antara ikan bobo dan ikan cantik takkan berhenti sampai di persimpangan jalan raya.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Pertanyaan terakhir: Kalian Pilpres nanti milih siapa?" />
                                    <List.Description>
                                        Well, lorem ipsum adalah harga yang tepat agar kita bisa seyogyanya memangku jabatan luar dalam di Kanada. Kenapa tidak di rumah? Karena perseteruan antara ikan bobo dan ikan cantik takkan berhenti sampai di persimpangan jalan raya.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}

export default About