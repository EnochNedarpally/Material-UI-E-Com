import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const MobileCategories = () => {
    const data=[
        { label: 'Clothing'},
        { label: 'Sports'},
        { label: 'Music'},
        { label: 'Entertainment'},
        { label: 'Books'},
        { label: 'Movies'},
        { label: 'Phones'},
        { label: 'Electronics'},
        { label: 'Kitchen'},
        { label: 'Home Care'},
        { label: 'Gaming'},
        { label: 'Footwear'},
    ]
  return (
          <Autocomplete
          disablePortal
          options={data}
          renderInput={params=>(
                    <TextField {...params} label="Products"/>
              )
            }
          />
  );
};

export default MobileCategories;
