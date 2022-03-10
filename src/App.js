// Hooks
import React, { useState } from 'react';

// Data
import foods from './foods.json';

// Components
import AddFoodForm from './components/AddFoodForm';
import AddFoodCart from './components/AddFoodCart';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

// Styles
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cardImg from './list.jpg';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import './App.css';

function App() {
  const [foodToShow, setFood] = useState(foods);
  const [foodToRender, setFoodToRender] = useState(foods);
  const [addedFoods, setAddedFoods] = useState([]);

  const addFood = (food) => {
    setFood([food, ...foodToShow]);
    setFoodToRender([food, ...foodToShow]);
  };

  const searchFood = (searchQuery) => {
    const filteredFood = foodToShow.filter((eachFood) => {
      return eachFood.name.includes(searchQuery);
    });
    setFoodToRender(filteredFood);
  };

  const addFoods = (foodToAdd) => {
    setAddedFoods([...addedFoods, foodToAdd]);
  };

  return (
    <div className="App">
      <h1>Ironhack Nutrition</h1>
      <div className="manage-food">
        <div>
          {/* Begin Search food */}
          <Search searchFood={searchFood} />
          {/* Begin Search food */}

          {/* Begin Food List */}
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
                        <Typography gutterBottom variant="h5">
                          Food List
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Img</TableCell>
                      <TableCell>Food</TableCell>
                      <TableCell align="right">Cal</TableCell>
                      <TableCell align="right">Qty</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {foodToRender.map((eachFood, index) => {
                      return (
                        <FoodBox
                          food={eachFood}
                          key={index + eachFood.name}
                          addFoods={addFoods}
                        />
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          {/* End Food List */}
        </div>
        <div className="add-food w-50">
          {<AddFoodForm addFood={addFood} />}
          <AddFoodCart addedFoods={addedFoods} />
        </div>
      </div>
    </div>
  );
}

export default App;
