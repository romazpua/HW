import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const ColorButton = withStyles(() => ({
    root: {
        color: '#fff',
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: '#006500',
        },
    },
}))(Button);