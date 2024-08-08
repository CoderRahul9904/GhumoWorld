// import React, { useState } from 'react';
// import { Button, Menu, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// const PassengerClassSelector = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [infants, setInfants] = useState(0);
//   const [travelClass, setTravelClass] = useState('Economy');

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//         Select Passengers & Class
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <div className=' flex flex-row'>
//         <MenuItem>
//           <div>
//             <h4>Adults</h4>
//             <Select
//               value={adults}
//               onChange={(e) => setAdults(e.target.value)}
//             >
//               {[...Array(10).keys()].map((num) => (
//                 <MenuItem key={num} value={num + 1}>{num + 1}</MenuItem>
//               ))}
//             </Select>
//           </div>
//         </MenuItem>
//         <MenuItem>
//           <div>
//             <h4>Children</h4>
//             <Select
//               value={children}
//               onChange={(e) => setChildren(e.target.value)}
//             >
//               {[...Array(10).keys()].map((num) => (
//                 <MenuItem key={num} value={num}>{num}</MenuItem>
//               ))}
//             </Select>
//           </div>
//         </MenuItem>
//         <MenuItem>
//           <div>
//             <h4>Infants</h4>
//             <Select
//               value={infants}
//               onChange={(e) => setInfants(e.target.value)}
//             >
//               {[...Array(10).keys()].map((num) => (
//                 <MenuItem key={num} value={num}>{num}</MenuItem>
//               ))}
//             </Select>
//           </div>
//         </MenuItem>
//         <MenuItem>
//           <FormControl fullWidth>
//             <InputLabel>Travel Class</InputLabel>
//             <Select
//               value={travelClass}
//               onChange={(e) => setTravelClass(e.target.value)}
//             >
//               <MenuItem value="Economy">Economy</MenuItem>
//               <MenuItem value="Business">Business</MenuItem>
//               <MenuItem value="First">First</MenuItem>
//             </Select>
//           </FormControl>
//         </MenuItem>
//         </div>
//       </Menu>
//     </div>
//   );
// };

// export default PassengerClassSelector;






import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Box } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const PassengersAndClassSelect = () => {
  const [open, setOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [travelClass, setTravelClass] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleIncrement = (setter) => {
    setter((prev) => prev + 1);
  }
  const handleDecrement = (setter) => setter((prev) => Math.max(0, prev - 1));

  const handleClassChange = (event) => setTravelClass(event.target.value);

  let passengerLabel = `${adultCount} Adult${adultCount > 1 ? 's' : ''}`;
  if(childrenCount >0 && infantCount <1 ){
    passengerLabel=`${adultCount} Adult${adultCount > 1 ? 's' : ''}, ${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}`;
  }else if(infantCount > 0 && childrenCount < 1){
    passengerLabel=`${adultCount} Adult${adultCount > 1 ? 's' : ''}, ${infantCount} Infant${infantCount > 1 ? 's' : ''}`
  }else if(childrenCount < 1 && infantCount< 1){
    passengerLabel = `${adultCount} Adult${adultCount > 1 ? 's' : ''}`;
  }else{
    passengerLabel=`${adultCount} Adult${adultCount > 1 ? 's' : ''}, ${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}, ${infantCount} Infant${infantCount > 1 ? 's' : ''}`;
  }
  return (
    <div>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="select-passengers-label">Passengers & Class</InputLabel>
        <Select
          labelId="select-passengers-label"
          value="Hello"
          onClick={handleOpen}
          label="Passengers & Class"
        >
          <MenuItem className=' text-bold text-stone-900' value="Hello">
            {passengerLabel}
          </MenuItem>
        </Select>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Passengers & Class</DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <span>Adult</span>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => handleDecrement(setAdultCount)}>
                <RemoveIcon />
              </IconButton>
              <span>{adultCount}</span>
              <IconButton onClick={() => handleIncrement(setAdultCount)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <span>Children</span>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => handleDecrement(setChildrenCount)}>
                <RemoveIcon />
              </IconButton>
              <span>{childrenCount}</span>
              <IconButton onClick={() => handleIncrement(setChildrenCount)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <span>Infant</span>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => handleDecrement(setInfantCount)}>
                <RemoveIcon />
              </IconButton>
              <span>{infantCount}</span>
              <IconButton onClick={() => handleIncrement(setInfantCount)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="select-travel-class-label">Travel Class</InputLabel>
            <Select
              labelId="select-travel-class-label"
              value={travelClass}
              onChange={handleClassChange}
              label="Travel Class"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Economy">Economy</MenuItem>
              <MenuItem value="Premium Economy">Premium Economy</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="First">First</MenuItem>
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
