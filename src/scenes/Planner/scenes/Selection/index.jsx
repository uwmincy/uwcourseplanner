import React from 'react';
import './styles.scss';
import AddCourse from './components/AddCourse';
import RemoveCourse from './components/RemoveCourse';

const Selection = ({ courseCart, courseQueue, onClickRemove, onChangeSubject, onChangeCourse, onClickAdd }) => (
    <div>
        {courseCart.map (
            (cartItem, index) => {
                return (
                    <RemoveCourse
                        subject={cartItem.subject}
                        course={cartItem.course}
                        onClickRemove={onClickRemove}
                        index={index}
                    />
                );
            }
        )}
        <AddCourse
            subject={courseQueue.subject}
            course={courseQueue.course}
            onChangeSubject={onChangeSubject}
            onChangeCourse={onChangeCourse}
            onClickAdd={onClickAdd}
        />
    </div>
)

export default Selection;