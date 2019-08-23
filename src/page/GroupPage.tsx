import * as React from "react";

import BackgroundImage from "/src/assets/background/group-page-background.png"
import Background from "../component/Background";

import ChenHang from "/src/assets/avatar/ch.jpg"
import CaiYufei from "/src/assets/avatar/cyf.jpg"
import ChenYuxiang from "/src/assets/avatar/cyx.jpg"
import DingLei from "/src/assets/avatar/dl.jpg"
import DuanZhengyu from "/src/assets/avatar/dzy.jpg"
import Fengna from "/src/assets/avatar/fn.jpg"
import Liuxin from "/src/assets/avatar/lx.jpg"
import LuoXinyi from "/src/assets/avatar/lxy.jpg"
import LiuYiqiang from "/src/assets/avatar/lyq.jpg"
import WanHao from "/src/assets/avatar/wh.jpg"
import WangQinhong from "/src/assets/avatar/wqh.jpg"
import WangYing from "/src/assets/avatar/wy.jpg"
import WangZihan from "/src/assets/avatar/wzh.jpg"
import WangZitong from "/src/assets/avatar/wzt.jpg"
import YuYichun from "/src/assets/avatar/yyc.jpg"
import {Avatar, Container, Grid, Paper, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";


interface IPerson {
    name: string;
    avatarSrc: string;
    position: string;
}


const persons: IPerson[] = [
    {
        name: "王钦弘",
        avatarSrc: WangQinhong,
        position: "班长 软工 17级",
    },
    {
        name: "刘鑫",
        avatarSrc: Liuxin,
        position: "副班长 计科 17级",
    },
    {
        name: "冯娜",
        avatarSrc: Fengna,
        position: "财务部长 网工 17级",
    },
    {
        name: "王子童",
        avatarSrc: WangZitong,
        position: "计算机学院研二",
    },
    {
        name: "陈航",
        avatarSrc: ChenHang,
        position: "通信工程 16级",
    },
    {
        name: "蔡宇飞",
        avatarSrc: CaiYufei,
        position: "物联网工程 16级",
    },
    {
        name: "陈宇翔",
        avatarSrc: ChenYuxiang,
        position: "物联网工程 16级",
    },
    {
        name: "余以春",
        avatarSrc: YuYichun,
        position: "电子信息工程 16级",
    },
    {
        name: "王颖",
        avatarSrc: WangYing,
        position: "电子信息工程 16级",
    },
    {
        name: "段正宇",
        avatarSrc: DuanZhengyu,
        position: "软件工程 16级",
    },
    {
        name: "万浩",
        avatarSrc: WanHao,
        position: "软件工程 16级",
    },
    {
        name: "丁磊",
        avatarSrc: DingLei,
        position: "网络工程 17级",
    },
    {
        name: "刘尹强",
        avatarSrc: LiuYiqiang,
        position: "软件工程 17级",
    },
    {
        name: "罗心怡",
        avatarSrc: LuoXinyi,
        position: "软件工程 17级",
    },
    {
        name: "王子涵",
        avatarSrc: WangZihan,
        position: "软件工程 17级"
    },
];

function PersonComponent({name, avatarSrc, position}: IPerson) {
    const styles = makeStyles(theme => ({
        paper: {
            // backgroundColor: "#868FA699",
            backgroundColor: "rgba(134, 143, 166, 0.65)",
            width: 184,
            height: 200,
            paddingTop: 8,
            [theme.breakpoints.down("xs")]: {
                width: 80,
                height: 120,
            },
        },
        avatar: {
            width: 120,
            height: 120,
            [theme.breakpoints.down("xs")]: {
                width: 64,
                height: 64,
            },
            backgroundRepeat: "repeat",
        },
        name: {
            fontSize: 20,
            textAlign: "center",
            [theme.breakpoints.down("xs")]: {
                fontSize: 12,
            },
        },
        position: {
            fontSize: 16,
            textAlign: "center",
            [theme.breakpoints.down("xs")]: {
                fontSize: 8,
            },
        }

    }))();

    return (
        <Paper className={styles.paper}>
            <Grid container={true} direction={"column"} justify={"center"} alignItems={"center"} spacing={2}>
                <Grid item={true}>
                    <Avatar src={avatarSrc} className={styles.avatar}/>
                </Grid>
                <Grid container={true} direction={"column"} justify={"center"} alignContent={"center"}>
                    <Grid item={true}>
                        <Typography color={"secondary"} className={styles.name}>{name}</Typography>
                    </Grid>
                    <Grid item={true}>
                        <Typography color={"secondary"} className={styles.position}>{position}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

function Persons() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container={true} spacing={2} justify={"center"}>
                {
                    persons.map((person, index) => (
                        <Grid item={true} key={index}>
                            <PersonComponent {...person}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default function GroupPage() {
    const styles = makeStyles(style => ({
        root: {
            paddingTop: 112,
            [style.breakpoints.only("xs")]: {
                paddingTop: 64
            },
        }
    }))();
    return (
        <React.Fragment>
            <Background backgroundImage={BackgroundImage} backgroundColor={"rgba(134, 143, 166, 0.65)"}/>

            <Grid container={true} alignItems={"center"} justify={"center"} direction={"column"}>
                <Grid item={true} className={styles.root}>
                    <Persons />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}