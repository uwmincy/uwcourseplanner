import React from 'react';
import PropType from 'prop-types';
import IconButtonx from '../../../../../../../../components/IconButtonx';

const RemoveButton = ({ onClickRemove, index }) => (
    <IconButtonx
        onClick={onClickRemove}
        id={index}
    >
        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
    </IconButtonx>
);

RemoveButton.propType = {
    onClickRemove: PropType.func.isRequired,
};

export default RemoveButton;