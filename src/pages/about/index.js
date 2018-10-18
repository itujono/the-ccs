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
                        <Header as="h3" content="Tentang The CCS ⚡" />
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
                                    <List.Header content="Setelah saya make project simulator nya, menurut saya harga nya murah. Kok bisa?" />
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
                        <Header as="h3" content="Tentang Project Simulator Ini ⚡" />
                        <List relaxed="very">
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Gimana cara saya make project simulator ini?" />
                                    <List.Description>
                                        Gampang kok. Kamu cukup pilih-pilih aja feature-feature yang ada. Tiap diklik, mereka akan ditambah ke Temporary Cart di sebelah kiri page. Sampe kamu puas milih-milih untuk tiap section (bagian) nya, setelah itu kamu akan dikasihtau total harga keseluruhannya. <br /> Kalo masih ada yang kurang jelas, silakan email kita aja di hi@sempardakwebsite.com.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Harga yang saya dapetin di akhir itu belum final kan?" />
                                    <List.Description>
                                        Belum, itu cuma estimasi kok. Harga final nya tentu bakal kita kalkulasiin setelah kita meeting (ketemuan).
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kalo harga tiap feature yang ada itu udah final apa belum?" />
                                    <List.Description>
                                        Sebenernya itu udah final, tapi nggak final-final amat juga. Karena biasanya client bakal mau sebuah feature itu lebih di-customize lagi demi kebutuhan mereka yang lebih spesifik. Tapi, mostly, harga feature dari kami segitu-segitu aja kok, sesuai yang tertera.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Berapa lama kira-kira pengerjaan satu online shop?" />
                                    <List.Description>
                                        Rata-rata berkisar 2 bulan ya. Tapi, lagi-lagi ini dinamis tergantung dari bobot/feature tambahan online shop nya itu nanti. Ini bakal kita konfirmasi secepatnya begitu kita udah meeting (ketemuan) kok.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kalo saya kepikiran mau ada feature lain, bisa dibuat?" />
                                    <List.Description>
                                        Pasti bisa. Eh maksudnya, pasti bisa propose ke kita. Bisa dikerjain apa nggak nya, yaa itu kita liat nanti. Asal jangan susah-susah banget ya. Heheh.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Kalo saya udah setuju dan mau ketemu, kalian bisa dateng ke kota saya?" />
                                    <List.Description>
                                        Nah ini yang rada ribet. Sebenernya, karena kita domisili di Batam, Kepulauan Riau, kita prefer untuk ngelakuin meeting di seputaran wilayah ini aja. Tapi, kalo kamu memang posisi di luar wilayah ini, kita cuma minta kesediaannya untuk digaransi tiket perjalanan PP (pulang-pergi) dari dan ke Batam, untuk 1 pax. Cukup itu aja, kok. Heheh.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Icon name="help" />
                                <List.Content>
                                    <List.Header content="Pertanyaan terakhir: Kalian Pilpres nanti milih siapa?" />
                                    <List.Description>
                                        Waduh! Kita nggak ngerti politik. Tapi kalo disuruh milih banget, kita bakal milih sama yang concern sama dunia startup Indonesia dengan segenap hati nya. Itu.
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