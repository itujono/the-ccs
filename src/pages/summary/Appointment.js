import React from "react"
import { Grid, Button, Container, Header, Form, Icon, Message, Transition } from "semantic-ui-react"
import { Link, withRouter } from "react-router-dom"
import { Formik } from "formik"
import { tanggal } from "../../common";
import DatePicker from "react-datepicker";
import moment from "moment"
import 'react-datepicker/dist/react-datepicker.css'
import Prompt from "../../components/Prompt";


class Appointment extends React.Component {

    state = { datepicker: true, startDate: moment(), prompt: false }

    handleChangeDate = (date) => {
        const { user } = this.props
        this.props.onSavePersonalInfo({ ...user, date: date._d })
        this.setState({ startDate: date, datepicker: false })
    }

    handleShowPrompt = () => this.setState({ prompt: true })
    handleClosePrompt = () => this.setState({ prompt: false })

    handleShowDatepicker = () => this.setState({ datepicker: true })

    render() {
        return (
            <Grid.Column width={8}>
                <Container>
                    <div className="heading">
                        <Header as="h2" content="Mau ketemu?" />
                        <p>Nah, sekarang, kalo kamu udah pengen ketemu, silakan tentukan waktunya ya.</p>
                    </div>
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
                                <Message color="orange">
                                    Kamu minta ketemu hari <strong>{tanggal(this.state.startDate)}</strong> &nbsp;
                                    <Button basic className="link-btn" content="Ganti?" color="grey" onClick={this.handleShowDatepicker} />
                                </Message>
                                <Header as="h4" content="Nice! Sekarang, nomor kontak?" />
                                Oke, karena kamu udah nentuin waktunya, kasih tau kita ya nomer telepon nya supaya bisa kita telfon untuk konfirmasi
                                <Formik
                                    initialValues={{ phone: '' }}
                                    onSubmit={({ phone }) => {
                                        const { user } = this.props
                                        this.props.onSavePersonalInfo({ ...user, phone})
                                        this.props.history.push('/summary')
                                    }}
                                    render={({ values, handleChange, handleSubmit }) => (
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
                                            </Form.Field>
                                            <Button type="submit" content="Submit" className="btn-ccs" />
                                            <Button type="button" basic className="link-btn" content="Nggak mau" onClick={this.handleShowPrompt} />
                                        </Form>
                                    )}
                                />
                            </Container>
                        )}
                    </Transition.Group>
                    <Prompt
                        open={this.state.prompt}
                        onClose={this.handleClosePrompt}
                        header="Yakin nggak mau kasih nomer HP?"
                        cancelText="Eh mau deh"
                        yesText="Iya yakin"
                    >
                        Yakin banget nih ya gak mau kasih nomer HP? Udah paling yakin ni ya?
                    </Prompt>
                    <div className="navigator-bottom">
                        <Button as={Link} to="/summary" basic className="link-btn" icon labelPosition="right" >
                            Nggak sekarang deh
                            <Icon name="chevron right" />
                        </Button>
                    </div>
                </Container>
            </Grid.Column>
        )
    }
}

export default withRouter(Appointment)