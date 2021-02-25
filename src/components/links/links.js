import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import "./links.css";

const Links = ({ video }) => {
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
                        <Link className="link-text" href="https://github.com/Akk0099">
                            Github
                        </Link>
                    </Typography>
                </Grid>
                <Grid item className="link">
                    <Typography className="title" variant="subtitle2">
                        <Link className="link-text" href={video}>
                            Video Source
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Links;
