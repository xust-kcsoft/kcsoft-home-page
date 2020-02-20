import * as React from "react";

class Footer extends React.Component {
    public render() {
        return <div style={{
            backgroundColor: "transparent",
            textAlign: "center",
            marginTop: 5,
            paddingBottom: 10
        }}>
            <img style={{
                verticalAlign: "text-bottom",
                display: "inline-block"
            }}
                 src="https://www.wqh4u.cn/uploads/beian.png"
                 alt="beian"/>
            <a style={{
                textDecoration: "underline",
                marginLeft: 10,
                color: "white"
            }}
               href="http://www.beian.miit.gov.cn/"
               rel="noopener"
               target="_blank"
            >陕ICP备 19005593号-3 </a>
        </div>;
    }
}

export default Footer;
