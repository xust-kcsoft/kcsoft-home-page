import * as React from "react";
import MainPageBackground from "/src/assets/background/home-page-background.jpg"
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Background from "../component/Background";
import Center from "../component/Center";

function Title() {

    const styles = makeStyles(theme => ({
        root: {
            fontSize: ({fontSize}: { fontSize: number }) => fontSize,
            [theme.breakpoints.only('xs')]: {
                fontSize: ({fontSize}: { fontSize: number }) => fontSize * 0.6
            },
            textAlign: "center",
        },
        extra: {
            [theme.breakpoints.only('xs')]: {
                marginTop: "50px",
            },
        }
    }));

    const extraStyles = makeStyles(theme => ({
        root: {
            [theme.breakpoints.only('xs')]: {
                marginTop: "325px",
            },
        }
    }))();

    const titles = [
        {
            text: "西安科技大学 校软件创新班",
            fontSize: 48,
        },
        {
            text: "Innovation Institute Software Innovation Class",
            fontSize: 24
        },
    ];

    function TitleItem(props: { text: string, fontSize: number }) {
        return (
            <Grid item={true}>
                <Typography color={"secondary"} className={styles(props).root}>{props.text}</Typography>
            </Grid>
        )
    }

    return (
        <Grid container={true} direction={"column"} alignItems={"center"} justify={"center"} spacing={0} className={extraStyles.root}>
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
                textAlign: "left",
                fontSize: 19,
                [theme.breakpoints.only('xs')]: {
                    fontSize: 19 * 0.8
                },
                maxWidth: "1080px",
                paddingLeft: "15px",
                paddingRight: "10px",
                paddingTop: "4px",
            },
            extra: {
                paddingTop: "11px",
                paddingBottom: "15px",
                backgroundColor: "rgba(134, 143, 166, 0.65)",
            }
        }))();
        const texts = [
            "也许，你热爱鼓捣电脑、手机，却苦于无人指点；",
            "也许，你对Linux、Android或Windows系统有极大的兴趣，却难以深入理解；",
            "也许，你想建设一个只属于自己的网站、你想做一些使用的电脑程序、你想用上自己做的手机App，可是却不知道从何下手......",
            "那么，请不要犹豫。我们西安科技大学校软件创新班欢迎你的到来！",
            "西安科技大学创新学院校软件创新班是唯一的校级软件实验室，自成立至今已有数十年的历史。在学校的大力支持下实验室有了更适宜学习的环境与优质的资源---干净整洁的环境、快速稳定的网络、丰富的图书资源以及有很多与你志同道合的人们......",
            "我们曾多次组织组队参加蓝桥杯、中软杯、挑战杯等各类专业方向的科技竞赛，我们也在ACM-ICPC国际大学生程序设计竞赛上荣获西安科技大学在该门比赛的参赛历史上100%的奖牌，取得了不俗的成绩。",
            "从实验室走出去的学长学姐无论是从业亦或是考研都取得了理想的成绩，有的人去了阿里、腾讯、网易、小米科技等知名企业，有的成为了中科院软件研究所、浙大、电子科技大学的研究生......",
            "只要你热爱学习、热爱计算机软件编程、热爱创新，我们就欢迎你的加入！"
        ];

        return (
            <Grid container={true} direction={"column"} spacing={0} className={styles.extra}>
                {
                    texts.map((text, index) => <Typography className={styles.root} color={"secondary"}
                                                           key={index}>{text}</Typography>)
                }
            </Grid>
        )
    }

    return (
        <Grid container={true} direction={"column"} spacing={1}>
            <Grid item={true}>
                <InvitationText/>
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
    }))();
    const texts = [
        "欢迎加入2019级招新QQ群：831038185",
        "地址：西安科技大学煤炭科技中心#306室",
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
