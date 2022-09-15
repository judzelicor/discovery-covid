import React from "react";
import InformationBar from "./InformationBar";
import Topbar from "./Topbar";
import "./ControlBar.css";

class ControlBar extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className="controlBar">
                    <div className="controlBarWrapper">
                        <Topbar />
                        <InformationBar />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ControlBar;