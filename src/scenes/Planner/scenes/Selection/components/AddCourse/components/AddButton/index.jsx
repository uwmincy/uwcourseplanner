import React from 'react';
import PropType from 'prop-types';
import IconButtonx from '../../../../../../../../components/IconButtonx';

const AddButton = ({ onClickAdd }) => (
    <IconButtonx
        onClick={onClickAdd}
    >
        <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
    </IconButtonx>
);

AddButton.propType = {
    onClickAdd: PropType.func.isRequired,
};

export default AddButton;