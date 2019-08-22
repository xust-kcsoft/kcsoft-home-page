import * as React from "react";

interface IBackgroundProps {
    backgroundImage: string
    backgroundColor: string
    children?: React.ReactNode
}

export default function Background({backgroundImage, backgroundColor: color}: IBackgroundProps) {
    const styles: React.CSSProperties = {
        height: "100%",
        width: "100%",
        position: "fixed",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        zIndex: -5
    };
    return (
        <React.Fragment>
            <div style={
                {
                    ...styles,
                    backgroundImage: `url(${backgroundImage})`,
                    overflow: "hidden",
                }
            }/>
            <div style={
                {
                    ...styles,
                    backgroundColor: color,
                }
            }/>

        </React.Fragment>
    );
}
