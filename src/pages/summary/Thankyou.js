import React from "react"
import { Link } from "react-router-dom"
import { Grid, Segment, Header, Container, Button, Responsive } from "semantic-ui-react"


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


const Thankyou = () => {

    return (
        <Responsive as={Grid.Column} computer={6} mobile={14}>
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
                <Container textAlign="center">
                    <Header as="h2" content="Simulasi diterima! 💖" className="tosca" />
                    <p>
                        Great! Simulasi project online shop kamu telah kami terima, dan email berisi detail info simulasi juga udah ada di inbox email kamu.
                    </p>
                    <p className="mb2em">Dengan ini, mudah-mudahan kamu tertarik buat napak ke langkah selanjutnya dengan kami ya. See you, then!</p>
                </Container>
                <Container textAlign="center">
                    <Button content="Coba simulasi lagi" icon="chevron left" className="btn-ccs" onClick={() => window.location.replace('/')} />
                </Container>
            </Segment>
            <div className="navigator-bottom">
                <Button
                    className="link-btn no-hover"
                    basic
                    content={backToHome}
                    onClick={() => window.location.replace('/')}
                />
            </div>
        </Responsive>
    )
}


export default Thankyou
