import React from "react";
import decode from "jwt-decode";

export default class TaskList extends React.Component {
  state = {
    taskList: [],
    name: "",
    description: "",
    isUpdate: false
  };

  handleDelete = async id => {
    this.props.handleDelete(id);
  };

  handleUpdate = data => {
    this.props.handleUpdate(data);
  };

  render() {
    const style = {
      cardBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "1000px",
        height: "130px",
        padding: "20px 20px",
        margin: "40px 20px"
      },
      cardNext: {
        margin: "30px 0"
      },
      button: {
        display: "flex",
        justifyContent: "row",
        margin: "10px 20px"
      },
      updateButton: {
        margin: "20px 20px 0 0",
        backgroundColor: "#03a9f4",
        height: "40px",
        width: "100px",
        textAlign: "center",
        color: "#fff"
      },
      deleteButton: {
        margin: "20px 20px 0 0",
        backgroundColor: "red",
        height: "40px",
        width: "100px",
        textAlign: "center",
        color: "#fff"
      }
    };
    return (
      <React.Fragment>
        {this.props.taskList.map((item, index) => (
          <div class="container">
            <div class="card" style={style.cardNext}>
              <div class="card-body" style={style.cardBody}>
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
                <div>
                  {!this.props.isManager && (
                    <a
                      style={style.updateButton}
                      href="#"
                      class="btn btn-primary"
                      onClick={() => this.handleUpdate(item)}
                    >
                      Update
                    </a>
                  )}
                  {!this.props.isManager && (
                    <a
                      style={style.deleteButton}
                      href="#"
                      class="btn btn-danger"
                      onClick={() => this.handleDelete(item._id)}
                    >
                      Delete
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
