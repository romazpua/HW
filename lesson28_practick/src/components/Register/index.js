import React from "react";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from 'yup';

class Register extends React.Component {

  state = {
    title: "Registration",
    currentStep: 1,
  }

  regiterSchema = () => Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Обязательное поле'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Z0-9]*$/, "Password must contain only latin and numbers."),
    passwordAgain: Yup.mixed().required("Password must maych")
      .oneOf([Yup.ref("password"), null], "Pussword must match"),
  });

  addStep = () => {
    this.setState(prevState => ({
      currentStep: prevState.currentStep++
    }))
  }

  render() {
    const {title, currentStep} = this.state;
    return (
      <>
        <h1>{title}</h1>
        <Formik
          initialValues={
            {
              name: '',
              email: '',
              password: '',
              passwordAgain: '',
            }
          }
          validationSchema={this.regiterSchema}
          onSubmit={(values) => {
            console.log(values)
          }}>
          {({errors, touched}) => (
            <Form noValidate>
              {/*<Field*/}
              {/*  // type="email"*/}
              {/*  // name="email"*/}
              {/*  // placeholder="Email"/>*/}

              {currentStep === 1 && (
                <div className="step step1">
                  <Field name='name'>
                    {
                      ({field}) => (
                        <TextField
                          variant={"outlined"}
                          size={"small"}
                          label='Name'
                          fullWidth
                          error={!!errors.name && !!touched.name}
                          helperText={errors.name}
                          margin={'dense'}
                          {...field}/>
                      )
                    }
                  </Field>
                  {/*<ErrorMessage name="name"/>*/}
                  <Field name='email'>
                    {
                      ({field}) => (
                        <TextField
                          variant={"outlined"}
                          size={"small"}
                          label='Email'
                          fullWidth
                          error={!!errors.email && !!touched.email}
                          helperText={(!!errors.email && !!touched.email) && errors.email}
                          margin={'dense'}
                          {...field}/>
                      )
                    }
                  </Field>
                </div>

              )}

              {currentStep === 2 && (
                <div className="step step2">
                  <Field name='password'>
                    {
                      ({field}) => (
                        <TextField
                          variant={"outlined"}
                          size={"small"}
                          label='Password'
                          fullWidth
                          error={!!errors.password && !!touched.password}
                          helperText={(!!errors.password && !!touched.password) && errors.password}
                          margin={'dense'}
                          {...field}/>
                      )
                    }
                  </Field>
                  <Field name='passwordAgain'>
                    {
                      ({field}) => (
                        <TextField
                          variant={"outlined"}
                          size={"small"}
                          label='Password again'
                          fullWidth
                          error={!!errors.passwordAgain && !!touched.passwordAgain}
                          helperText={(!!errors.passwordAgain && !!touched.passwordAgain) && errors.passwordAgain}
                          margin={'dense'}
                          {...field}/>
                      )
                    }
                  </Field>
                </div>
              )}

              {currentStep !== 2
                ? (
                  <Button
                    onClick={this.addStep}
                variant={"contained"}
                fullWidth
                color={"secondary"}>Далее</Button>
                )
                : (
                <Button variant={"contained"}
                fullWidth
                color={"primary"}
                type='submit'>Регистрация</Button>
                )
              }
            </Form>
          )}
        </Formik>
      </>
    )
  }
}

export default Register;