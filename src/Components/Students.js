import React, { Component } from 'react';
import './../assets/css/student.css';
class Students extends Component {

    constructor() {
        super();
        this.state = {
            score: 0,
            success: false,
        }
    }
    componentDidMount() {
        this.setState({
            score: this.props.score
        });
    }
    addScore() {
        this.setState({
            score: this.state.score + 1
        }, () => {
            if (this.state.score >= 485) {
                this.setState({ success: true });
            }
        });
        console.log('Function Called');
    }
    render() {
        const isSuccess = this.state.success;
        let text;
        if (isSuccess) {
            text = <span className="successLabel">Success</span>;
        } else {
            text = '';
        }
        return (
            <div className="studentInfo">
                <div className="leftDiv">
                    <h2 className="studentName">
                        {this.props.name}
                        <button className="addScoreBtn" onClick={() => this.addScore()}>+</button>
                    </h2>
                    <p className="studentUniversity">{this.props.university} {text}</p>
                </div>
                <div className="rightDiv">
                    <p className="studentScore">{this.state.score}</p>
                </div>
            </div>
        );
    }
}
export default Students;