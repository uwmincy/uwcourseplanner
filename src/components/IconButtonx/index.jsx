import React from 'react';
import './styles.scss';
import IconButton from '@material-ui/core/IconButton';

const IconButtonx = ({ children, ...rest }) => (
    <IconButton
        className="icon-button"
        {...rest}
    >
        <svg className="svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            {children}
        </svg>
    </IconButton>
);

export default IconButtonx;

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