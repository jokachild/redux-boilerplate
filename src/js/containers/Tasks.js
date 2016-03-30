
import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as TodoActions from "../actions"


class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    render() {
        const { tasks, actions } = this.props;
        return (
            <div>
                Task list: {tasks.length}
                <br />
                <button onClick={this.handleAddTask}>Add</button>
                <hr/>
            </div>
        );
    }

    handleAddTask() {
        this.props.actions.addTask(this.props.tasks.length + "_");
    }
}

Tasks.propTypes = {
    tasks: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)