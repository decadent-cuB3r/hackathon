import firebase from "firebase/app";
import "firebase/auth";
import React, {useContext, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { loginToFirebase } from '../actions'
import { StoreContext } from "../store"

export default function ProfileInfo() {
  const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await loginToFirebase(dispatch, values);
  };


  //email
  // firebase.auth()
  // .signInWithEmailAndPassword(email, password)
  // .then(result => {
  //   console.log(result);
  // })
  // .catch(error => {
  // 	console.log(error.message);
  // });

  // const onChange = e => {
  //   rememberLoginUser(dispatch, e.target.checked);
  // }

  // useEffect(() => {
  //   if(userInfo) history.push(redirect);
  // }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="profileInfo">
      {/* <Form
        name="normal_login"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <label>帳號：</label>
          <Input
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <label className="formLogin-label">密碼：</label>
          <Input
            type="password"
            placeholder=" "
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <label className="formLogin-label">再次輸入密碼：</label>
          <Input
            type="password"
            placeholder=" "
          />
        </Form.Item>
        <div className="registerForm-form-buttonDiv">
          <Form.Item>
                <Button
                type="primary"
                htmlType="submit"
                className="registerForm-form-button"
                // loading
              >
                更新個人資料
              </Button>
          </Form.Item>
        </div>
      </Form> */}
    </div>
  );
};
