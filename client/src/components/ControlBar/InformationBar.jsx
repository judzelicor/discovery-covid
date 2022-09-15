import React from "react";
import "./InformationBar.css";
import { connect } from "react-redux";
import { addCommaSeparator } from "../../util/numbers";

class InformationBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(statistic) {
        const { setActiveStatistic } = this.props;
        
        setActiveStatistic(statistic);
    }

    render() {
        const {
            active,
            summary
        } = this.props;

        if (summary && summary.length > 0) {
            return (
                <React.Fragment>
                    <div className="informationbar">
                        <div className="informationbarWrapper">
                            <ul className="cases">
                                {
                                    summary.map(statistic => {
                                        return (
                                            <li className={`caseItem ${ statistic.css_classname } ${ active === statistic.statistic && "active" }`}>
                                                <button className="statisticButton" onClick={ () => { this.handleClick(statistic.statistic) } }>
                                                    <div className="caseCard">
                                                        <div>
                                                            <span className={ `totalCount` }>{ addCommaSeparator(statistic.value) }</span>
                                                            <h3 className="caseCardTitle">{ statistic.title }</h3>
                                                        </div>
                                                    </div>
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
            )

        }

    }
}

function mapStateToProps(state) {
    const { 
        active,
        summary
    } = state.worldStatistics;

    return {
        active,
        summary
    }
}

function mapStateToDispatch(dispatch) {
    return {
        setActiveStatistic: (statistic) => dispatch({ type: "SET@ACTIVE_STATISTIC", payload: statistic })
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(InformationBar); 