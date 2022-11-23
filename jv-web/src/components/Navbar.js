import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../components/assets/Logo Blanco.png"
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';

const useStyles = styled((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRight: "10px",
    },
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        
            <AppBar className={classes.appBar} position="fixed" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={logo} className={classes.image} alt="LogoJotave" />
                    </IconButton>
                    <div className={classes.grow} />
                    <Typography variant="h6" color="textPrimary" component="p" sx={{ flexGrow: 1 }}>
                        Hola Invitado
                    </Typography>
                    <div className={classes.button}>
                        <Button variant='filled'>
                            <strong>INGRESAR</strong>
                        </Button>
                        <IconButton aria-label="show cart items" color="inherit">
                            <Badge badgeContent={1} color="secondary">
                            <ShoppingCart fontSize='large' color='secondary' />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        
        </div>
    );
}