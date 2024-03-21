import React from "react";

function MyList(props) {
    if (props.type === "textarea") {
        return (
            <textarea placeholder={props.name}></textarea>
        );
    } else {
        return (
            <input type={props.type} value={props.name} onClick={() => alert(props.name)} />
        );
    }
}

export default MyList;