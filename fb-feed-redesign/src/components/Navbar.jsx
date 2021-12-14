import React,{useState} from 'react'
import {alpha,AppBar,Toolbar,Avatar,Badge,InputBase,makeStyles,Typography} from '@material-ui/core'
import {Cancel,Mail,Notifications,Search} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
toolbar:{
    display:"flex",
    justifyContent:"space-between"
},
logoLg:{
    display:"none",
    [theme.breakpoints.up("sm")]:{
        display:"block"
    }
},
logoSm:{
    display:"block",
    [theme.breakpoints.up("sm")]: {
        display: "none",
      },

},
search:{
    display:"flex",
    alignItems:"center",
    backgroundColor:alpha(theme.palette.common.white,0.15),
    "&:hover":{
        backgroundColor: alpha(theme.palette.common.white,0.25)
    },
    borderRadius: theme.shape.borderRadius,
    width:"50%",
    [theme.breakpoints.down("sm")]:{
        display:(props) => (props.open?"flex":"none"),
        width:"70%"
    }
},
input:{
    color:"white",
    marginLeft:theme.spacing(1)
},
cancel:{
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
},
searchButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
},
icons:{
    alignItems:"center",
    display:(props) => (props.open?"none" : "flex")
},
badge:{
    marginRight: theme.spacing(2),
}
}))

const Navbar = () => {
    const [open,setOpen] = useState(false);
    const classes = useStyles();

  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>FriendsBook</Typography>
            <Typography variant="h6" className={classes.logoSm}>FB</Typography>
            <div className={classes.search}>
                <Search/>
                <InputBase placeholder="Search posts,friends.." className={classes.input}/>
                <Cancel onClick={() => setOpen(false)} className={classes.cancel}/>
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                <Badge className={classes.badge} badgeContent={4} color="secondary">
                    <Mail/>
                </Badge> 
                <Badge className={classes.badge} badgeContent={2} color="secondary">
                    <Notifications/>
                </Badge>
                <Avatar alt="Lia Haque" src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
