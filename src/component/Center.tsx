import * as React from "react";
import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface ICenterProps {
    children: React.ReactNode
}

export default function Center({children}: ICenterProps) {
    const styles = makeStyles(theme => ({
        root: {
            height: "calc(100vh - 56px)",
            minHeight: 700,
            [theme.breakpoints.only("xs")]: {
                minHeight: 0
            },
        }
    }))();
    return (
        <Grid container={true} direction={"column"} justify={"center"} alignItems={"center"}
              className={styles.root}>
            <Grid item={true}>
                {children}
            </Grid>
        </Grid>
    )
}
