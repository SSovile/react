import React from "react";

const style = {
    backgroundColor: "var(--main-bg)",
    colo: "var(--txt-color)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

function Footer(){
    return (
        <footer style={style}>
            Copyright © 2006-2021 SHOP INC. All Rights Reserved.
            
        </footer>
    )
}

export default Footer;