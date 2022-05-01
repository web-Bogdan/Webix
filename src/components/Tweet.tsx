import React, {useState} from 'react';
import {Avatar, Grid, IconButton, Paper, Typography} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import {styled} from "@mui/system";
import {ITweet} from "../utils/Interfaces";




const Tweet: React.FC<ITweet> = ({user, text}) => {

    // Styles of tweet
    const TweetsWrapper = styled(Paper)({
        borderRadius: 0,
    });
    const TweetsUserName = styled("span")({
        color: "#9f9595"
    });
    const TweetsIcons = styled("div")({
        display: "flex",
        justifyContent: "space-between"
    });
    return (
        <div>

            <TweetsWrapper variant="outlined">

                <Grid container spacing={5} sx={{padding: "15px 20px"}}>

                    <Grid item xs={1}>
                        <Avatar alt="User avatar" src={user.url} />
                    </Grid>
                    <Grid item xs={11} >

                        <Typography><b>{user.fullName}</b> <TweetsUserName>{user.username}</TweetsUserName></Typography>
                        <Typography variant="body1" gutterBottom>{text}</Typography>
                        <TweetsIcons>
                            <div>
                                <IconButton>
                                    <ChatIcon sx={{fontSize: 22}}></ChatIcon>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepeatIcon sx={{fontSize: 22}}></RepeatIcon>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <FavoriteBorderIcon sx={{fontSize: 22}}></FavoriteBorderIcon>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <ShareOutlinedIcon sx={{fontSize: 22}}></ShareOutlinedIcon>
                                </IconButton>
                                <span>1</span>
                            </div>
                        </TweetsIcons>
                    </Grid>
                </Grid>
            </TweetsWrapper>
        </div>
    );
};

export default Tweet;