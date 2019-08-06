import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    iconHover: {
        margin: theme.spacing(2),
        fontSize: 30,
        color: "error",
        '&:hover': {
            color: red[800],
        },
    }
}));

function RemoveButton() {
    const classes = useStyles();

    const Remove = ({ children, ...rest }) => (
        <IconButton
            className={classes.button}
            {...rest}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
            </svg>
            {children}
        </IconButton>
    );

    return (
        <Remove />
    );
}

export default RemoveButton;

/*

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>

            
const IconButtonxx = ({ children, ...rest }) => (
    <IconButton
        className={classes.button}
        {...rest}
    >
        {children}
    </IconButton>
);
        <IconButton className={classes.button} aria-label="delete">
            <DeleteIcon />
        </IconButton>
        <IconButton className={classes.button} aria-label="delete" disabled color="primary">
            <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" className={classes.button} aria-label="add an alarm">
            <Icon>alarm</Icon>
        </IconButton>
        <IconButton color="primary" className={classes.button} aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
            <IconButton
                color="primary"
                className={classes.button}
                aria-label="upload picture"
                component="span"
            >
                <PhotoCamera />
            </IconButton>
        </label>
    </div>
);
}
*/