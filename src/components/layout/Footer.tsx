import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom"
import SocialLinks from "./SocialLinks"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Footer = () => {
    const initialValues: any = {
        email: ''
    }

    const emailSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is Required')
    });

    const handleSubmit = (values: any) => {
        console.log('values', values);
    }
    
    return (
        <div id="footer">
            <section id="top-half">
                <Grid container>
                    <Grid item md={2} xs={12}>
                        <div className="social-links-wrapper">
                            <h4>Follow Us On</h4>
                            <SocialLinks />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className="email-signup">
                            <h2>Sign up to our newsletter</h2>
                            <Formik
                                initialValues={initialValues}
                                validateSchema={emailSchema}
                                onSubmit={handleSubmit}>
                                <Form>
                                    <div className="form-group">
                                        <Field 
                                            placeholder="Enter your email address" 
                                            type="email" 
                                            name="email" />
                                        <button className="black" type="submit">Sign Up</button>
                                        <ErrorMessage className="error" name="email" component="div" />
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <ul>
                            <li><Link to="/faqs">FAQs</Link></li>                    
                            <li><Link to="/class-structure">Class Structure</Link></li>
                            <li><Link to="/curriculum">Dance Curriculum</Link></li>
                        </ul>
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <ul>
                            <li><Link to="/first-aid">First Aid</Link></li>    
                            <li><Link to="/insurance">Insurance</Link></li>    
                            <li><Link to="/our-rules">Academy Rules</Link></li>    
                        </ul>
                    </Grid>
                </Grid>
            </section>
            <section id="bottom-half">
                <Grid container>
                    <Grid item md={12}>
                        <p>&copy; {new Date().getFullYear()} Street Dance Academy Notting Hill Ltd. Registered in England and Wales - Registered Company Number: 12345676</p>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>    
                            <li><Link to="/terms">Terms of Use</Link></li>    
                            <li><Link to="/cookies">Cookies Policy</Link></li>    
                        </ul>
                    </Grid>
                </Grid>
            </section>
        </div>
    )
}

export default Footer