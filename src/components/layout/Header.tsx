import { Grid } from '@mui/material';
import Logo from './Logo';
import Navigation from './Navigation';


const Header = () => {

    return (
        <div id="header">
            <Grid container>
                <Grid item md={12}>
                    <Logo />
                    <Navigation />
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
