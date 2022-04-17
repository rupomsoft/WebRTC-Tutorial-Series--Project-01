import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/TopNavBar";
import {Col, Container, Row} from "react-bootstrap";
import { FaRegUserCircle, FaVideo, MdMessage, TiMicrophone} from "react-icons/all";
import {getName} from "../helper/SessionHelper";
import {Redirect} from "react-router";
import io from 'socket.io-client'
import {AnnouceLeftJoiner, AnnouceNewJoiner} from "../helper/ToastHelper";

const socket=io.connect('/');

class HomePage extends Component {

    constructor() {
        super();
        this.state={
            Redirect:false,
        }
    }
    componentDidMount() {
        if(!getName()){
            this.setState({Redirect:true})
        }
    }
    pageRedirect=()=>{
        if(this.state.Redirect===true){
            return(<Redirect to="/join"/>)
        }
    }






    CreateNewJoiner=(PeerID)=>{
        socket.emit('CreateNewJoiner',{'Name':getName(),'PeerID':PeerID})
    }

    AnnounceNewJoiner=()=>{
        socket.on('AnnounceNewJoiner',(Name)=>{
            AnnouceNewJoiner(Name+" has been joined");
            window.speechSynthesis.speak(Name+" has been joined")
        })
    }


    AnnounceLeftJoiner=()=>{
        socket.on('AnnounceLeftJoiner',(Name)=>{
            AnnouceLeftJoiner(Name+" has been left");
            window.speechSynthesis.speak(Name+" has been left")
        })
    }





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
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default HomePage;