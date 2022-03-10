import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const FoodBox = (props) => {
  const { image, name, calories } = props.food;
  const [quantity, setQuantity] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    props.addFoods({ name, image, calories, quantity });
  };

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <TableRow>
      <TableCell>
        <Avatar src={image} alt={name} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{calories}</TableCell>
      {/*
     <form onSubmit={handleSubmit}> 
      NO APLICAR FORM PORQUE TIENE ALGÚN CONFLICTO CON MUI
      Y NO RENDERIZA LOS ELEMENTOS
      */}
        <TableCell>
          <TextField
            size="small"
            type="number"
            value={quantity}
            onChange={handleChange}
            sx={{ width: '100px' }}
          />
        </TableCell>
        <TableCell>
          <Button onClick={handleClick} type="submit" variant="outlined">
            +
          </Button>
        </TableCell>
      {/* </form> */}
    </TableRow>
  );
};

export default FoodBox;
