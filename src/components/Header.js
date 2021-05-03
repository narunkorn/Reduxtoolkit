/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

function Header(props) {
    return (
        <div
            // style={{
            //     display: "flex",
            //     justifyContent: "space-between",
            //     alignItems: "center",
            //     padding: "0px 15px",
            //     backgroundColor: "pink",
            // }}
            css={css`
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 15px;
                background-color:green;
                
             `}

        >
            <h2>{props.title}</h2>
            {props.rightSectionItem}
        </div>
    );
}

export default Header;