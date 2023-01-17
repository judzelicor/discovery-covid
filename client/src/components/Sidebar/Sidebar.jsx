import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg"
import { CountriesScroller } from "../CountriesScoller";
import { connect } from "react-redux";
import axios from "axios";
import "./Sidebar.css";

class Sidebar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(aspect, statistic) {
        const {
            active_statistic,
            updateOrder,
            orderBy,
            updateActiveStatistic,
        } = this.props;

        switch(aspect) {
            case "statistic":
                if (statistic === active_statistic) return;

                const statistic_displays = {
                    total_cases: "Total Cases",
                    total_vaccinations: "Vaccinations",
                    total_deaths: "Deaths",
                    total_recoveries: "Recoveries"
                }

                axios({
                    method: "GET",
                    url: `/api/v1/countries/${ statistic }`,
                })
                .then(response => {
                    const { updateCountries } = this.props;
                    
                    updateCountries(response.data.countries);

                    updateActiveStatistic({
                        active_statistic: statistic, 
                        active_statistic_display: statistic_displays[statistic]
                    });
                })
        

                return;

            // case "orderBy":
            //     if (orderBy === "DESC") {
            //         updateOrder("ASC")
            //         axios({
            //             method: "GET",
            //             url: `/api/countries/${ active_statistic }/ASC`,
            //         })
            //         .then(response => {
            //             const { updateCountries } = this.props;
                        
            //             updateCountries(response.data.countries);
            //         })
            //     }

            //     else {
            //         updateOrder("DESC")
            //         const { active_statistic, orderBy } = this.props;
            //         axios({
            //             method: "GET",
            //             url: `/api/v1/countries/${ active_statistic }/DESC`,
            //         })
            //         .then(response => {
            //             const { updateCountries } = this.props;
                        
            //             updateCountries(response.data.countries);
            //         })
            //     }

                return;
        }
    }

    render() {
        const {
            active_statistic_display,
            orderBy,
            newSearchQuery,
            query_string
        } = this.props;

        return (
            <React.Fragment>
                <div className="sidebar">
                    <div className="sidebarContainer">
                        <div className="sidebarGroup">
                            <header className="sidebarHeader">
                                <div className="logoContainer">
                                    <a href="/">
                                        <Logo />
                                    </a>
                                </div>
                                <div className="sidebarMenuIcon">
                                    <MenuIcon />
                                </div>
                            </header>
                            <div className="buttonsContainer">
                                <ul className="buttonsList">
                                    <li className="sidebarInteractiveItem">
                                        <button className="sidebarButton">
                                            <div className="globeIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M256 512c140.959 0 256-115.049 256-256C512 115.04 396.951 0 256 0 115.041 0 0 115.049 0 256c0 140.96 115.049 256 256 256zm75.947-43.143c14.505-18.535 25.623-40.643 33.974-62.867h58.966c-24.986 28.11-56.854 49.952-92.94 62.867zM447.423 376h-71.804c8.852-32.188 14.045-67.876 15.149-105h90.722c-2.528 38.388-14.68 74.185-34.067 105zm0-240c19.387 30.815 31.539 66.612 34.067 105h-90.722c-1.104-37.124-6.297-72.812-15.149-105zm-22.537-30H365.92c-8.348-22.205-19.465-44.316-33.974-62.857C368.033 56.058 399.901 77.9 424.886 106zM271 32.566c29.436 9.977 50.553 44.985 62.631 73.434H271zM271 136h73.427c9.538 31.578 15.149 67.403 16.33 105H271zm0 134.99h89.757c-1.181 37.607-6.792 73.432-16.33 105.01H271zm0 135h62.631c-12.098 28.507-33.219 63.476-62.631 73.444zM87.114 406h58.966c8.348 22.205 19.465 44.316 33.974 62.857-36.087-12.914-67.955-34.757-92.94-62.857zM241 479.434c-29.411-9.968-50.531-44.933-62.631-73.434H241zM241 376h-73.427c-9.538-31.578-15.149-67.403-16.33-105H241zm0-135h-89.757c1.181-37.597 6.792-73.422 16.33-105H241zm0-208.434V106h-62.631C190.468 77.502 211.587 42.535 241 32.566zm-60.947 10.577C165.548 61.678 154.431 83.785 146.079 106H87.114c24.985-28.1 56.853-49.943 92.939-62.857zM64.577 135.99h71.804c-8.852 32.198-14.045 67.886-15.149 105.01H30.51c2.528-38.388 14.68-74.185 34.067-105.01zM30.51 271h90.722c1.104 37.124 6.297 72.812 15.149 105H64.577C45.19 345.185 33.038 309.388 30.51 271z" />
                                                </svg>
                                            </div>
                                            <span className="sidebarButtonText">World</span>
                                        </button>
                                    </li>
                                    <li className="sidebarInteractiveItem">
                                        <div className="searchCountryForm">
                                            <div className="searchIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.35 6.35">
                                                    <path d="M2.894.511a2.384 2.384 0 0 0-2.38 2.38 2.386 2.386 0 0 0 2.38 2.384c.56 0 1.076-.197 1.484-.523l.991.991a.265.265 0 0 0 .375-.374l-.991-.992a2.37 2.37 0 0 0 .523-1.485A2.387 2.387 0 0 0 2.894.51zm0 .53c1.026 0 1.852.825 1.852 1.85a1.851 1.851 0 1 1-3.703.002c0-1.026.825-1.852 1.851-1.852z" />
                                                </svg>
                                            </div>
                                            <input value={ query_string } onKeyUp={(event) => newSearchQuery(event.target.value)} className="searchBarInput" type={"text"} placeholder="Lookup country" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="buttonsContainer">
                                <ul className="buttonsList">
                                    <li className="sidebarInteractiveItem">
                                        <button
                                            onClick={() => this.handleClick("orderBy")}
                                            className="sidebarButton orderByButton"
                                        >
                                            <div className="orderIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.843 31.842">
                                                    <path d="M31.843 7.546a1.45 1.45 0 0 0-1.453-1.475h-6.396a.447.447 0 0 0-.314.763l1.233 1.232a1.033 1.033 0 0 1 .001 1.464l-6.26 6.257a1.368 1.368 0 0 1-1.939 0l-4.039-4.039a1.271 1.271 0 0 0-1.801 0L.372 22.245a1.278 1.278 0 0 0 0 1.803L1.726 25.4a1.277 1.277 0 0 0 1.8.002l7.277-7.276a1.373 1.373 0 0 1 1.94 0l3.968 3.969c.258.256.605.399.971.399s.715-.146.973-.399l9.416-9.417a1.032 1.032 0 0 1 1.461.001l1.453 1.457a.447.447 0 0 0 .763-.308l.095-6.282z" />
                                                </svg>
                                            </div>
                                            <span className="sidebarButtonText">{ orderBy.toLowerCase() }</span>
                                        </button>
                                    </li>
                                    <li className="sidebarInteractiveItem filterButton">
                                        <button className="sidebarButton">
                                            <div className="filterIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M9 21v-7.685L2.18 3.573A1 1 0 0 1 3 2h18a1 1 0 0 1 .82 1.573L15 13.315V18.5a1.001 1.001 0 0 1-.47.848l-4 2.5A1.001 1.001 0 0 1 9 21ZM4.92 4l5.9 8.427A1.002 1.002 0 0 1 11 13v6.196l2-1.25V13a1.002 1.002 0 0 1 .18-.573L19.08 4Z" />
                                                </svg>

                                            </div>
                                            <span className="sidebarButtonText">{ active_statistic_display }</span>
                                        </button>
                                        <div className="dropdown">
                                            <ul className="dropdownBody">
                                                <li 
                                                    className="dropdownItem" 
                                                    onClick={() => {
                                                        this.handleClick("statistic", "total_cases")
                                                    }}
                                                >
                                                    <button
                                                        className="dropdownSelectButton"
                                                    >
                                                        <span>Total Cases</span>
                                                    </button>
                                                </li>
                                                <li 
                                                    className="dropdownItem"
                                                    onClick={() => {
                                                        this.handleClick("statistic", "total_vaccinations")
                                                    }}
                                                >
                                                    <button className="dropdownSelectButton">
                                                        <span>Vaccinations</span>
                                                    </button>
                                                </li>
                                                <li 
                                                    className="dropdownItem"
                                                    onClick={() => {
                                                        this.handleClick("statistic", "total_recoveries")
                                                    }}
                                                >
                                                    <button className="dropdownSelectButton">
                                                        <span>Recoveries</span>
                                                    </button>
                                                </li>
                                                <li 
                                                    className="dropdownItem"
                                                    onClick={() => {
                                                        this.handleClick("statistic", "total_deaths")
                                                    }}
                                                >
                                                    <button className="dropdownSelectButton">
                                                        <span>Deaths</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: "350px", overflowX: "hidden", overflowY: "scroll" }}>
                            <CountriesScroller />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    const { 
        active_statistic,
        active_statistic_display,
        orderBy,
        query_string
    } = state.countryStatistics;
    return {
        query_string,
        orderBy,
        active_statistic,
        active_statistic_display
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateActiveStatistic: (payload) => dispatch({ type: "UPDATE@STATISTIC", payload: payload }),
        updateOrder: (payload) => dispatch({ type: "UPDATE@ORDER", payload: payload }),
        updateCountries: (payload) => dispatch({ type: "UPDATE@COUNTRIES", payload: payload }),
        newSearchQuery: (payload) => dispatch({type: "NEW@SEARCH_QUERY", payload: payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);