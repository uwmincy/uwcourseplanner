import React, { Component } from 'react';
import styles from './styles.scss'
//import AddButton from '../../components/AddButton';
//import RemoveButton from '../../components/RemoveButton';
import AddButton from './scenes/Selection/components/AddCourse/components/AddButton';
import RemoveButton from './scenes/Selection/components/RemoveCourse/components/RemoveButton';

import AddCourse from './scenes/Selection/components/AddCourse';
import RemoveCourse from './scenes/Selection/components/RemoveCourse';

import Selection from './scenes/Selection';

class Planner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseCart: [
                {
                    subject: "SPCOM",
                    course: "225"
                },
                {
                    subject: "SPCOM",
                    course: "226"
                },
                {
                    subject: "SPCOM",
                    course: "227"
                }
            ],
            courseQueue: {
                subject: "",
                course: ""
            }
        };
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        //this.handleClickAdd = this.handleClickAdd.bind(this);
    }

    handleClickRemove(index) {
        const courseCartCopy = this.state.courseCart.slice();
        courseCartCopy.splice(index, 1);
        this.setState({courseCart: courseCartCopy});
        console.log(this.state.courseCart);
    }

    handleChangeSubject(subject) {
        this.setState({
            subject: subject,
            course: this.state.courseQueue.course
        })
    }

    handleChangeCourse(course) {
        this.setState({
            subject: this.state.courseQueue.subject,
            course: course
        })
    }

    render() {
        return (
            <div>
                <Selection 
                    courseCart={this.state.courseCart} 
                    courseQueue={this.state.courseQueue}
                    onClickRemove={this.handleClickRemove} 
                    onChangeSubject={this.handleChangeSubject} 
                    onChangeCourse={this.handleChangeCourse} 
                    onClickAdd={this.handleClickAdd} 
                />
                {console.log(this.state.courseCart)}
            </div>
        );
    }
}

export default Planner;