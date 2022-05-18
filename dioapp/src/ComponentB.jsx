import React from "react";

function ComponentB(props){
    return (
        <div>Santiago 
            <div>{props.children}</div>
        </div>
        
    );
}

export default ComponentB