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

      <div className="porfileInfo-">
        <form id="form" className="messageForm">
          <input id="email" placeholder="e-mail..."/>
          <input id="email" placeholder="e-mail..."/>
          <input id="email" placeholder="e-mail..."/>
          <input id="email" placeholder="e-mail..."/>
          <textarea id="message" placeholder="write something..." />
        </form>
      </div>
    </div>
  );
};
