import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cardImg from '../food.jpg';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AddFoodCart(props) {
  const total = props.addedFoods.reduce((acc, eachAddedFood) => {
    return acc + eachAddedFood.quantity * eachAddedFood.calories;
  }, 0);

  return (
    <Card className="mt-1">
      <CardMedia
        component="img"
        height="140"
        image={cardImg}
        alt="table image"
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={6}>
                <Typography gutterBottom variant="h5">Food Cart</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell align="right">Cal</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell align="right">Ttl</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.addedFoods.map((eachAddedFood, index) => {
                const { name, calories, quantity } = eachAddedFood;
                return (
                  <TableRow key={index + name}>
                    <TableCell>{name}</TableCell>
                    <TableCell align="right">{quantity}</TableCell>
                    <TableCell> x </TableCell>
                    <TableCell align="right">{calories}</TableCell>
                    <TableCell> = </TableCell>
                    <TableCell align="right">{quantity * calories}</TableCell>
                  </TableRow>
                );
              })}

              <TableRow>
                <TableCell colSpan={5}>Total kcal</TableCell>
                <TableCell align="right">{total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default AddFoodCart;
