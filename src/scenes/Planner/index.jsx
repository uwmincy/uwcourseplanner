import React, { Component } from 'react';
import styles from './styles.scss'
//import AddButton from '../../components/AddButton';
//import RemoveButton from '../../components/RemoveButton';
import AddButton from './scenes/Selection/components/AddCourse/components/AddButton';
import RemoveButton from './scenes/Selection/components/RemoveCourse/components/RemoveButton';

import AddCourse from './scenes/Selection/components/AddCourse';
import RemoveCourse from './scenes/Selection/components/RemoveCourse';

import Selection from './scenes/Selection';
import View from './scenes/View';

import Schedule from '../../components/Schedule'

class Planner extends Component {
    constructor(props) {
        super(props);
        const now = new Date();
        const events = [
          {
              id: 0,
              title: 'All Day Event very long title',
              allDay: true,
              start: new Date(2019, 6, 0),
              end: new Date(2019, 6, 1),
          },
          {
              id: 1,
              title: 'Long Event',
              start: new Date(2019, 3, 7),
              end: new Date(2019, 3, 10),
          },
          {
              id: 2,
              title: 'Right now Time Event',
              start: now,
              end: now,
          },
        ]
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
            },
            events: events
        };
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }

    handleClickRemove(index) {
        if (index !== "") {
            const courseCartCopy = this.state.courseCart.slice();
            courseCartCopy.splice(index, 1);
            this.setState({ courseCart: courseCartCopy });
        }
        console.log(index);
    }

    handleChangeSubject(subject) {
        this.setState({
            courseQueue: {
                subject: subject,
                course: this.state.courseQueue.course
            }
        });
    }

    handleChangeCourse(course) {
        this.setState({
            courseQueue: {
                subject: this.state.courseQueue.subject,
                course: course
            }
        });
    }

    handleClickAdd() {
        if (this.state.courseQueue.subject !== "" && this.state.courseQueue.course !== "") {
            const courseCartCopy = this.state.courseCart.slice();
            courseCartCopy.push(this.state.courseQueue);
            this.setState({
                courseCart: courseCartCopy,
                courseQueue: {
                    subject: "",
                    course: ""
                }
            });
        }
    }

    render() {
        return (
            <div>
                <Selection 
                    courseCart={this.state.courseCart} 
                    courseQueue={this.state.courseQueue}
                    onClickRemove={(event) => this.handleClickRemove(event.target.id)} 
                    onChangeSubject={(event) => this.handleChangeSubject(event.target.value)} 
                    onChangeCourse={(event) => this.handleChangeCourse(event.target.value)} 
                    onClickAdd={this.handleClickAdd} 
                />
                {console.log(this.state.courseCart)}
                {console.log(this.state.courseQueue)}

                <View events={this.state.events} />
            </div>
        );
    }
}

export default Planner;