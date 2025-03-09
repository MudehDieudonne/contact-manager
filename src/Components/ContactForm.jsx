import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import styles from './ContactForm.css'

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
            <Form className={styles.formContainer}>
                <Field className = {styles.inputField} name="name" placeholder="Name" />
                <ErrorMessage className={styles.error}  name='name' />
                <Field className = {styles.inputField} name='email' placeholder= 'Email' />
                <ErrorMessage className={styles.error}  name="email" />
                <Field className = {styles.inputField} name='phone' placeholder='Phone Number' />
                <ErrorMessage className={styles.error}  name="phone" />
                <button className={styles.submitButton} type="submit">Save Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm