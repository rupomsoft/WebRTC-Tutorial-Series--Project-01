import React, {Component} from 'react';
import TopNavBar from "../components/TopNavBar";
import JoinForm from "../components/JoinForm";
class JoinPage extends Component {
    render() {
        return (
            <div>
               <TopNavBar/>
                <JoinForm/>
            </div>
        );
    }
}
export default JoinPage;