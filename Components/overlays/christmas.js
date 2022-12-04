import React from "react";
import Snowfall from 'react-snowfall'

React.useLayoutEffect = React.useEffect

function Christmas({  }) {
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Snowfall
                snowflakeCount={100}
                color="#C4C4C4AA"
            />
        </div>
    )
}

export default Christmas;
