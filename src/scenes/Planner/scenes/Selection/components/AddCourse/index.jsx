import React from 'react';
import PropType from 'prop-types';
import AddButton from './components/AddButton';
import Textbox from '../../../../../../components/Textbox';
import CourseLabel from '../../../../../../components/CourseLabel';

const AddCourse = ({ subject, course, onChangeSubject, onChangeCourse, onClickAdd }) => (
    <div>
        <Textbox
            label="Subject: "
            value={subject}
            onChangeText={onChangeSubject}
        />
        <Textbox
            label="Course: "
            value={course}
            onChangeText={onChangeCourse}
        />
        <AddButton 
            onClickAdd={onClickAdd}
        />
    </div>
);

AddCourse.propType = {
    subject: PropType.string.isRequired,
    course: PropType.string.isRequired,
    onChangeSubject: PropType.func.isRequired,
    onChangeCourse: PropType.func.isRequired,
    onClickAdd: PropType.func.isRequired,
};

export default AddCourse;