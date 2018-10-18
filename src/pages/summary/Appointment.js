import React from "react"
import { Grid, Button, Container, Header, Form, Icon, Message, Transition, Responsive } from "semantic-ui-react"
import { Link, withRouter } from "react-router-dom"
import { Formik } from "formik"
import { tanggal, mobile } from "../../common"
import DatePicker from "react-datepicker"
import moment from "moment"
import 'react-datepicker/dist/react-datepicker.css'
import Prompt from "../../components/Prompt"
import * as yup from "yup"
import Posed from "react-pose"




const phoneSchema = yup.object().shape({
    phone: yup.string().required("Gak boleh kosong ya nomor HP nya")
})

const GridColumn = Posed.div({
    enter: { staggerChildren: 100 }
})

const Div = Posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 30, opacity: 0 }
})

const Butt = Posed.button({
    enter: { y: 0, opacity: 1, transition: { duration: 100 } },
    exit: { y: 30, opacity: 0 }
})


class Appointment extends React.Component {

    state = { datepicker: true, startDate: moment(), prompt: false, promptNotAll: false }

    handleChangeDate = (date) => {
        const { user } = this.props
        this.props.onSavePersonalInfo({ ...user, date: date._d })
        this.setState({ startDate: date, datepicker: false })
    }

    handleShowPrompt = () => this.setState({ prompt: true })
    handleClosePrompt = () => this.setState({ prompt: false })

    handleShowPromptNotAll = () => this.setState({ promptNotAll: true })
    handleClosePromptNotAll = () => this.setState({ promptNotAll: false })

    handleShowDatepicker = () => this.setState({ datepicker: true })

    handleNextPage = () => this.props.history.push('/summary/thankyou')

    render() {
        return (
            <Grid.Column as={GridColumn} width={mobile ? 16 : 8} className="appointment">
                <Container>
                    <Div className="heading">
                        <Header as="h2" content="Mau ketemu?" />
                        <p>Nah, sekarang, kalo kamu udah pengen ketemu, silakan tentukan waktunya ya.</p>
                    </Div>
                    <Transition.Group animation="fade up" duration={200}>
                    { this.state.datepicker ? 
                            <DatePicker
                                name="time"
                                inline
                                selected={this.state.startDate}
                                onChange={this.handleChangeDate}
                                dateFormat="LLL"
                                minDate={moment()}
                            /> : (
                            <Container>
                                <Message as={Div} color="orange">
                                    Kamu minta ketemu hari <strong>{tanggal(this.state.startDate)}</strong> &nbsp;
                                    <Button basic className="link-btn" content="Ganti?" color="grey" onClick={this.handleShowDatepicker} />
                                </Message>
                                <Header as="h4" content="Nice! Sekarang, nomor kontak?" />
                                Oke, karena kamu udah nentuin waktunya, kasih tau kita ya nomer telepon nya supaya bisa kita telfon untuk konfirmasi
                                <Formik
                                    initialValues={{ phone: '' }}
                                    validationSchema={phoneSchema}
                                    onSubmit={({ phone }) => {
                                        const { user } = this.props
                                        this.props.onSavePersonalInfo({ ...user, phone})
                                        this.props.history.push('/summary/thankyou')
                                    }}
                                    render={({ values, handleChange, handleSubmit, errors, touched }) => (
                                        <Form onSubmit={handleSubmit} className="main-form mt3em">
                                            <Form.Field>
                                                <Form.Input
                                                    type="tel"
                                                    label="Nomor hape kamu"
                                                    placeholder="Misal: 08191919191"
                                                    value={values.phone}
                                                    name="phone"
                                                    width={12}
                                                    onChange={handleChange}
                                                />
                                                { errors.phone && touched.phone && <span className="error-text">{errors.phone}</span> }
                                            </Form.Field>
                                            <Button as={Butt} type="submit" content="Submit" className="btn-ccs" icon="plus" />
                                            <Button as={Butt} type="button" basic className="link-btn" content="Nggak mau" onClick={this.handleShowPrompt} />
                                        </Form>
                                    )}
                                />
                            </Container>
                        )}
                    </Transition.Group>
                    <Transition visible={this.state.prompt} unmountOnHide={true} animation="fade down" duration={200}>
                        <Prompt
                            // open={this.state.prompt}
                            onClose={this.handleClosePrompt}
                            header="Yakin nggak mau kasih nomer HP?"
                            cancelText="Eh mau deh"
                            yesText="Iya yakin"
                            confirm={this.handleNextPage}
                        >
                            Yakin banget nih ya gak mau kasih nomer HP? Udah paling yakin ni ya?
                        </Prompt>
                    </Transition>
                    <Transition visible={this.state.promptNotAll} unmountOnHide={true} animation="fade down" duration={200}>
                        <Prompt
                            // open={this.state.promptNotAll}
                            onClose={this.handleClosePromptNotAll}
                            header="Yakin?"
                            cancelText="Eh mau deh"
                            yesText="Iya yakin"
                            confirm={this.handleNextPage}
                        >
                            Yakin banget nih ya gak mau janjian dulu sama kita? Udah paling yakin ni ya?
                        </Prompt>
                    </Transition>
                    { this.state.datepicker && <div className="navigator-bottom">
                        <Button onClick={this.handleShowPromptNotAll} basic className="link-btn" icon labelPosition="right" >
                            Nggak sekarang deh
                            <Icon name="chevron right" />
                        </Button>
                    </div>}
                </Container>
            </Grid.Column>
        )
    }
}

export default withRouter(Appointment)