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
import { AddShoppingCart } from '@mui/icons-material'

const useStyles = styled((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
    fontSize: "18px",
  },
  media: {
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

export default function Product({ product: {id, name, productType, image, price, rating, description } }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* sx={{ maxWidth: 345 }} */}
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h1'
            color="textSecondary"
            paddingTop={15}
            fontSize={25}
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="STOCK DISPONIBLE"
      />
      <CardMedia
        className={classes.media}
        image={image}
        component="img"
        height="200"
        xs={12}
        sm={6}
        md={4}
        lg={3}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component='p'>
          {/* Bike Rodado 29 Lamborghini */}
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(rating)
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
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}