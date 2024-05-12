import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react"
import { nanoid } from "nanoid"
import * as Yup from "yup";
import css from './ContactForm.module.css'

export default function ContactForm({ onAdd }) {
    
    const nameFieldId = useId();
    const numberFieldId = useId();

    const initialValues = {
        id:"",
        name: "",
        number: "",
    }

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
    }

    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required").trim(),
        number: Yup.string().matches(/^[0-9+-]*$/, "Invalid phone number!").min(3, "Too Short!").max(50, "Too Long!").required("Required").trim(),
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <label className={css.label} htmlFor={nameFieldId}>Name </label>
                <Field className={css.field} type="text" name="name" id={nameFieldId}></Field>
                <ErrorMessage className={css.error} name="name" component="span"></ErrorMessage>

                <label className={css.label} htmlFor={numberFieldId}>Number </label>
                <Field className={css.field} type="tel" name="number" id={numberFieldId}></Field>
                <ErrorMessage className={css.error} name="number" component="span"></ErrorMessage>

                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}