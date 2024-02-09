import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ProfileImage,} from '../../assets/images/index'



const drawerWidth = 240;


const menuItems = [
    {icon: <GridViewOutlinedIcon/>, name: 'Dashboard', path:'/'},
    {icon: <PersonOutlineOutlinedIcon/>, name: 'Profiles', path:'/profiles'},
    {icon: <SettingsOutlinedIcon/>, name: 'Subscription', path:'/subscription'}, //change from user to profile
    {icon: <RoomPreferencesOutlinedIcon/>, name: 'Customization', path:'/customization'},
]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    '& .MuiDrawer-paper':{
        borderRadius: '15px',
        border:'none',
        backgroundColor: '#1E617A',
        [theme.breakpoints.down('md')]: {
          marginLeft: '0.5%', // Set marginLeft to 0 for medium screens and below
        },
        [theme.breakpoints.down('sm')]: {
          marginLeft: '0.5%', // Set marginLeft to 0 for small screens and below
        },
        ...(open ? openedMixin(theme) : closedMixin(theme))
    }
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', }}>
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{backgroundColor:'#252B42'}}>
            {open ?
                <Box sx={{display:'flex', flexDirection:'column', width:'100%', marginTop:'10px'}}>
                <Box>
                    <IconButton sx={{float:'left'}}>
                        <CircleIcon sx={{color:'#00FF38', fontSize:'small'}}/>
                        <Typography variant='body2' sx={{paddingX:'5px', color:'#DFEBE9'}}> Active</Typography>
                    </IconButton>
                    

                    <IconButton onClick={handleDrawerClose} sx={{float:'right' ,'&:hover': {backgroundColor:'#DFEBE9',}}}>
                        <MoreHorizOutlinedIcon sx={{color:'#DFEBE9', '&:hover': {color:'#252B42'}}}/>
                    </IconButton>
                </Box>
                <br></br>
                <Box sx={{margin:'auto', textAlign:'center'}}>
                     <img src={ProfileImage} alt='ProfileImage'/>
                     <Typography variant='body2' sx={{ color:'#DFEBE9'}}> JOTHAN TAYLOR</Typography>
                     <Typography variant='body2' sx={{ color:'#DFEBE9'}}> Head of Schools</Typography>
                </Box>
                <br></br>
                <br></br>
                </Box>
            :
                <IconButton onClick={handleDrawerOpen} sx={{'&:hover': {backgroundColor:'#DFEBE9', }}}>
                    <MoreHorizOutlinedIcon sx={{color:'#DFEBE9', '&:hover': {color:'#252B42'}}}/>
                </IconButton>
            }
        </DrawerHeader>
        <Divider />
        <List sx={{marginTop:'25px', marginLeft: open ? '25px' : '0',}}>
        {menuItems.map((element, index) =>(
            
            <ListItem  key={index} disablePadding className="listItem" sx={{ display: 'block', py: 2,}}>
                {/* <Link to={element.path}> */}
                <ListItemButton className={`listBtn ${index === 0 ? 'active' : ''}`} sx={{ 
                        minHeight: 48, 
                        justifyContent: open ? 'initial' : 'center', 
                        px: 2.5, 
                        '&:hover': {backgroundColor:'#DFEBE9',
                                    borderRadius: '20px 0px 0px 20px',                
                                    '& .MuiListItemText-root': {color: '#1E617A !important'}, 
                                    '& .MuiListItemIcon-root': {color: '#1E617A !important'},
                                    
                        
                        }
                        
                        }}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color:'#DFEBE9',}}>
                        {element.icon}
                    </ListItemIcon>
                    <ListItemText primary={element.name} sx={{ opacity: open ? 1 : 0, color:'#DFEBE9' }} />
                </ListItemButton>
                {/* </Link> */}
            </ListItem>

        ))}
        </List>
      </Drawer>
 
    </Box>
  );
}

