import {Button,Card,CardActionArea,CardActions,CardContent,CardMedia,makeStyles,Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
            height:150
        }
    }
}))

const Post = ({img,title}) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={img} title="Post"/>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="small" color="primary">
                    Share
                </Button>
                <Button size="small" variant="contained" color="secondary">
          Learn More
        </Button>
            </CardActions>
        </Card>
    )
}

export default Post;