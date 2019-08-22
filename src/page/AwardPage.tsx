import * as React from "react";
import Background from "../component/Background";
import BackgroundImage from "/src/assets/background/award-page-background.png"
import {Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth, {isWidthUp, WithWidth} from "@material-ui/core/withWidth";

import LxyEnglishReadingSpecial from "/src/assets/award/lxy-english-reading-special.png";
import WqhIcpcInvitaionBronze from "/src/assets/award/wqh-icpc-invitation-bronze.png";
import WzhZzqEiPaper from "/src/assets/award/wzh,zzq-ei-paper.png";
import XustIcpcBronze from "/src/assets/award/xust-icpc-bronze.png";
import XustIcpcInvitaionBronze from "/src/assets/award/xust-icpc-bronze.png";
import YycGplpBronze from "/src/assets/award/yyc-gplp-bronze.png"
import YycIcpcInvitationBronze from "/src/assets/award/yyc-icpc-invitation-bronze.png"
import YycNationalScholarship from "/src/assets/award/yyc-national-scholarship.png"
import Container from "@material-ui/core/Container";


type Category =
    | ""
    | "paper"
    | "competition"
    | "scholarship"
    | "other"

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
        label: "科技论文",
        category: "paper",
    },
    {
        label: "科技竞赛",
        category: "competition"
    },
    {
        label: "奖学金",
        category: "scholarship"
    },
    {
        label: "其他",
        category: "other"
    }

];


function Title() {
    const styles = makeStyles(theme => ({
        title: {
            fontSize: 48,
            textAlign: "center",
            [theme.breakpoints.only("xs")]: {
                fontSize: 32
            }
        }
    }))();
    return (
        <Typography color={"secondary"} className={styles.title}>成员所得部分奖项和荣誉</Typography>
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
    {
        src: WzhZzqEiPaper,
        category: "paper",
        cols: 1,
    },
    {
        src: WqhIcpcInvitaionBronze,
        category: "competition",
    },
    {
        src: YycIcpcInvitationBronze,
        category: "competition",
    },
    {
        src: XustIcpcBronze,
        category: "competition",
    },
    {
        src: XustIcpcInvitaionBronze,
        category: "competition",

    },
    {
        src: YycGplpBronze,
        category: "competition",
        cols: 1,
    },
    {
        src: YycNationalScholarship,
        category: "scholarship",
    },
    {
        src: LxyEnglishReadingSpecial,
        category: "other"
    },
];

interface IAwardsProps {
    category: Category
}

function Awards({category}: IAwardsProps) {


    return (
        <Container maxWidth={"lg"}>
            <Grid container={true} wrap={"wrap"} spacing={2} justify={"center"}>
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


export default function AwardPage() {

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
                    <Grid container={true} className={styles.root} direction={"column"} justify={"center"}
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
