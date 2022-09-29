import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const ContactForm = () => {

    const initialValues: any = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const contactSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is Required'),
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        phone: Yup.string().required('Phone is Required'),
        message: Yup.string().required('Message is Required')
    });
    
    const handleSubmit = (values: any) => {
        console.log('values', values)
    }
    return (
        <div className="contact-form">
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="form-group">
                            <label>Name</label>
                            <Field 
                                placeholder="Enter your name" 
                                type="text" 
                                name="name"  />
                            <ErrorMessage className="error" name="name" component="div" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Field 
                                placeholder="Enter your email" 
                                type="email" 
                                name="email" />
                            <ErrorMessage className="error" name="email" component="div" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <Field 
                                placeholder="Enter your contact number"  
                                type="text" 
                                name="phone" />
                            <ErrorMessage className="error" name="phone" component="div" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <Field 
                                placeholder="Enter your message"  
                                as="textarea" 
                                name="message" />
                            <ErrorMessage className="error" name="message" component="div" />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                        <div className="clearfix"></div>
                    </Form>
                
            </Formik>
        </div>
    )
}

export default ContactForm