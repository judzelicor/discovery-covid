function Filter() {
    return (
        <>
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
                                            <span className="sidebarButtonText">Desc</span>
                                        </button>
                                    </li>
                    <li className="sidebarInteractiveItem filterButton">
                        <button className="sidebarButton">
                            <div className="filterIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M9 21v-7.685L2.18 3.573A1 1 0 0 1 3 2h18a1 1 0 0 1 .82 1.573L15 13.315V18.5a1.001 1.001 0 0 1-.47.848l-4 2.5A1.001 1.001 0 0 1 9 21ZM4.92 4l5.9 8.427A1.002 1.002 0 0 1 11 13v6.196l2-1.25V13a1.002 1.002 0 0 1 .18-.573L19.08 4Z" />
                                </svg>

                            </div>
                            <span className="sidebarButtonText">Total Cases</span>
                        </button>
                        <div className="dropdown">
                            <ul className="dropdownBody">
                                <li
                                    className="dropdownItem"
                                >
                                    <button
                                        className="dropdownSelectButton"
                                    >
                                        <span>Total Cases</span>
                                    </button>
                                </li>
                                <li
                                    className="dropdownItem"
                                >
                                    <button className="dropdownSelectButton">
                                        <span>Vaccinations</span>
                                    </button>
                                </li>
                                <li
                                    className="dropdownItem"
                                >
                                    <button className="dropdownSelectButton">
                                        <span>Recoveries</span>
                                    </button>
                                </li>
                                <li
                                    className="dropdownItem"
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
        </>
    )
}

export default Filter;