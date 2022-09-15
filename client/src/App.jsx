import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { 
    Dashboard
} from "./pages";
import { store } from "./state/store";
import { Provider } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={ store }>
                    <Routes>
                        <Route path={ "/" } element={ <Navigate to={ "/worldview" } /> } />
                        <Route path={ "/worldview" } element={ <Dashboard /> } />
                    </Routes>
                </Provider>
            </React.Fragment>
        )
    }
}

export default App;