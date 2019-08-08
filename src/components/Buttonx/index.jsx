import React from 'react';
import Button from '@material-ui/core/Button'

const Buttonx = ({ children, ...rest }) => (
    <Button
        variant="contained"
        color="primary"
        {...rest}
    >
        {children}
    </Button>
);

export default Buttonx;
