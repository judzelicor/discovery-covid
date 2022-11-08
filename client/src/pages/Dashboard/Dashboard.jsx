import React from "react";
import { 
    Sidebar,
    Map,
    MobileCountriesScroller
} from "../../components";
import "./Dashboard.css";
import axios from "axios";
import { connect } from "react-redux";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            world_statistics: []
        };
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "/api/statistics/world",
        }).then(response => {
            console.log(response.data)
            const { loadWorldSummaryStatistics } = this.props;

            loadWorldSummaryStatistics(response.data.summary)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="dashboardGrid">
                    <Sidebar />
                    <Map />
                    <MobileCountriesScroller />
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        loadWorldSummaryStatistics: (summary) => dispatch({ type: "UPDATE@WORLD_SUMMARY_STATISTICS", payload: summary })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);