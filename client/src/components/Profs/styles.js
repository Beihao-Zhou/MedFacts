import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    pagination: {
        marginTop: '20px', 
        margin: 'auto', 
        width: '50%', 
    }, 
    appBarSearch: {
        borderRadius: 4,
        marginTop: '120px', 
        marginBottom: '2rem',
        padding: '16px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '210px', 
        },
    },
}))