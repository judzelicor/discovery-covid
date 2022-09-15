import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { connect } from "react-redux";
import "./Topbar.css";
import { Filter } from "../Interactives";

class Topbar extends React.PureComponent {
    render() {
        const {
            toggleMobileCountriesScroller,
            newSearchQuery,
            toggleMobileFilter,
            mobileFilterIsVisible
        } = this.props;
        console.log(mobileFilterIsVisible)
        return (
            <React.Fragment>
                <div className="topbar">
                    <header className="topbarContainer">
                        <div className="gtp1__logo">
                            <a href="/">
                                <img src="/assets/logo.png" />
                            </a>
                        </div>
                        <div className="menu">
                            <ul className="menuList">
                                <li className="menuListItem">
                                    <div className="controlMenuLink">
                                        <div className="shareIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M406 332c-29.636 0-55.969 14.402-72.378 36.571l-141.27-72.195A89.738 89.738 0 0 0 196 271a89.51 89.51 0 0 0-6.574-33.753l148.06-88.958C354.006 167.679 378.59 180 406 180c49.626 0 90-40.374 90-90S455.626 0 406 0s-90 40.374-90 90a89.54 89.54 0 0 0 6.09 32.54l-148.43 89.18C157.152 192.902 132.941 181 106 181c-49.626 0-90 40.374-90 90s40.374 90 90 90c30.122 0 56.832-14.876 73.177-37.666l140.86 71.985A89.702 89.702 0 0 0 316 422c0 49.626 40.374 90 90 90s90-40.374 90-90-40.374-90-90-90zm0-302c33.084 0 60 26.916 60 60s-26.916 60-60 60-60-26.916-60-60 26.916-60 60-60zM106 331c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60zm300 151c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60z" />
                                            </svg>
                                        </div>
                                        <a href="#">Share</a>
                                    </div>
                                </li>
                                <li className="menuListItem">
                                    <div className="controlMenuLink">
                                        <div className="donateIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -24 511.999 511">
                                                <path d="M50 262.598c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 0" />
                                                <path d="m459.617 297.273-94.273 32.41c.418-2.32.652-4.687.652-7.09 0-22.054-17.941-40-40-40h-64.758c-1.718 0-3.414-.44-4.91-1.284l-52.832-29.715a70.059 70.059 0 0 0-34.328-9h-70.89C94.151 230.957 83.034 222.598 70 222.598H10c-5.523 0-10 4.476-10 10v179.996c0 5.523 4.477 10 10 10h60c12.738 0 23.66-8.004 27.996-19.246 11.32 1.406 24.418 4.754 32.649 9.691l52.296 31.379a127.509 127.509 0 0 0 65.606 18.176c18.312 0 36.055-3.844 52.738-11.422l186.645-82.184c20.672-8.386 30.879-33.187 19.062-55.047-8.691-16.086-29.047-23.242-47.375-16.668zM80 392.641c-.023 5.492-4.504 9.953-10 9.953H20V242.598h50c5.512 0 10 4.484 10 10zm400.332-42.149c-.105.04-.21.086-.316.13l-186.957 82.32c-14.082 6.406-29.059 9.652-44.512 9.652a107.48 107.48 0 0 1-55.313-15.324l-52.3-31.38c-11.196-6.714-27.227-10.808-40.934-12.449V262.598h69.168a50.029 50.029 0 0 1 24.52 6.425l52.832 29.715a30.045 30.045 0 0 0 14.718 3.86h64.758c11.027 0 20 8.968 20 20 0 10.988-8.976 20-20 20H224.34c-5.524 0-10 4.476-10 10 0 5.52 4.476 9.996 10 9.996h101.656a39.922 39.922 0 0 0 18.746-4.684l121.59-41.797c8.961-3.234 19.094-.015 23.066 7.336 5.957 11.02 1.032 23-9.066 27.043zM291.246 243.055c1.883 1.629 4.215 2.441 6.55 2.441s4.673-.812 6.552-2.441c81.59-70.711 132.058-106.496 132.058-162.106C436.406 36.957 405.262.5 361.508.5c-28.735 0-50.738 16.563-64.91 41.418C282.457 17.118 260.477.5 231.699.5c-33.496 0-61.5 21.707-71.344 55.297-1.554 5.3 1.485 10.855 6.786 12.41 5.3 1.555 10.855-1.484 12.406-6.785C186.832 36.562 207.3 20.5 231.699 20.5c28.528 0 48.54 25.332 55.262 48.918a9.999 9.999 0 0 0 19.273 0c.137-.488 14.028-48.918 55.274-48.918 31.297 0 54.898 25.984 54.898 60.45 0 44.484-43.484 76.554-118.617 141.335-45.777-39.312-82.14-66.984-102.809-94.055-3.351-4.39-9.625-5.234-14.015-1.882-4.39 3.351-5.23 9.625-1.883 14.02 23.297 30.51 62.625 59.745 112.164 102.687zm0 0" />
                                                <path d="M169 88.598c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 0" />
                                            </svg>
                                        </div>
                                        <a href="#">Donate</a>
                                    </div>
                                </li>
                                <li className="menuListItem">
                                    <div className="controlMenuLink">
                                        <div className="starIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 511.987 511">
                                                <path d="M114.594 491.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 214.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 17.027C235.277 6.98 245.089.492 255.992.492s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 312.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 39.895 200.844 168.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 198.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0" />
                                            </svg>
                                        </div>
                                        <a href="#">Star</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </header>
                </div>

                {/* Mobile Menu */}
                <div className="x7gH">
                    <div className="x7gH__container">
                        <div className="x7gH__group">
                            <div className="x7gH__logo">
                                <a href="/">
                                    <img src="/assets/logo.png" />
                                </a>
                            </div>
                            <div className="x7gH__inputEntity">
                                <div className="x7gH__searchIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.35 6.35">
                                        <path d="M2.894.511a2.384 2.384 0 0 0-2.38 2.38 2.386 2.386 0 0 0 2.38 2.384c.56 0 1.076-.197 1.484-.523l.991.991a.265.265 0 0 0 .375-.374l-.991-.992a2.37 2.37 0 0 0 .523-1.485A2.387 2.387 0 0 0 2.894.51zm0 .53c1.026 0 1.852.825 1.852 1.85a1.851 1.851 0 1 1-3.703.002c0-1.026.825-1.852 1.851-1.852z" />
                                    </svg>
                                </div>
                                <input onKeyUp={(event) => newSearchQuery(event.target.value)} onFocus={() => toggleMobileCountriesScroller(true)} className="x7gH__input" type={"text"} placeholder={"Lookup country"} />
                            </div>
                            <div className="x7gH__filterToggle" onClick={() => toggleMobileFilter(!mobileFilterIsVisible) }>
                                <span>FILTER</span>
                            </div>
                        </div>
                        <div className="x7gH__menuIcon">
                            <MenuIcon />
                        </div>
                    </div>
                    <div className={`x7gH__searchFilterContainer ${ mobileFilterIsVisible ? "active" : "" }`}>
                        <Filter />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    const { mobileFilterIsVisible } = state.UI;

    return {
        mobileFilterIsVisible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMobileCountriesScroller: (payload) => dispatch({ type: "TOGGLE@MOBILE_COUNTRIES_SCROLLER", payload: payload }),
        newSearchQuery: (payload) => dispatch({ type: "NEW@SEARCH_QUERY", payload: payload }),
        toggleMobileFilter: (payload) => dispatch({ type: "TOGGLE@MOBILE_FILTER", payload: payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);