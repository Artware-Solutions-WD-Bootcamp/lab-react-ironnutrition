import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cardImg from '../table.jpg';
import TextField from '@mui/material/TextField';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFood({ name, calories, image });
  };

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeCalories = (event) => setCalories(event.target.value);
  const handleChangeImage = (event) => setImage(event.target.value);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardMedia
          component="img"
          height="140"
          image={cardImg}
          alt="table image"
        />
        <CardActionArea>
          <CardContent>
            <TextField
              type="text"
              onChange={handleChangeName}
              label="Food name: "
              fullWidth
            />
            <TextField
              type="number"
              onChange={handleChangeCalories}
              label="Calories: "
              className="mt-1 w-25"
            />
            <TextField
              type="text"
              onChange={handleChangeImage}
              label="Image: "
              className="mt-1 ml-05 w-75"
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              size="small"
              color="primary"
              className="ml-05"
            >
              Add Food
            </Button>
          </CardActions>
        </CardActionArea>
      </form>
    </Card>
  );
}

export default AddFoodForm;
