
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions/settings";


class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { settings } = this.props;
        return (
            <div>
                Settings: {settings.mode}
                <br />
                <button onClick={this.handleChange}>Change</button>
                <hr/>
            </div>
        );
    }

    handleChange() {
        let mode = this.props.settings.mode;
        this.props.actions.changeMode(mode === "dev" ? "prod" : "dev");
    }

}

Settings.propTypes = {
    settings: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);