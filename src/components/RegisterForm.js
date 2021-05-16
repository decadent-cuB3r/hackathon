import firebase from "firebase/app";
import "firebase/auth";
import React, {useContext, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { loginToFirebase } from '../actions'
import { StoreContext } from "../store"

const RegisterForm = () => {
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

  // google
  let provider = new firebase.auth.GoogleAuthProvider();
  const googleOnClick = () =>{
    document.getElementById('googleSignIn').onclick = function() {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // 可以獲得 Google 提供 token，token可透過 Google API 獲得其他數據。  
        var token = result.credential.accessToken;
        var user = result.user;
      });  
    }
  }

  // facebook
  let providerF = new firebase.auth.FacebookAuthProvider();
  const fbOnClick = () =>{
    document.getElementById('fbSignIn').onclick = function() {
      firebase.auth().signInWithPopup(providerF).then(function(result) {
        var token = result.credential.accessToken;      
        var user = result.user;
      })
    }
  }

  // const onChange = e => {
  //   rememberLoginUser(dispatch, e.target.checked);
  // }

  // useEffect(() => {
  //   if(userInfo) history.push(redirect);
  // }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="registerForm">
      <h1 className="loginForm-title">註冊</h1>
      <div className="loginForm-colorBlock"></div>
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
        >
          <label>帳號：</label>
          <Input
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
        >
          <label className="formLogin-label">密碼：</label>
          <Input
            type="password"
            placeholder="密碼長度6~12字元"
          />
        </Form.Item>
        <Form.Item
          name="password"
        >
          <label className="formLogin-label">再次輸入密碼：</label>
          <Input
            type="password"
            placeholder=" "
          />
        </Form.Item>
        <Form.Item
          name="name"
        >
          <label>姓名：</label>
          <Input/>
        </Form.Item>
        <Form.Item
          name="idNum"
        >
          <label>身份證字號：</label>
          <Input/>
        </Form.Item>
        <Form.Item
          name="phoneNum"
        >
          <label>手機號碼：</label>
          <Input/>
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          
          <Link className="login-form__forgot" to={"/"}>
            Forgot password
          </Link>
        </Form.Item> */}
        <div className="registerForm-form-buttonDiv">
          <Form.Item>
            {/* {loading ? ( */}
                <Button
                type="primary"
                htmlType="submit"
                className="registerForm-form-button"
                // loading
              >
                註冊
              </Button>

            {/* ) : (
              <Button
                type="primary"
                htmlType="submit"
                className="login-form__button"
              >
                Log in
              </Button> */}
            {/* )} */}
            {/* Or <Link to={"/register?redirect=shipping"}>register now!</Link>
            {error === "" ? (
              <></>
            ) : (
              <div className="login-form__error-wrap">
                <h3 className="login-form__error-title">
                  <WarningOutlined className="site-form-item-icon" />
                  {"  "}There was a problem
                </h3>
                <p className="login-form__error-message">{error}</p>
              </div>
            )} */}
          </Form.Item>
        </div>
      </Form>
      <div className="loginForm-loginElse">
        <div className="loginForm-colorLine"></div>
        <span>其他登入方式</span>
        <div className="loginForm-colorLine"></div>
      </div>
      <div className="loginForm-loginElse-btns">
        {/* <button>使用 Google 帳號登入</button> */}
        <Button
          id="googleSignIn"
          type="primary"
          htmlType="submit"
          className="loginForm-loginElse-btn"
          onClick={googleOnClick}
          // loading
        >
          使用 Google 帳號登入
        </Button>
        <Button
          id="fbSignIn"
          type="primary"
          htmlType="submit"
          className="loginForm-loginElse-btn"
          onClick={fbOnClick}
          // loading
        >
          使用 Facebook 帳號登入
        </Button>
      </div>
    </div>
  );
};
export default RegisterForm;
