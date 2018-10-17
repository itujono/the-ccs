import * as Yup from "yup"
import moment from "moment"
import 'moment/locale/id'


export const signupSchema = Yup.object().shape({
    name: Yup.string().required("Harus diisi ya nama nya"),
    email: Yup.string().required("Email nya juga harus diisi ya")
})

export const validate = (values) => {
    let errors = {}

    if (!values.name) errors.name = "Harus diisi ya namanya"
    if (!values.email) errors.email = "Email nya juga harus diisi"
    if (!values.website) errors.website = "Nama online shop kamu juga penting loh ini"

    return errors
}

export const mobile = window.innerWidth < 415
export const tablet = window.innerWidth > 414 && window.innerWidth < 769


moment.locale('id')

export const tanggal = (date, format = "dddd, DD MMMM YYYY") => {
    return moment(date).format(format)
}