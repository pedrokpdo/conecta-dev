import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export const PostCard = ({ post }) => {
    return (
        <Card style={{ marginBottom: '16px' }}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant='h6'>{post.title}</Typography>}
                subheader={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography style={{ marginRight: '8px' }} variant='caption'>{'Avaliado por'}</Typography>
                        <Typography style={{ marginRight: '8px' }} variant='subtitle2'>{post.author.name}</Typography>
                        <Typography style={{ marginRight: '8px' }} variant='caption'>{post.date}</Typography>
                    </div>
                }
            />
            <CardContent style={{ padding: 0 }}>
                <Typography style={{ height: 'auto', marginBottom: '16px', padding: '0 24px' }} variant='body1'>{post.hashtags}</Typography>
                <CardActionArea>
                    <img src={post.image} style={{ height: '300px', width: '100%', maxWidth: '100%' }} />
                </CardActionArea>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                    <Typography color='textSecondary' variant='body2' style={{ cursor: 'pointer' }}>{'10'}</Typography>
                </IconButton>
                <IconButton>
                    <MessageIcon />
                    <Typography color='textSecondary' variant='body2' style={{ cursor: 'pointer' }}>{'10'}</Typography>
                </IconButton>
                <IconButton style={{marginLeft:'auto'}}>
                    <BookmarkIcon />
                    <Typography color='textSecondary' variant='body2' style={{ cursor: 'pointer' }}>{'10'}</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}