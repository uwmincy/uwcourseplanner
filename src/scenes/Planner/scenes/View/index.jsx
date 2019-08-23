import React from 'react';
import './styles.scss';
import AddCourse from './components/AddCourse';
import RemoveCourse from './components/RemoveCourse';

const View = ({ events, courseCart, courseQueue, onClickRemove, onChangeSubject, onChangeCourse, onClickAdd }) => (
    <div className="view">
        <Schedule events={events} />
    </div>
)

export default View;