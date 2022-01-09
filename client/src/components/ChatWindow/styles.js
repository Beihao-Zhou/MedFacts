import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
    outer: {
        marginTop: '120px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '210px', 
            flexDirection: 'column-reverse', 
        },
    }, 
    chatMenuWrapper: {
        padding: '10px',
        height: '400px', 
        overflowY: 'auto', 
    }, 

    chatBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
    },

    chatBoxTop: {
        height: '300px',
        overflowY: 'scroll',
        paddingRight: '10px',
    },

    chatBoxBottom: {
        borderRadius: 4,
        marginBottom: '1rem',
        padding: '16px',
        margin: '10px 0',
    },

    chatMessageInput: {
        padding: '10px',
    },

    contact: {
        margin: '10px', 
        padding: '5px 0', 
        cursor: 'pointer', 
        borderRadius: '10px', 
        backgroundColor: '#eeeeee', 
    },
}));