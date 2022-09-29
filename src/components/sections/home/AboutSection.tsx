import { Grid } from "@mui/material"

const AboutSection = () => {
    return (
        <section id="about-section">
            <Grid container spacing={2} paddingX={10} paddingTop={5} paddingY={4} textAlign="center">
                <Grid item md={12}>
                    <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.</p>
                </Grid>
            </Grid>
        </section>
    )
}

export default AboutSection