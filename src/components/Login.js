import React from "react";
import { Formik, Form, Field } from "formik";
import { login } from "../providers/login";
import { directive } from "@babel/types";

export default class Login extends React.Component {
  handleSubmit = async form => {
    try {
      const result = await login({ ...form });

      localStorage.setItem("AUTH_TOKEN", result.data.token);

      this.props.history.push("/task");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const style = {
      formLogin: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        margin: "auto",
        border: "1px solid #ddd",
        height: "350px",
        backgroundColor: "#fff"
      },
      formInput: {
        alignItems: "center",
        width: "400px",
        padding: "20px",
        margin: "20px 0",
        borderRadius: "20px",
        height: "60px"
      },
      buttonLogin: {
        margin: "30px auto",
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
      },
      container: {
        paddingTop: "200px"
      }
    };

    return (
      <Formik
        style={style.container}
        initialValues={{
          username: "",
          password: ""
        }}
        validate={values => {
          let errors = [];

          //check if my values have errors
          return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return (
            <div style={style.container}>
              <Form className="form-login" style={style.formLogin}>
                <div>
                  <h3 style={style.title}>SIGNIN</h3>
                  <Field
                    style={style.formInput}
                    className="form-control"
                    name="username"
                    placeholder="username"
                  />
                  <Field
                    style={style.formInput}
                    className="form-control"
                    name="password"
                    placeholder="password"
                    type="password"
                  />

                  <button style={style.buttonLogin} type="submit" btn-primary>
                    Login
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      />
    );
  }
}
