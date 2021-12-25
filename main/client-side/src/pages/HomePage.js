import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/TopNavBar";
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineUser, FaRegUserCircle, FaVideo, MdMessage, TiMicrophone} from "react-icons/all";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
             <TopNavBar/>
                <Container  fluid={true}>
                    <Row className="mt-2">
                        <Col md={2} lg={2} sm={3} xs={4}>
                            <div className="card p-3 text-center">
                                <h1 className="text-white"><FaRegUserCircle/></h1>
                                <p className="text-white">Rabbil Hasan</p>

                                <div className="text-center">
                                    <button  className="btn btn-sm mx-1">
                                        <FaVideo className="bottom-nav-item"/>
                                    </button>
                                    <button  className="btn btn-sm mx-1">
                                        <TiMicrophone className="bottom-nav-item"/>
                                    </button>
                                    <button  className="btn btn-sm mx-1">
                                        <MdMessage className="bottom-nav-item"/>
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={2} lg={2} sm={3} xs={4}>
                            <div className="card p-3 text-center">
                                <h1 className="text-white"><FaRegUserCircle/></h1>
                                <p className="text-white">Rabbil Hasan</p>

                                <div className="text-center">
                                    <button  className="btn btn-sm mx-1">
                                        <FaVideo className="bottom-nav-item"/>
                                    </button>
                                    <button  className="btn btn-sm mx-1">
                                        <TiMicrophone className="bottom-nav-item"/>
                                    </button>
                                    <button  className="btn btn-sm mx-1">
                                        <MdMessage className="bottom-nav-item"/>
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={2} lg={2} sm={3} xs={4}>
                            <div className="card p-3 text-center">
                                <h1 className="text-white"><FaRegUserCircle/></h1>
                                <p className="text-white">Rabbil Hasan</p>

                                <div className="text-center">
                                    <button  className="btn btn-sm mx-1">
                                        <FaVideo className="bottom-nav-item"/>
                                    </button>
                                    <button  className="btn btn-sm mx-1">
                                        <TiMicrophone className="bottom-nav-item"/>
                                    </button>
                                    <button  className="btn btn-sm mx-1">
                                        <MdMessage className="bottom-nav-item"/>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomePage;