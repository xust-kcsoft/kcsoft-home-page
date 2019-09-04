import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import logo from "../assets/logo.png";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import GroupIcon from "@material-ui/icons/Group";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import SmsIcon from "@material-ui/icons/Sms";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";

import {useMediaQuery} from "@material-ui/core";
import {Link} from "react-router-dom";
import {RouterValue} from "../App";


const makeStyle = makeStyles({

    title: {
        fontSize: 20,
    },

    tab: {
        fontSize: 18,
        textAlign: "center",
        color: "white"
    },

    tabSelected: {
        fontSize: 20,
        textAlign: "center",
        color: "white"
    },

});


function Title() {
    const styles = makeStyle();

    return (
        <Grid container={true} alignItems={"center"} spacing={2} justify={"flex-start"}>
            <Grid item={true} xs={1}>
                <Avatar src={logo} sizes={"40 40"}/>
            </Grid>
            <Grid item={true} >
                <Typography hidden={!useMediaQuery("(min-width: 1280px)")} className={styles.title}>创新学院软件创新班</Typography>
            </Grid>
        </Grid>
    )
}


interface ITopBarTabProps {
    iconSelected: any;
    iconDefault: any;
    text: string;
    value: RouterValue;
}

interface ITopBarTabsProps {
    routeValue: RouterValue
    handleChange(event: React.ChangeEvent, newValue: RouterValue): void
}



function TopBarTabs({routeValue, handleChange}: ITopBarTabsProps) {

    const styles = makeStyle();

    function applyLabel({iconSelected, iconDefault, text, value}: ITopBarTabProps, currentValue: string) {
        const isCurrent = currentValue === value;
        return (
            <Grid container={true} justify={"space-evenly"} alignContent={"space-between"}>
                <Grid item={true} hidden={!isCurrent}>
                    {iconSelected}
                </Grid>
                <Grid item={true} hidden={isCurrent}>
                    {iconDefault}
                </Grid>
                <Grid item={true} hidden={!useMediaQuery("(min-width: 1024px)")}>
                    <Typography className={isCurrent ? styles.tabSelected : styles.tab}>{text}</Typography>
                </Grid>
            </Grid>
        )
    }

    function applyProps(props: ITopBarTabProps, currentValue: string) {
        return {
            label: applyLabel(props, currentValue),
            value: props.value
        }
    }

    const [selectedValue, setSelectedValue] = React.useState(routeValue);

    const tabs: ITopBarTabProps[] = [
        {
            iconSelected: <HomeIcon/>,
            iconDefault: <HomeOutlinedIcon/>,
            text: "主页",
            value: "home",
        },
        {
            iconSelected: <SmsIcon/>,
            iconDefault: <SmsOutlinedIcon/>,
            text: "简介",
            value: "information",
        },
        {
            iconSelected: <GroupIcon/>,
            iconDefault: <GroupOutlinedIcon/>,
            text: "成员",
            value: "group"
        },
        {
            iconSelected: <AssessmentIcon/>,
            iconDefault: <AssessmentOutlinedIcon/>,
            text: "建设",
            value: "build",
        },
    ];

    function privateHandleChange(event: any, newValue: RouterValue) {
        setSelectedValue(newValue)
        handleChange(event, newValue)
    }

    return (
        <Tabs value={selectedValue} textColor={"secondary"} indicatorColor={"secondary"} onChange={privateHandleChange}>
            {
                tabs.map((tabProps, index) => <Tab className={styles.tab} key={index} component={Link} to={tabProps.value} {...applyProps(tabProps, selectedValue)} />)
            }
        </Tabs>
    );
}

interface ITopBarProps {
    route: RouterValue
    handleChange(event: React.ChangeEvent, newValue: RouterValue): void
}

export default function TopBar({route, handleChange}: ITopBarProps) {



    return (
        <AppBar position={"fixed"}>
            <Grid container={true} justify={"space-around"}>
                <Grid item={true} sm={4} md={1} lg={4}>
                    <Title/>
                </Grid>
                <Grid item={true} sm={6} md={10} lg={6}>
                    <Grid container={true} justify="flex-end" alignItems={"baseline"} >
                        <TopBarTabs routeValue={route} handleChange={handleChange}/>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
}
