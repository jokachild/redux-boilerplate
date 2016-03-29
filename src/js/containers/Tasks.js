
import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as TodoActions from "../actions"


class Tasks extends React.Component {
    render() {
        const { tasks, actions } = this.props;
        return (
            <div>
                Task list: {tasks.length}
                <br/>
                <button onClick={actions.addTask}>Add</button>
                <br />
                <button onClick={this.handleAddTask.bind(this)}>Add</button>
            </div>
        );
    }

    handleAddTask() {
        this.props.actions.addTask(this.props.tasks.length + "_");
    }

    shouldComponentUpdate() {
        return true;
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