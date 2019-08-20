import React from 'react';
import PropType from 'prop-types';
import './styles.scss'

const Textbox = ({ label, value, onChangeText }) => (
    <p className="textbox">
        <label>{label}</label>
        <input 
            type = "text"
            value = {value}
            onChange = {onChangeText}
        />
    </p>
)

Textbox.propType = {
    label: PropType.string,
    value: PropType.string,
    onChangeText: PropType.func,
};

export default Textbox;