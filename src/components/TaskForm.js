import React from "react";
import { Formik, FormikProps, Form, Field } from "formik";
import { createTask } from "../providers/task";

export default class TaskForm extends React.Component {
  handleSubmit = async form => {
    try {
      const result = await createTask({ ...form });

      this.getAllTask();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const style = {
      formTask: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "700px",
        margin: "0px auto",
        height: "400px",
        backgroundColor: "#eee"
      },
      taskInput: {
        alignItems: "center",
        width: "700px",
        margin: "10px 0",
        height: "60px"
      },
      taskDescription: {
        alignItems: "center",
        width: "700px",
        padding: "20px",
        margin: "5px 0",
        height: "200px"
      },
      container: {
        marginTop: "10px"
      },
      buttonSubmit: {
        margin: "20px auto",
        backgroundColor: "#03a9f4",
        height: "60px",
        width: "400px",
        borderRadius: "10px",
        textAlign: "center",
        color: "#fff"
      },
      title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "arial",
        marginTop: "20px"
      }
    };
    return (
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: !this.props.isUpdate ? "" : this.props.updateData.name,
          description: !this.props.isUpdate
            ? ""
            : this.props.updateData.description
        }}
        validate={values => {
          let errors = [];

          //check if my values have errors
          return errors;
        }}
        onSubmit={form => {
          this.props.handleSubmit({ ...form });
        }}
        render={formProps => {
          return (
            <div style={style.container}>
              <Form style={style.formTask}>
                <h3 style={style.title}>DAILY TASK</h3>
                <Field
                  style={style.taskInput}
                  className="form-control"
                  name="name"
                  placeholder="Task Name"
                />
                <Field
                  style={style.taskDescription}
                  component="textarea"
                  className="form-control"
                  name="description"
                  placeholder="Task Description"
                />

                <button style={style.buttonSubmit} type="submit">
                  {this.props.isUpdate ? "Update" : "Submit"}
                </button>
              </Form>
            </div>
          );
        }}
      />
    );
  }
}
