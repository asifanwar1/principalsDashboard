import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ArrowLeftIcon, BagIcon, ClockIcon, GroupIcon } from '../../assets/icons';
import CircularWithValueLabel from '../../components/dashboardComponents/CircularProgressWithLabel';
import ProgressBar from '../../components/dashboardComponents/ProgressBar';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


const Home = () => {

    const [staffDetails, setStaffDetails] = useState([
        {title: 'Total number of staff', icon:<GroupIcon/> ,staffNum: 56, updateTime: 'Updated hour ago'},
        {title: 'Total number of positions', icon:<BagIcon/> ,staffNum: 24, updateTime: 'Updated hour ago'},
        {title: 'Tenure', icon:<ClockIcon/> ,staffNum: 12, updateTime: 'Updated hour ago'},
        {title: 'Average Tenure', icon:<ClockIcon/> ,staffNum: 3, updateTime: 'Updated hour ago'},
    ])

    const [observations, setObservations] = useState([
        {name: 'Taylor Swift', ratings: 1, percentage:80, daysLeft: 2, dateAndTime: '24 April, 2023 | 04:00 PM'},
        {name: 'Well Smith', ratings: 1, percentage:85, daysLeft: 5, dateAndTime: '15 April, 2023 | 04:00 PM'},
        {name: 'Johnson', ratings: 4, percentage:68, daysLeft: 8, dateAndTime: '10 April, 2023 | 04:00 PM'},

    ])

    const [activities, setActivities] = useState([
        {initials: 'EK', title:'taylor given the observation', dateAndTime: '05 April, 2023 | 04:00 PM'},
        {initials: 'JH', title:'Jenny enrolled Robert', dateAndTime: '04 April, 2023 | 04:00 PM'},
        {initials: 'AF', title:'Adam got teacher of the month', dateAndTime: '03 April, 2023 | 02:00 PM'},
        {initials: 'RP', title:'Loram activity', dateAndTime: '02 April, 2023 | 02:00 PM'},

    ])


    const [activeStatus, setActiveStatus] = useState([
        {initials: 'EK', name:'Erikson Taylor', title:'Principal of sweden school', activeTime: '1 hour 50 sec'},
        {initials: 'JH', name:'Johnson Harris', title:'Principal of sweden school', activeTime: '1 hour 50 sec'},
        {initials: 'AF', name:'Adam Frank', title:'Principal of sweden school', activeTime: '1 hour 50 sec'},

    ])

  return (
    <>
        <Grid container sx={{ ml: { xs: '18%', md: '18%' }, mt: 2.5, gap: 5 }}>
            {staffDetails.map((element, index) =>(
            
                <Grid item md={2} xs={8} key={index}>
                    <Box sx={{background:'linear-gradient(270deg, #1E617A 99.79%, #1FD071 99.8%)', boxShadow:'4px 4px 10px 0px #1E617A', borderRadius:'12px', padding:'15px', width:'100%', height:'8rem',}}>
                        <Box sx={{display:'flex'}}>
                            <Typography variant='body1' sx={{color:'#DFEBE9'}}>{element.title}</Typography>
                            <Box sx={{display:'flex', justifyContent:'center', marginLeft:'auto', width:'30px', height:'30px', backgroundColor:'#DFEBE9', borderRadius:'50%'}}>
                                <Box sx={{alignSelf:'center', mt:'2px'}}>{element.icon}</Box>
                            </Box>
                        </Box>
                        <br></br>
                        <Box>
                            <Typography variant='body1' sx={{color:'#DFEBE9'}}>{element.staffNum}</Typography>
                        </Box>
                        <br></br>
                        <Box sx={{display:'flex'}}>
                            <Typography variant='body1' sx={{color:'#DFEBE9'}}>{element.updateTime}</Typography>
                            <Box sx={{marginLeft:'auto'}}>
                                <ArrowLeftIcon/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            ))}
        </Grid>
        <br></br>


                {/* Second Layer */}

        <Grid container sx={{ ml: { xs: '18%', md: '18%' }, mt: 2.5, gap: 5 }}>
                               
            <Grid item md={5} xs={9}>
                <Box  sx={{backgroundColor:'white', borderRadius:'17px',}}>
                <br></br>
                <Box sx={{display:'flex', padding:'15px'}}>
                    <Typography variant='h6'>
                        Observations
                    </Typography>
                    <Typography variant='body1'sx={{marginLeft:'auto', color:'#1D7D81'}}>
                        View All
                    </Typography>
                </Box>
                <List>
                    {observations.map((element, index) =>(
                        
                        <ListItem key={index} sx={{display:'flex', margin:'auto' ,borderRadius:'12px', border:'1px solid #DFDBD8', gap:'20px', width:'95%', paddingY:'20px', marginTop:'15px'}}>
                            <Box>
                                <CircularWithValueLabel/>
                            </Box>
                            <Box>
                                <Typography variant='body1'>{element.name}</Typography>
                                <Typography variant='body2' sx={{color:'grey'}}>{element.dateAndTime}</Typography>
                            </Box>
                            <Box sx={{display:'flex', marginLeft:'auto', gap:'20px', flexDirection:{xs:'column', md:'row'}}}>
                            <Box>
                                <Rating name="read-only" value={element.ratings} readOnly />
                            </Box>
                            <Box>
                                <ListItemButton sx={{backgroundColor:'#EEE6E2', borderRadius:'5px'}}>{element.daysLeft} days left</ListItemButton>
                            </Box>
                            </Box>
                        </ListItem>

                    ))}
                </List>
                <br></br>
                </Box>
            </Grid>


            <Grid item md={4} xs={9}>
                <Box  sx={{backgroundColor:'white', borderRadius:'17px',}}>
                <br></br>
                <Box sx={{display:'flex', padding:'15px'}}>
                    <Typography variant='h6'>
                        Activity
                    </Typography>
                    <Typography variant='body1'sx={{marginLeft:'auto', color:'#1D7D81'}}>
                        View All
                    </Typography>
                </Box>
                <List>
                    {activities.map((element, index) =>(
                        
                        <ListItem key={index} sx={{display:'flex', margin:'auto' ,borderRadius:'12px', backgroundColor:'#E5E8E8', marginTop:'13px', gap:'20px', width:'95%'}}>
                            <Box>
                                <Avatar sx={{ bgcolor: '#465F85' }}>{element.initials}</Avatar>
                            </Box>
                            <Box>
                                <Typography variant='body1'>{element.title}</Typography>
                                <Typography variant='body2' sx={{color:'grey'}}>{element.dateAndTime}</Typography>
                            </Box>
                        </ListItem>

                    ))}
                </List>
                <br></br>
                </Box>
            </Grid>
        </Grid>



                        {/* Third Layer */}

        <Grid container sx={{ ml: { xs: '18%', md: '18%' }, mt: 2.5, gap: 5 }}>
                               
            <Grid item md={5} xs={9}>
                <Box  sx={{backgroundColor:'white', borderRadius:'17px',}}>
                <br></br>
                <Box sx={{display:'flex', padding:'15px'}}>
                    <Typography variant='h6'>
                        Active Principals
                    </Typography>
                    <Typography variant='body1'sx={{marginLeft:'auto', color:'#1D7D81'}}>
                        View All
                    </Typography>
                </Box>
                <Box sx={{display:'flex', paddingX:'15px'}}>
                    <Typography variant='h5'>5</Typography>
                    <Typography variant='body1' sx={{marginTop:'5px'}}>Total</Typography>
                </Box>
                <br></br>
                <Box>
                    <ProgressBar/>
                </Box>
                <Box sx={{display:'flex', padding:'30px', gap:'30px'}}>
                    <Box sx={{textAlign:'center', width:'5rem',}}>
                        <Box sx={{display:'flex'}}>
                        <HorizontalRuleIcon sx={{color:'#1E617A',}}/>
                        <Typography>Online</Typography>
                        </Box>
                        <Typography sx={{}}>4</Typography>
                    </Box>
                    <Box sx={{textAlign:'center', width:'5rem',}}>
                        <Box sx={{display:'flex'}}>
                        <HorizontalRuleIcon sx={{color:'#E6E6E6'}}/>
                        <Typography>Offline</Typography>
                        </Box>
                        <Typography>1</Typography>
                    </Box>
                </Box>
                <br></br>
                </Box>
            </Grid>


            <Grid item md={4} xs={9}>
                <Box  sx={{backgroundColor:'white', borderRadius:'17px',}}>
                <br></br>
                <Box sx={{display:'flex', padding:'10px'}}>
                    <Typography variant='h6'>
                        Daily Active Status
                    </Typography>
                    <Typography variant='body1'sx={{marginLeft:'auto', color:'#1D7D81'}}>
                        View All
                    </Typography>
                </Box>
                <List>
                    {activeStatus.map((element, index) =>(
                        
                        <ListItem key={index} sx={{display:'flex', margin:'auto' , gap:'20px', width:'95%'}}>
                            <Box>
                                <Avatar sx={{ bgcolor: '#465F85' }}>{element.initials}</Avatar>
                            </Box>
                            <Box>
                                <Typography sx={{fontSize:'12px'}}>{element.name}</Typography>
                                <Typography sx={{fontSize:'10px', color:'grey'}}>{element.title}</Typography>
                            </Box>
                            <Box sx={{marginLeft:'auto'}}>
                                <Typography sx={{color:'#1E617A', fontSize:'10px'}}> Active Time : 
                                    <span style={{color:'black'}}> {element.activeTime}</span>
                                </Typography>
                            </Box>
                        </ListItem>

                    ))}
                </List>
                <br></br>
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default Home