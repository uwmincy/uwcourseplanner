import React from 'react';
import './styles.scss';
import Schedule from '../../../../components/Schedule';

const View = ({ events, courseCart, courseQueue, onClickRemove, onChangeSubject, onChangeCourse, onClickAdd }) => (
    <div className="view">
        <Schedule events={events} />
    </div>
)

export default View;