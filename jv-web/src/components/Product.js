import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from "accounting"
import bike from "../components/assets/Bike Rodado 29 Lamborghini.png"
import { AddShoppingCart } from '@mui/icons-material'



const useStyles = styled((theme) => ({
    root: {
      maxWidth: 345,
    },
    action: {
      marginTop: "1rem",
      fontSize: "18px",
    },
    media:  {
      height: 0,
      paddingTop: "56.25%", //16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
      expandOpend: {
        transform: "rotate(180deg)",
      },
}));

 const ExpandMore = styled((props) => {
   const { expand, ...other } = props;
   return <IconButton {...other} />;
 })(({ theme, expand }) => ({
   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
     duration: theme.transitions.duration.shortest,
   }),
 }));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
             className={classes.action}
            variant='h5'
            color="textSecondary"
            paddingTop={25}
            fontSize={25}
            >
            
              {accounting.formatMoney(50)}
          </Typography>
          
        }
        title="Bike Rodado 29 Lamborghini XX"
        subheader="STOCK DISPONIBLE"
      />
      <CardMedia
        component="img"
        height="194"
        image={bike}
        alt="BikeLamborghini"
      />
      {/* <img src={bike} /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Bike Rodado 29 Lamborghini
          {/* {productType} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(3)
          .fill()
          .map((_, i) => (
          <p>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Caracteristicas:</Typography>
          <Typography paragraph>
          •Rodado: 29 
          •Material del Cuadro : Aluminio 
          •Talle: 17-19-21 
          •Cambios: Shimano de 21 velocidades 
          •Frenos: Disco Mecánico 
          •Llantas Doble Pared: Aluminio de 36 agujeros 
          •Cubiertas: Wanda 29 x 2.1 mm 
          •Camara: Valvula de auto 
          {/* {description} */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}