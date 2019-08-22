import React from 'react';
import PropType from 'prop-types';
import IconButtonx from '../../../../../../../../components/IconButtonx';

const RemoveButton = ({ onClickRemove, index }) => (
    <IconButtonx
        onClick={onClickRemove}
        id={index}
    >
        <svg id={index} className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            <path d="M0 0h24v24H0z" fill="none" />
            <path id={index} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
        </svg>
    </IconButtonx>
);

RemoveButton.propType = {
    onClickRemove: PropType.func.isRequired,
};

export default RemoveButton;