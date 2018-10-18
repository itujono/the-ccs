import React from "react"
import { Grid, Button, Header, Container, List, Icon, Rail, Sticky } from "semantic-ui-react"
import { withRouter } from "react-router-dom"



const nightText = <span>Night mode &nbsp; 🌙</span>

class About extends React.Component {

    state = { contextRef: null }

    handleGoBack = () => this.props.history.goBack()

    handleContextRef = (contextRef) => this.setState({ contextRef })

    render() {
        const { onChangeColor, changeColor } = this.props

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
                    <div ref={this.handleContextRef}>
                        <Container>
                            <Header as="h3" content="Tentang The CCS ⚡" />
                            <List relaxed="very">
                                <List.Item>
                                    <Icon name="help" />
                                    <List.Content>
                                        <List.Header content="Siapa The CCS ini sebenernya?" />
                                        <List.Description>
                                            Code Collective Studio (The CCS) adalah web agency berbasis di Batam, Kepulauan Riau, yang baru terbentuk pertengahan 2018. Kita terdiri dari 1 orang Frontend Engineer, 1 orang Backend Engineer, dan 1 orang UI/UX Designer yang udah berteman lama sejak belasan tahun lalu. Setelah kita ngerasa bosen kerja sama orang terus, akhirnya kita sepakat untuk ngebentuk The CCS. Kita cuma pengen supaya orang-orang -- terutama para pelaku bisnis online UKM -- bisa ngerasain punya online shop professional dengan harga yang amat terjangkau. Itu visi dan misi utama kami.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon name="help" />
                                    <List.Content>
                                        <List.Header content="Kok kalian belum ada portfolio?" />
                                        <List.Description>
                                            Seperti yang kita bilang tadi, The CCS ini baru terbentuk. Jadi bisa dibilang kita adalah pemain baru di bisnis ini. Oleh karena itu, kenapa kamu nggak coba jadi client pertama kami? 😉
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon name="help" />
                                    <List.Content>
                                        <List.Header content="Setelah saya make project simulator nya, menurut saya harga nya murah. Kok bisa?" />
                                        <List.Description>
                                            Jawaban singkatnya: Karena kita tau diri. <br /> Tapi ini serius, karena kita nyadar kita pemain baru, dan bahkan belum punya client sama sekali, maka feature-feature yang tersedia berada di titik harga terendah nya. Kamu bisa banget bandingin sama pembuatan online shop di agency lainnya yang bisa berkisar di atas 100 juta, bahkan beberapa matok harga 200 juta-an. Sementara kita, kita jauh ada di bawah itu. Meski begitu, apa kualitas bisa diadu? Tentu aja! Dan kita pede akan itu. 😎
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon name="help" />
                                    <List.Content>
                                        <List.Header content="Emang udah berapa taun kalian di dunia web development?" />
                                        <List.Description>
                                            Para engineer kita udah berkecimpung di dunia programming sejak tahun 2014. Selama itu, kita kerja di perusahaan-perusahaan orang, dan kemudian baru tahun ini lah kita berani untuk kickstarting agency ini sama-sama.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon name="help" />
                                    <List.Content>
                                        <List.Header content="Kenapa saya harus hire kalian untuk bikin online shop saya nanti?" />
                                        <List.Description>
                                            Jawabannya sederhana sih, karena kita merasa amat mampu. Itu yang pertama. <br /> Yang kedua, produk kita dapat dipastikan akan cepat secara performance, bahkan amat cepat. Ini karena kita nge-leverage teknologi-teknologi terbaru dalam nge-develop produk kamu nanti. Sebagai perbandingan, silakan lihat aja website kita yang sedang kamu gunain ini. Gimana menurut kamu? Lola nggak? Atau malah kecepetan? Heheh. <br /> Yang ketiga, kita terbiasa ngebangun produk yang terasa professional, mulai dari sense of design, user interface, bahkan user experience. Percaya lah, kita udah terbiasa ngelakuinnya. 😉 
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon name="help" />
                                    <List.Content>
                                        <List.Header content="Kalian orang jujur gak sih?" />
                                        <List.Description>
                                            Waduh, serem amat pertanyaannya. 😝 <br />
                                            Tapi kata guru-guru kita di SD dulu, kita orang yang jujur kok. Heheh.
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
                        <Rail position="left">
                            <Sticky context={this.state.contextRef} offset={250} pushing={true}>
                                <Header as="h3" content="Simpan info ini" />
                                <List bulleted relaxed="very" style={{ marginBottom: '2em' }}>
                                    <List.Item>
                                        <List.Header content="Nomor HP" />
                                        <List.Description>+62 821 13 111 668</List.Description>
                                    </List.Item>
                                    <List.Item>
                                        <List.Header content="Email" />
                                        <List.Description>hi@websitesempardak.com</List.Description>
                                    </List.Item>
                                    <List.Item>
                                        <List.Header content="Alamat" />
                                        <List.Description>Komp Sempardak di Batam, Kepulauan Riau 29433</List.Description>
                                    </List.Item>
                                </List>
                                <Button content={changeColor ? "Normal mode" : nightText} className="btn-ccs" onClick={onChangeColor} />
                            </Sticky>
                        </Rail>
                    </div>
                    <div className="navigator-bottom" style={{ opacity: .4 }}>
                        <p>Udah abis kok, mas.</p>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(About)