import React from 'react';
import PropType from 'prop-types';
import './styles.scss';

const CourseLabel = ({ subject, course }) => (
    <p className="label">
        {subject.concat(" ", course)}
    </p>
);

CourseLabel.propType = {
    subject: PropType.string.isRequired,
    course: PropType.string.isRequired,
};

export default CourseLabel;