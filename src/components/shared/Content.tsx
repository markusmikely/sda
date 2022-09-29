import { Grid } from "@mui/material"

interface ContentProps {
    page: string;
    children: any;
}

const Content = ({ page, children}: ContentProps) => {
    return (
        <section id={page + "-content"} className="content">
            <Grid container>
                <Grid item md={12}>
                    {children}
                </Grid>
            </Grid>
        </section>
    )
}

export default Content