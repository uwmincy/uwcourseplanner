import React from 'react';
import './styles.scss';
import Schedule from '../../../../components/Schedule';
import ListNavigator from './components/ListNavigator';

const View = ({ events, courseCart, courseQueue, onClickRemove, onChangeSubject, onChangeCourse, onClickAdd }) => (
    <div className="view">
        <div className="view-schedule">
            <Schedule events={events} />
        </div>
        <div className="view-list-navigator">
            <ListNavigator />
        </div>
    </div>
)

export default View;