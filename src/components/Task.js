import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import decode from "jwt-decode";

import { createTask, getAllTask, putTask, deleteTask } from "../providers/task";

export default class Task extends React.Component {
  state = {
    isUpdate: false,
    taskList: [],
    currentTask: {},
    isManager: false
  };

  componentDidMount() {
    if (!localStorage.getItem("AUTH_TOKEN")) {
      return this.props.history.push("/");
    }

    const decodedToken = decode(localStorage.getItem("AUTH_TOKEN"));

    this.setState({
      isManager: decodedToken.isManager
    });

    this.getAllTask();
  }

  getAllTask = async () => {
    try {
      const taskList = await getAllTask();

      this.setState({
        taskList: taskList.data.data
      });
    } catch (e) {
      console.log(e);
    }
  };

  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  handleSubmit = async ({ name, description }) => {
    if (!this.state.isUpdate) {
      try {
        const result = await createTask({ name, description });

        this.getAllTask();
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const { _id: id } = this.state.currentTask;

        const result = await putTask({ id, name, description });

        this.setState({
          isUpdate: false
        });
        this.getAllTask();
      } catch (e) {
        console.log(e);
      }
    }
  };

  handleUpdate = async data => {
    this.setState({
      currentTask: data,
      isUpdate: true
    });
  };

  handleDelete = async id => {
    try {
      const result = await deleteTask(id);

      this.getAllTask();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const style = {
      buttonLogout: {
        display: "flex",
        justifyContent: "center",
        margin: "30px auto",
        backgroundColor: "#f50057",
        height: "60px",
        width: "400px",
        borderRadius: "10px",
        textAlign: "center",
        color: "#fff"
      }
    };
    return (
      <div>
        {!this.state.isManager && (
          <TaskForm
            handleSubmit={this.handleSubmit}
            isUpdate={this.state.isUpdate}
            updateData={this.state.currentTask}
            isManager={this.state.isManager}
          />
        )}

        <TaskList
          taskList={this.state.taskList}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
          isManager={this.state.isManager}
        />
        <button style={style.buttonLogout} onClick={this.logout}>
          logout
        </button>
      </div>
    );
  }
}
