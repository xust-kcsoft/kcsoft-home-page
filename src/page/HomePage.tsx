import * as React from "react";
import MainPageBackground from "/src/assets/background/home-page-background.jpg"
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Background from "../component/Background";
import QRCodeImage from "/src/assets/qr_code.png"
import Center from "../component/Center";

function Title() {

    const styles = makeStyles(theme => ({
        root: {
            fontSize: ({fontSize}: { fontSize: number }) => fontSize,
            [theme.breakpoints.only('xs')]: {
                fontSize: ({fontSize}: { fontSize: number }) => fontSize * 0.8
            },
            textAlign: "center",
        }
    }));

    const titles = [
        {
            text: "西安科技大学",
            fontSize: 20,
        },
        {
            text: "创新学院",
            fontSize: 60,
        },
        {
            text: "Innovation Institute Software Innovation Class",
            fontSize: 18
        },
        {
            text: "校软件创新班",
            fontSize: 60
        }
    ];

    function TitleItem(props: { text: string, fontSize: number }) {
        return (
            <Grid item={true}>
                <Typography color={"secondary"} className={styles(props).root}>{props.text}</Typography>
            </Grid>
        )
    }

    return (
        <Grid container={true} direction={"column"} alignItems={"center"} justify={"center"} spacing={0}>
            {
                titles.map((props, index) => <TitleItem {...props} key={index}/>)
            }
        </Grid>
    )
}

function Invitation() {
    function InvitationText() {
        const styles = makeStyles(theme => ({
            root: {
                textAlign: "center",
                fontSize: 18,
                [theme.breakpoints.only('xs')]: {
                    fontSize: 18 * 0.8
                }
            }
        }))();
        const texts = [
            "正在从2019级新生和2018级老生中招募新成员",
            "欢迎加入2019级招新QQ群：831038185"
        ];

        return (
            <Grid container={true} direction={"column"} spacing={0}>
                {
                    texts.map((text, index) => <Typography className={styles.root} color={"secondary"}
                                                           key={index}>{text}</Typography>)
                }
            </Grid>
        )
    }

    function QRCode() {
        return (
            <Grid container={true} justify={"center"}>
                <img src={QRCodeImage} width={200} height={200}/>
            </Grid>
        )
    }

    return (
        <Grid container={true} direction={"column"} spacing={1}>
            <Grid item={true}>
                <InvitationText/>
            </Grid>
            <Grid item={true}>
                <QRCode/>
            </Grid>
        </Grid>
    )
}

function Address() {
    const styles = makeStyles(theme => ({
        root: {
            fontSize: 18,
            [theme.breakpoints.only('xs')]: {
                fontSize: 18 * 0.8
            }
        }
    }))()
    return <Typography className={styles.root} color={"secondary"}>地址：西安科技大学煤炭科技中心#306室</Typography>
}

export default function HomePage() {
    return (
        <React.Fragment>
            <Background backgroundImage={MainPageBackground} backgroundColor={"rgba(134, 143, 166, 0.65)"} />
            <Center>
                <Grid container={true} direction={"column"} alignItems={"center"} spacing={6}
                      justify={"center"}>
                    <Grid item={true} style={{marginTop:'60px'}}>
                        <Title/>
                    </Grid>
                    <Grid item={true}>
                        <Invitation/>
                    </Grid>
                    <Grid item={true}>
                        <Address/>
                    </Grid>
                </Grid>
            </Center>
        </React.Fragment>
    );
}
