import { Grid, Button } from "@mui/material"
import { Link } from "react-router-dom"
import BgImg from './../../../assets/images/stock-photo-young-man-break-dancing-in-dark-hall-with-blue-and-red-lights-tattoo-on-hands-1923252653.jpg'

const PrivateClassesSection = () => {
    const styles = {
        backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${BgImg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "cover"
    }

    return (
        <section id="private-classes" style={styles}>
            <Grid container>
                <Grid item md={12}>
                    <h2>Looking for Private 1 to 1 classes?</h2>
                    <p>Proin metus nibh, dictum ut ante in, tincidunt rhoncus lacus. Quisque ex felis, ullamcorper nec neque dapibus, placerat gravida felis. Donec quam tortor, tincidunt id commodo sed, rutrum a orci. Morbi neque lorem, consectetur ac porta nec, pellentesque ut diam. Phasellus maximus eros ligula, quis ullamcorper massa tincidunt et.</p>
                    <Button variant="outlined" component={Link} to="/teachers">Get in touch today!</Button>
                </Grid>
            </Grid>
        </section>
    )
}

export default PrivateClassesSection