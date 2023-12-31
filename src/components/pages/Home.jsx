import React, { useEffect } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Mygroups from "../layout/Mygroups";
import People from "../layout/People";
import Groups from "../layout/Groups";
import Friendrequests from "../layout/Friendrequests";
import Friend from "../layout/Friend";
import Blocklist from "../layout/Blocklist";

const Home = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Mygroups />
                <People />
            </Grid>
            <Grid item xs={4}>
                <Groups />
                <Friendrequests />
            </Grid>
            <Grid item xs={4}>
                <Friend />
                <Blocklist />
            </Grid>
        </Grid>
    );
};

export default Home;
