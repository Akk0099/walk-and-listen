import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import "./disclamer.css";

const Disclamer = () => {
    return (
        <Grid item className="menu">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item className="link">
                    <Typography className="title" variant="subtitle2">
                        This webapp was inspired in:
                    </Typography>
                    <Typography className="title" variant="subtitle2">
                        <Link className="title-disclamer" href="https://driveandlisten.herokuapp.com/">
                            Drive & Listen
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Disclamer;
