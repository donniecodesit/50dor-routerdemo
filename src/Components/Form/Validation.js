import * as yup from "yup";

const contactSchema = yup.object().shape({
    fullname: yup.string("Enter any valid text.").required("Required"),
    email: yup.string("Enter a valid email.").email("Enter a valid email.").required("Required"),
    message: yup.string("Enter a valid string.").required("Required"),
    phone: yup.string("Enter a valid phone number."),
    website: yup.string("Enter a valid url")
})

export default contactSchema;