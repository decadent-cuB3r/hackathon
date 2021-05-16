import firebase from "firebase/app";
import "firebase/auth";
import React, {useContext, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col } from 'antd';
import { loginToFirebase } from '../actions'
import { StoreContext } from "../store"

const { TextArea } = Input;

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
        className="profileInfo-form"
        name="normal_login"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Row>
          <Col md={11}>
            <label>姓名</label>
            <Form.Item
              name="name"
            >
              <Input/>
            </Form.Item>
          </Col>
          <Col md={11} offset={2}>
            <label className="formLogin-label">暱稱</label>
            <Form.Item
              name="string"
            >
              <Input
                type="password"
              />
            </Form.Item>
          </Col>
        </Row>
        <label className="formLogin-label">電子郵件</label>
        <Form.Item
          name="email"
        >
          <Input
            type="email"
          />
        </Form.Item>
        <label className="formLogin-label">地址</label>
        <Form.Item
          name="address"
        >
          <Input
            type="string"
          />
        </Form.Item>
        <label className="formLogin-label">個人簡介</label>
        <TextArea
          className="profileInfo-textarea"
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
        <div className="profileInfo-form-buttonDiv">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="profileInfo-form-button"
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
