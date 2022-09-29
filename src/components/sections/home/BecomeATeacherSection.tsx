import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import BgImg from './../../../assets/images/stock-photo-young-man-break-dancing-in-dark-hall-with-blue-and-red-lights-tattoo-on-hands-1923252653.jpg'

const BecomeATeacherSection = () => {

    const styles = {
        backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${BgImg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "cover"
    }

    return (
        <section id="become-a-teacher-section" style={styles}>
            <Grid container>
                <Grid item md={12}>
                    <h2>Join our team of skilled creatives</h2>
                    <ul>
                        <li><h4>Are you an Experienced street dance choreogpaher</h4></li>
                        <li><h4>Do you have experice working with children/adults</h4></li>
                        <li><h4>Already hold a valid DBS Certificate</h4></li>
                        <li><h4>Want to give back to your community</h4></li>
                    </ul>
                    <p className="large">Then the Street Dance Academy, might be just for you!</p>
                    <p className="large">For more information on becoming an SDA Teacher or joining one of our teaching programmes, get in touch today.</p>
                    <Button variant="outlined" component={Link} to="/teachers">Become A Teacher</Button>
                </Grid>
            </Grid>
        </section>
    )
}

export default BecomeATeacherSection