import { Grid } from "@mui/material"

const OurMissionSection = () => {
    return (
        <section id="our-mission">
            <Grid container maxWidth={1200} 
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={
                {margin: "0px auto 80px"}
            }>
                <Grid item md={12}>
                    <ul>
                        <li>
                            <h2>Our Aims/Mission</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.</p>
                        </li>
                        <li>
                            <h2>Dance Styles</h2>
                            <p>Street, Break dance and dance fusion (Latin, Contemporary, Caporeia, and other art forms) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.</p>
                        </li>
                        <li>
                            <h2>Encouraging creativity and individualism</h2>
                            <p>Street, Break dance and dance fusion (Latin, Contemporary, Caporeia, and other art forms) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.</p>
                        </li>
                        <li>
                            <h2>Working with the community</h2>
                            <p>Street, Break dance and dance fusion (Latin, Contemporary, Caporeia, and other art forms) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.</p>
                        </li>
                        <li>
                            <h2>Message from Markus</h2>
                            <p>Street, Break dance and dance fusion (Latin, Contemporary, Caporeia, and other art forms) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet arcu, eu gravida arcu. Cras blandit feugiat est, non dapibus eros consectetur ultricies. Duis pretium, quam ac faucibus bibendum, nibh est placerat tellus, nec rutrum velit purus id lectus.</p>
                        </li>
                    </ul>
               </Grid>
            </Grid>
        </section>
    )
}

export default OurMissionSection