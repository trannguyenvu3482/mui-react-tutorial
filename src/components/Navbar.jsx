import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Notifications, Facebook, Mail } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Facebook
        </Typography>
        <Facebook sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            alt="Remy Sharp"
            src="https://lorem.picsum/300"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            alt="Remy Sharp"
            src="https://lorem.picsum/300"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Remy</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
