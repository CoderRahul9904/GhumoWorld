
import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Box } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { SetInfant, SetAdult, SetChildren, SetFlightClass } from '../slices/flightSlice';
import { useDispatch, useSelector } from 'react-redux';

const PassengersAndClassSelect = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const adultCount = useSelector(state => state.flight.adults)
  const childrenCount = useSelector(state => state.flight.children)
  const infantCount = useSelector(state => state.flight.infant)
  const flightClass = useSelector(state => state.flight.flightClass);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClassChange = (event) => {
    dispatch(SetFlightClass({ flightClass: (event.target.value) }))
  };

  let passengerLabel = "Select Passengers & Class";
  if(adultCount>1 && childrenCount <1 && infantCount <1){
    passengerLabel = `${adultCount} Adult${adultCount > 1 ? 's' : ''}`;
  }else if (childrenCount > 0 && infantCount < 1) {
    passengerLabel = `${adultCount} Adult${adultCount > 1 ? 's' : ''}, ${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}`;
  } else if (infantCount > 0 && childrenCount < 1) {
    passengerLabel = `${adultCount} Adult${adultCount > 1 ? 's' : ''}, ${infantCount} Infant${infantCount > 1 ? 's' : ''}`
  } else if (childrenCount < 1 && infantCount < 1 && adultCount >1) {
    passengerLabel = `${adultCount} Adult${adultCount > 1 ? 's' : ''}`;
  }
  else if(adultCount>1 && childrenCount > 0 && infantCount > 0) {
    passengerLabel = `${adultCount} Adult${adultCount > 1 ? 's' : ''}, ${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}, ${infantCount} Infant${infantCount > 1 ? 's' : ''}`;
  }

  return (
    <div>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="select-passengers-label">Passengers & Class</InputLabel>
        <Select
          labelId="select-passengers-label"
          value={passengerLabel}
          onClick={handleOpen}
          label="Passengers & Class"
        >
          <MenuItem value={passengerLabel} className=' text-bold text-stone-900' >
            {passengerLabel}
          </MenuItem>
        </Select>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Select Passengers & Class</DialogTitle>
          <DialogContent>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
              <span>Adult</span>
              <Box display="flex" alignItems="center">
                <IconButton disabled={adultCount < 2} onClick={() => dispatch(SetAdult({ adults: (adultCount - 1) }))}>
                  <RemoveIcon />
                </IconButton>
                <span>{adultCount}</span>
                <IconButton disabled={adultCount > 8} onClick={() => dispatch(SetAdult({ adults: (adultCount + 1) }))}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
              <span>Children</span>
              <Box display="flex" alignItems="center">
                <IconButton disabled={childrenCount < 1} onClick={() => dispatch(SetChildren({ children: (childrenCount - 1) }))}>
                  <RemoveIcon />
                </IconButton>
                <span>{childrenCount}</span>
                <IconButton disabled={childrenCount > 8} onClick={() => dispatch(SetChildren({ children: (childrenCount + 1) }))}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
              <span>Infant</span>
              <Box display="flex" alignItems="center">
                <IconButton disabled={infantCount < 1} onClick={() => dispatch(SetInfant({ infant: (infantCount - 1) }))}>
                  <RemoveIcon />
                </IconButton>
                <span>{infantCount}</span>
                <IconButton disabled={infantCount == adultCount} onClick={() => dispatch(SetInfant({ infant: (infantCount + 1) }))}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="select-travel-class-label">Travel Class</InputLabel>
              <Select
                labelId="select-travel-class-label"
                value={flightClass}
                onChange={handleClassChange}
                label="Travel Class"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="ECONOMY">Economy</MenuItem>
                <MenuItem value="PREMIUM_ECONOMY">Premium Economy</MenuItem>
                <MenuItem value="BUSINESS">Business</MenuItem>
                <MenuItem value="FIRST">First</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
            <Button onClick={handleClose} color="primary">Save</Button>
          </DialogActions>
        </Dialog>
      </FormControl>
    </div>
  );
};

export default PassengersAndClassSelect;
