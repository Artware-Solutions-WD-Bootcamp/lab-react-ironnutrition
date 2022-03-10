import { useState } from 'react';
import TextField from '@mui/material/TextField';

function Search(props) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
    props.searchFood(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Search food: "
        variant="standard"
        name="search"
        type="text"
        value={search}
        onChange={handleChange}
        fullWidth
      />
    </div>
  );
}

export default Search;
