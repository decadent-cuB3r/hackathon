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

  return (
    <div className="profileInfo">
      <h1 className="loginForm-title">個人資料</h1>
      <p>跟大家介紹你自己吧！</p>
      <div className="porfileInfo-colorBlock"></div>

      <Form
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
          <label>姓名：</label>
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
          <label className="formLogin-label">暱稱：</label>
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
          <label className="formLogin-label">電子郵件</label>
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
          <label className="formLogin-label">地址</label>
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
          <label className="formLogin-label">個人簡介</label>
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
      </Form>
    </div>
  );
};
