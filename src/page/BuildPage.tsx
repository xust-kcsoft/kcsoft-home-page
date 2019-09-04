import * as React from "react";
import Background from "../component/Background";
import BackgroundImage from "/src/assets/background/award-page-background.png"
import {Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth, {isWidthUp, WithWidth} from "@material-ui/core/withWidth";

// competition
import CCCCPrizesPhoto from "/src/assets/award/cccc-prizes-photo.jpg"; // CCCC 竞赛证书
import Wqh2018LanqiaoProvincalFirst from "/src/assets/award/wqh-2018-lanqiao-provincal-first.jpg"; // 王钦弘2018蓝桥省一
import Wqh2019LanqiaoProvincalFirst from "/src/assets/award/wqh-2019-lanqiao-provincal-first.jpg"; // 王钦弘2018蓝桥省一
import Wqh2019ACMNationalInvitationalThird from "/src/assets/award/wqh-2019-acm-national-invitational-third.jpg"; // 王钦弘2019ACM全国邀请赛铜
import Dl2018LanqiaoProvincalSecond from "/src/assets/award/dl-2018-lanqiao-provincal-second.jpg"; // 丁磊2018蓝桥省二
import Dl2019LanqiaoProvincalThird from "/src/assets/award/dl-2019-lanqiao-provincal-third.jpg"; // 丁磊2019蓝桥省三
import DlCCCCProvincalThird from "/src/assets/award/dl-cccc-provincal-third.jpg"; // 丁磊CCCC省三
import Jj2019CCCCProvincalThird from "/src/assets/award/jj-2019-cccc-provincal-third.jpg"; // 蒋佳CCCC省三
import Jj2019LanqiaoNationalHonorable from "/src/assets/award/jj-2019-lanqiao-national-honorable.jpg"; // 蒋佳蓝桥国优
import Jj2019LanqiaoProvincalThird from "/src/assets/award/jj-2019-lanqiao-provincal-third.jpg"; // 蒋佳蓝桥省一
import KinectCsiet from "/src/assets/award/kinect-csiet.jpg"; // 祖传Kinect
import Lx2019LanqiaoProvincalThird from "/src/assets/award/lx-2019-lanqiao-provincal-third.jpg"; // 刘鑫2019蓝桥省三
import Lxy2018LanqiaoProvincalSecond from "/src/assets/award/lxy-2018-lanqiao-provincal-second.jpg"; // 罗心怡2018蓝桥省二
import Lxy2019CCCCProvincalThird from "/src/assets/award/lxy-2019-cccc-provincal-third.jpg"; // 罗心怡CCCC省三
import Lxy2019LanqiaoProvincalSecond from "/src/assets/award/lxy-2019-lanqiao-provincal-second.jpg"; // 罗心怡2019蓝桥省二
import Lyq2019CCCCTeamThird from "/src/assets/award/lyq-2019-cccc-team-third.jpg"; // 刘尹强CCCC省三
import Lyq2019LanqiaoSecond from "/src/assets/award/lyq-2019-lanqiao-second.jpg"; // 刘尹强2019蓝桥省二
import Team2019ACMNationalHonorable from "/src/assets/award/team-2019-acm-national-honorable.jpg"; // 2019ACM省赛奖状证明
import Team2019ACMNationalInvitationalThird from "/src/assets/award/team-2019-acm-national-invitational-third.jpg"; // 2019ACM全国邀请赛铜牌队伍证明
import Team2019ACMProvincalThird from "/src/assets/award/team-acm-2019-provincal-third.jpg"; // 2019ACM省赛铜证明
import Wwt2019LanqiaoProvincalFirst from "/src/assets/award/wwt-2019-lanqiao-provincal-first.jpg"; // 吴文韬2019蓝桥省一
import Wzh2018LanqiaoProvincalThird from "/src/assets/award/wzh-2018-lanqiao-provincal-third.jpg"; // 王子涵2018蓝桥省三
import YycGplpBronze from "/src/assets/award/yyc-gplp-bronze.png"; // 余以春CCCC团三
import YycIcpcInvitationBronze from "/src/assets/award/yyc-icpc-invitation-bronze.png"; // 余以春2019ACM全国邀请赛铜

// prize
import Jyx2019CucdcThird from "/src/assets/award/jyx-2019-cucdc-third.jpg"; // 纪雨鑫2019计设三等
import Jyx2019NeccsSecond from "/src/assets/award/jyx-2019-neccs-second.jpg"; // 纪雨鑫2019英语国三
import Lxy2018FltrpProvincalThird from "/src/assets/award/lxy-2018-fltrp-provincal-third.jpg"; // 罗心怡2018外研社省三
import Lxy2018NeccsNationalFirst from "/src/assets/award/lxy-2018-neccs-national-first.jpg"; // 罗心怡2018NECCS国一
import Lxy2019NeccsNationalFirst from "/src/assets/award/lxy-2019-neccs-national-first.jpg"; // 罗心怡2019NECCS国一
import LxyEnglishReadingSpecial from "/src/assets/award/lxy-english-reading-special.png"; // 罗心怡2018外研社国特
import Lyq2018CmathcNationalSecond from "/src/assets/award/lyq-2018-cmathc-national-second.jpg"; // 刘尹强2018数学竞赛国二
import Lyq2018NECCSNationalThird from "/src/assets/award/lyq-2018-neccs-national-third.jpg"; // 刘尹强2018NECCS国三
import Lyq2019NECCSNationalThird from "/src/assets/award/lyq-2019-neccs-national-third.jpg"; // 刘尹强2019NECCS国三
import WzhZzqEiPaper from "/src/assets/award/wzh,zzq-ei-paper.png"; // 王子涵，张真谦EI论文
import Wzh2018NECCSNationalSecond from "/src/assets/award/wzh-2018-neccs-national-second.jpg"; // 王子涵2018NECCS国二
import YycNationalScholarship from "/src/assets/award/yyc-national-scholarship.png"; // 余以春国家奖学金

// environment
import LibPic1 from "/src/assets/award/lib-pic1.png";
import LibPic2 from "/src/assets/award/lib-pic2.png";
import LibPic3 from "/src/assets/award/lib-pic3.png";
import LibPic4 from "/src/assets/award/lib-pic4.png";
import LibPic5 from "/src/assets/award/lib-pic5.png";

// contest
import CCCCPhoto from "/src/assets/award/cccc-photo.jpg"; // 2019CCCC团体照片
import ICPC2018ECFinal from "/src/assets/award/icpc-2018-ec-final.jpg"; // 2018ECFinal陈航队照片
import ICPC2018ECFinalPhoto from "/src/assets/award/icpc-2018-ec-final-photo.jpg"; // 2018ECFinal团体照片
import ICPC2019ACMNationalInvitationalThirdPhoto from "/src/assets/award/icpc-2019-acm-national-invitational-third-photo.jpg"; // 2019全国邀请赛王钦弘组
import ICPC2019ACMNationalPhoto from "/src/assets/award/icpc-2019-acm-national-photo.jpg"; // 2019ACM全国邀请赛团体照片
import ICPC2019ACMPhoto from "/src/assets/award/icpc-2019-acm-photo.jpg"; // 2019ACM陕西省赛团体照片
import NationalLanqiao2019Photo from "/src/assets/award/national-lanqiao-2019-photo.jpg"; // 2019蓝桥国赛背景照片
import ProvincalLanqiao2019Photo from "/src/assets/award/provincal-lanqiao-2019photo.jpg"; // 2019蓝桥省赛合照
import ICPCECFinalContest from "/src/assets/award/icpc-ec-final-contest.jpg"; // 2018ECFinal现场照片

import Container from "@material-ui/core/Container";

type Category =
    | ""
    | "environment"
    | "competition"
    | "prize"
    | "photo"

interface ISelectionButtonInfo {
    label: string
    category: Category
}

interface IButtonListProps {
    currentCategory: Category
    setCurrentCategory: (category: Category) => void
}

interface ISelectionButtonProps extends IButtonListProps {
    info: ISelectionButtonInfo
}


function SelectionButton({info, currentCategory, setCurrentCategory}: ISelectionButtonProps) {

    const {label, category} = info;

    const isCurrent = currentCategory === category;

    const styles = makeStyles(theme => ({
        span: {
            fontSize: 20,
            width: 120,
            height: 56,
            [theme.breakpoints.only("xs")]: {
                fontSize: 10,
                width: 60,
                height: 28,
            },
            [theme.breakpoints.only("sm")]: {
                fontSize: 20 * 0.8,
                width: 120 * 0.8,
                height: 56 * 0.8
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

    }))();

    function handleClick() {
        setCurrentCategory(category)
    }

    return (
        <Button color={isCurrent ? "primary" : "secondary"} onClick={handleClick}
                variant={isCurrent ? "contained" : "outlined"}>
            <span className={styles.span}>{label}</span>
        </Button>
    );
}


const selectionButtonProps: ISelectionButtonInfo[] = [
    {
        label: "概览",
        category: "",
    },
    {
        label: "实验室环境",
        category: "environment",
    },
    {
        label: "竞赛荣誉",
        category: "competition"
    },
    {
        label: "奖状证书",
        category: "prize"
    },
    {
        label: "比赛风采",
        category: "photo"
    }

];


function Title() {
    const styles = makeStyles(theme => ({
        title: {
            fontSize: 48,
            textAlign: "center",
            [theme.breakpoints.only("xs")]: {
                fontSize: 30
            }
        }
    }))();
    return (
        <Typography color={"secondary"} className={styles.title}>实验室环境与竞赛荣誉</Typography>
    )
}


const ButtonList = withWidth()(
    class extends React.Component<WithWidth & IButtonListProps> {

        public render() {

            const {currentCategory, setCurrentCategory} = this.props;

            return (
                <Grid container={true} spacing={isWidthUp(this.props.width, "xs") ? 1 : 4} justify={"center"}
                      wrap={"wrap"}>
                    {
                        selectionButtonProps.map((prop, index) => (

                            <Grid key={index} item={true}>
                                <SelectionButton info={prop} currentCategory={currentCategory}
                                                 setCurrentCategory={setCurrentCategory}/>
                            </Grid>
                        ))
                    }

                </Grid>
            )
        }
    }
);

interface IAward {
    src: string
    category: Category,
    cols?: number
}

const awards: IAward[] = [
    ///////////////////////
    // BEGIN environment //
    ///////////////////////
    {
        src: LibPic1,
        category: "environment",
    },
    {
        src: LibPic2,
        category: "environment",
    },
    {
        src: LibPic3,
        category: "environment",
    },
    {
        // 丁磊2019蓝桥省三
        src: Dl2019LanqiaoProvincalThird,
        category: "competition",
    },
    {
        src: LibPic4,
        category: "environment",
    },
    {
        src: LibPic5,
        category: "environment",
    },
    /////////////////////
    // END environment //
    /////////////////////

    ///////////////////////
    // BEGIN competition //
    ///////////////////////
    {
        // 蒋佳CCCC省三
        src: Jj2019CCCCProvincalThird,
        category: "competition",
    },
    {
        // 王钦弘2019ACM全国邀请赛铜
        src: Wqh2019ACMNationalInvitationalThird,
        category: "competition",
    },
    {
        // CCCC 竞赛证书
        src: CCCCPrizesPhoto,
        category: "competition",
    },
    {
        // 祖传Kinect
        src: KinectCsiet,
        category: "competition",
    },
    {
        // 丁磊CCCC省三
        src: DlCCCCProvincalThird,
        category: "competition",
    },
    {
        // 余以春2019ACM全国邀请赛铜
        src: YycIcpcInvitationBronze,
        category: "competition",
    },
    {
        // 王钦弘2018蓝桥省一
        src: Wqh2018LanqiaoProvincalFirst,
        category: "competition",
    },
    {
        // 王钦弘2019蓝桥省一
        src: Wqh2019LanqiaoProvincalFirst,
        category: "competition",
    },
    {
        // 丁磊2018蓝桥省二
        src: Dl2018LanqiaoProvincalSecond,
        category: "competition",
    },
    {
        // 2019ACM省赛铜证明
        src: Team2019ACMNationalHonorable,
        category: "competition",
    },
    {
        // 2019ACM全国邀请赛铜牌队伍证明
        src: Team2019ACMNationalInvitationalThird,
        category: "competition",
    },
    {
        // 2019ACM省赛铜证明
        src: Team2019ACMProvincalThird,
        category: "competition",
    },

    {
        // 蒋佳蓝桥国优
        src: Jj2019LanqiaoNationalHonorable,
        category: "competition",
    },
    {
        // 蒋佳蓝桥省一
        src: Jj2019LanqiaoProvincalThird,
        category: "competition",
    },
    {
        // 刘鑫2019蓝桥省三
        src: Lx2019LanqiaoProvincalThird,
        category: "competition",
    },
    {
        // 罗心怡2018蓝桥省二
        src: Lxy2018LanqiaoProvincalSecond,
        category: "competition",
    },
    {
        // 罗心怡CCCC省三
        src: Lxy2019CCCCProvincalThird,
        category: "competition",
    },
    {
        // 罗心怡2019蓝桥省二
        src: Lxy2019LanqiaoProvincalSecond,
        category: "competition",
    },
    {
        // 刘尹强CCCC省三
        src: Lyq2019CCCCTeamThird,
        category: "competition",
    },
    {
        // 刘尹强2019蓝桥省二
        src: Lyq2019LanqiaoSecond,
        category: "competition",
    },
    {
        // 余以春CCCC团三
        src: YycGplpBronze,
        category: "competition",
    },
    {
        // 吴文韬2019蓝桥省一
        src: Wwt2019LanqiaoProvincalFirst,
        category: "competition",
    },
    {
        // 王子涵2018蓝桥省三
        src: Wzh2018LanqiaoProvincalThird,
        category: "competition",
    },
    /////////////////////
    // END competition //
    /////////////////////

    ///////////////////////
    // BEGIN prize //
    ///////////////////////
    {
        // 王子涵，张真谦EI论文
        src: WzhZzqEiPaper,
        category: "prize",
    },
    {
        // 余以春国家奖学金
        src: YycNationalScholarship,
        category: "prize",
    },
    {
        // 罗心怡2018外研社国特
        src: LxyEnglishReadingSpecial,
        category: "prize",
    },
    {
        // 纪雨鑫2019计设三等
        src: Jyx2019CucdcThird,
        category: "prize",
    },
    {
        // 纪雨鑫2019英语国三
        src: Jyx2019NeccsSecond,
        category: "prize",
    },
    {
        // 罗心怡2018外研社省三
        src: Lxy2018FltrpProvincalThird,
        category: "prize",
    },
    {
        // 罗心怡2018NECCS国一
        src: Lxy2018NeccsNationalFirst,
        category: "prize",
    },
    {
        // 罗心怡2019NECCS国一
        src: Lxy2019NeccsNationalFirst,
        category: "prize",
    },
    {
        // 刘尹强2018数学竞赛国二
        src: Lyq2018CmathcNationalSecond,
        category: "prize",
    },
    {
        // 刘尹强2018NECCS国三
        src: Lyq2018NECCSNationalThird,
        category: "prize",
    },
    {
        // 刘尹强2019NECCS国三
        src: Lyq2019NECCSNationalThird,
        category: "prize",
    },
    {
        // 王子涵2018NECCS国二
        src: Wzh2018NECCSNationalSecond,
        category: "prize",
    },
    /////////////////////
    // END prize //
    /////////////////////

    ///////////////////
    // BEGIN photo   //
    ///////////////////
    {
        // 2019CCCC团体照片
        src: CCCCPhoto,
        category: "photo",
    },
    {
        // 2018ECFinal陈航队照片
        src: ICPC2018ECFinal,
        category: "photo",
    },
    {
        // 2018ECFinal团体照片
        src: ICPC2018ECFinalPhoto,
        category: "photo",
    },
    {
        // 2019全国邀请赛王钦弘组
        src: ICPC2019ACMNationalInvitationalThirdPhoto,
        category: "photo",
    },
    {
        // 2019ACM全国邀请赛团体照片
        src: ICPC2019ACMNationalPhoto,
        category: "photo",
    },

    {
        // 2018ECFinal现场照片
        src: ICPCECFinalContest,
        category: "photo",
    },
    {
        // 2019蓝桥省赛合照
        src: ProvincalLanqiao2019Photo,
        category: "photo",
    },
    {
        // 2019蓝桥国赛背景照片
        src: NationalLanqiao2019Photo,
        category: "photo",
    },
    {
        // 2019ACM陕西省赛团体照片
        src: ICPC2019ACMPhoto,
        category: "photo",
    },
    /////////////////
    // END photo   //
    /////////////////
];

interface IAwardsProps {
    category: Category
}

function Awards({category}: IAwardsProps) {


    return (
        <Container maxWidth={"lg"}>
            <Grid container={true} alignItems={"center"} alignContent={"center"} wrap={"wrap"} spacing={2} justify={"space-around"}>
                {
                    awards.filter(award => award.category.indexOf(category) >= 0)
                        .map(({src, cols}, index) =>
                            (
                                <Grid item={true} key={index}>
                                    <img src={src} style={{height: 240}}/>
                                </Grid>
                            )
                        )
                }
            </Grid>
        </Container>
    )
}


export default function BuildPage() {

    const [category, setCategory] = React.useState("" as Category);

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
                <Grid item={true}>
                    <Grid container={true} className={styles.root}  direction={"column"} justify={"space-between"}
                          alignItems={"center"} spacing={2}>
                        <Grid item={true}>
                            <Title/>
                        </Grid>
                        <Grid item={true}>
                            <ButtonList currentCategory={category} setCurrentCategory={setCategory}/>
                        </Grid>
                        <Grid item={true}>
                            <Awards category={category}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
