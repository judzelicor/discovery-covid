import { useSelector } from "react-redux";
import CountriesScroller from "./CountriesScroller";

function MobileCountriesScroller() {
    const mobileCountriesScrollerIsVisible = useSelector((state) => state.UI.mobileCountriesScrollerIsVisible);

    return (
        <>
            <div className={`mCS1 ${ mobileCountriesScrollerIsVisible ? "active" : "" }`}>
                <div className="mCS1__container">
                    <CountriesScroller />
                </div>
            </div>
        </>
    )
}

export default MobileCountriesScroller;