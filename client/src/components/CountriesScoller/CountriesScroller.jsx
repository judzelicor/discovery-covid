import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addCommaSeparator } from "../../util/numbers";
import "./CountriesScroller.css";

class CountriesScroller extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { 
            active_statistic,
            orderBy
         } = this.props;

        axios({
            method: "GET",
            url: `/api/v1/countries/${ active_statistic }/${ orderBy }`,
        })
        .then(response => {
            const { updateCountries } = this.props;
            console.log(response.data)
            updateCountries(response.data);
        })
    }

    render() {
        const { 
            countries,
            query_string,
            active_statistic
        } = this.props;

        console.log(query_string)

        if (countries && countries.length > 0) {
            return (
                <React.Fragment>
                    <div className="countriesContainer">
                        <header className="countriesListHeader">
                            <div className="locationPinIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0C7.038 0 3 4.066 3 9.065c0 7.103 8.154 14.437 8.501 14.745a.749.749 0 0 0 .998.001C12.846 23.502 21 16.168 21 9.065 21 4.066 16.962 0 12 0zm0 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
                                </svg>
                            </div>
                            <h2 className="countryListHeaderTitle">Locations</h2>
                        </header>
                        <div className="countriesWrapper">
                            <ul className="countriesList">
                                {
                                    countries.map((country, index) => {
                                        if (country.name.toLowerCase().includes(query_string.toLowerCase())) {
                                            return (
                                                <li className="countryListItem" key={ country.id }>
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <div className="countryRank">{ index + 1 }</div>
                                                            <div className="countryFlag">
                                                                <img src={`${country.flag}`} />
                                                            </div>
                                                        </div>
                                                        <div className="countryName">
                                                            <h3>{country.name}</h3>
                                                        </div>
                                                    </div>
                                                    <div className={`activeStatisticValue ${ active_statistic }`}>
                                                        <p>{ addCommaSeparator(country[active_statistic]) }</p>
                                                    </div>
                                                </li>
                                            )
                                        }
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
        active_statistic, 
        orderBy,
        countries,
    } = state.countryStatistics;

    const { query_string } = state.searchQuery

    return {
        active_statistic,
        orderBy,
        countries,
        query_string
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCountries: (payload) => dispatch({ type: "UPDATE@COUNTRIES", payload: payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesScroller);