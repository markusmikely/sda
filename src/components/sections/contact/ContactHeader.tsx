import { Grid } from "@mui/material"

const ContactHeader = () => {
    return (
        <div className="contact-header">
            <Grid container
            justifyContent="center"
            alignItems="center"
            textAlign="center">
                <Grid item md={12}>
                    <h2>Need to contact us?</h2>
                    <ul>
                        <li>Email: markusmikely@gmail.com</li>
                        <li>Telephone: +44 (0) 7872 380 778</li>
                    </ul>
                    <address>
                        Flat 6,<br />
                        32 Golborne Road,<br />
                        London,<br />
                        Westbourne Park,<br />
                        London, W10 5PN
                    </address>
                    <p>Or feel free to complete our form below and someone will be in touch</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactHeader