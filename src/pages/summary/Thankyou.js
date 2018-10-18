import React from "react"
import { Link } from "react-router-dom"
import { Grid, Segment, Header, Container, Button, Responsive } from "semantic-ui-react"
import Posed from "react-pose"
import { mobile } from "../../common";


const backToHome = (
    <div>
        <span>Kembali ke Home </span>&nbsp; 🏠
    </div>
)

const receivedText = (
    <Container>
        <span>Orderan Diterima! </span> 💖
    </Container>
)

const GridColumn = Posed.div({
    enter: { staggerChildren: 100 }
})

const Div = Posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 30, opacity: 0 }
})

const Par = Posed.p({
    enter: { y: 0, opacity: 1, transition: { duration: 100 } },
    exit: { y: 30, opacity: 0 }
})


const Thankyou = () => {

    return (
        <Grid.Column as={GridColumn} width={mobile ? 14 : 6}>
            <Segment padded="very" centered className="wizard-success">
                <svg
                    width="133px"
                    height="133px"
                    viewBox="0 0 133 133"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginBottom: "2.5em" }}
                >
                    <g id="check-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
                        <circle id="filled-circle" fill="#8732ff" cx="66.5" cy="66.5" r="54.5" />
                        <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5" />
                        <circle id="outline" stroke="#8732ff" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
                        <polyline id="check" stroke="#FFFFFF" strokeWidth="4" points="41 70 56 85 92 49" />
                    </g>
                </svg>
                <Container as={Div} textAlign="center">
                    <Header as="h2" content="Simulasi diterima! 💖" className="tosca" />
                    <Par>
                        Great! Simulasi project online shop kamu telah kami terima, dan email berisi detail info simulasi juga udah ada di inbox email kamu.
                    </Par>
                    <Par className="mb2em">Dengan ini, mudah-mudahan kamu tertarik buat napak ke langkah selanjutnya dengan kami ya. See you, then!</Par>
                </Container>
                <Container as={Div} textAlign="center">
                    <Button content="Coba simulasi lagi" icon="chevron left" className="btn-ccs" onClick={() => window.location.replace('/')} />
                </Container>
            </Segment>
            <Div className="navigator-bottom">
                <Button
                    className="link-btn no-hover"
                    basic
                    content={backToHome}
                    onClick={() => window.location.replace('/')}
                />
            </Div>
        </Grid.Column>
    )
}


export default Thankyou
