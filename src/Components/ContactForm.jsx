import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './ContactForm.css'

const ContactForm = ({initialValues, onSubmit}) => {
    return(
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Required')
          })}
          onSubmit={onSubmit}
        >
            <Form className='formContainer'>
                <Field className = 'inputField' name="name" placeholder="Name" />
                <ErrorMessage className='error'  name='name' />
                <Field className = 'inputField' name='email' placeholder= 'Email' />
                <ErrorMessage className='error'  name="email" />
                <Field className = 'inputField' name='phone' placeholder='Phone Number' />
                <ErrorMessage className='error' name="phone" />
                <button className='submitButton' type="submit">Save Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm