
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import css from "./header_menu.module.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container spacing={0}>
                    <Grid item xs={1}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={8}>
                        <p>Title</p>
                    </Grid>
                    <Grid className={css.button} item xs={3}>
                        <Button  variant="contained" color="inherit">Login</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}