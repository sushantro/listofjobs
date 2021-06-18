import React from 'react';
 import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from "./New folder/images/user.svg"
import uiImg from "./New folder/images/login.svg"
import './Login.css';

const Login = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon"/>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                {/* <h1>PLZ ENTER UR EMAIL HERE</h1> */}
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                             <Button variant="primary btn-block" type="submit">Login</Button>
//                              <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="submit" value="LOGIN"/> </div>
                            {/* <h1 className="mt-2 mb-1 text-align center">OR</h1> */}
                            <div class="or-container">
                                <div class="line-separator"></div>
                                <div class="or-label">OR</div>
                                <div class="line-separator"></div>
                            </div>
                            <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a>
                            {/* <Button variant="primary btn-block" type="submit">LOGIN WITH GOOGLE</Button>  */}
                             {/* <button class="button button5 ">login</button>
                             <button class="button button5 ">login with google</button> */}

                            {/* <div className="text-left mt-3">
                                <a href="#"><small className="reset">Password Reset</small></a> II
                                <a href="#"><small className="reset ml-2">Quick Recover</small></a>

                            </div> */}
                            
                             {/* <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a>  */}
                             
                        
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
