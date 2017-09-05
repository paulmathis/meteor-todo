import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";

import { Tasks } from "../api/tasks.js";
//Task component - represents a single todo item
class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call(
      "tasks.setChecked",
      this.props.task._id,
      !this.props.task.checked
    );
  }

  deleteThisTask() {
    Meteor.call("tasks.remove", this.props.task._id);
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? "checked" : "";

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          checked={this.props.task.checked}
          onChange={this.toggleChecked.bind(this)}
        />

        <span className="text">
          <strong>{this.props.task.username}</strong>
          : {this.props.task.text}
        </span>
      </li>
    );
  }
}

Task.propTypes = {
  // This component gets teh task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired
};

export default Task;
