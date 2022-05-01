import React, {useState} from 'react';
import {Avatar, Grid, IconButton, Paper, TextareaAutosize, Button} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {styled} from "@mui/system";
import {ICreateTweet} from "../utils/Interfaces";




const CreateTweet: React.FC<ICreateTweet> = ({user}) => {
    const [createTweetText, setCreateTweetText] = useState<string>("");
    const handleClickAddTweet = (): void => {
        setCreateTweetText("");
    }
    // Styles of tweet
    const TweetsIcons = styled("div")({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    });
    const TextAreaStyles: React.CSSProperties = {
        border: "none",
        outline: "none",
        wordSpacing: "-2px",
        resize: "none",
        fontSize: 18,
        width: "100%",
    };
    return (
            <Paper variant="outlined" sx={{marginBottom: "16px", borderRadius: 0}}>
                <Grid container spacing={5} sx={{padding: "15px 20px"}}>
                    <Grid item xs={1}>
                        <Avatar alt="User avatar" src={user.url}/>
                    </Grid>
                    <Grid item xs={11} >
                        <TextareaAutosize
                            minRows={6} placeholder="Что у вас новго?"
                            value={createTweetText} onChange={(e) => setCreateTweetText(e.target.value)}
                            maxLength={280}
                            style={TextAreaStyles}
                        />
                        <TweetsIcons>
                            <div>
                                <IconButton>
                                    <AddAPhotoIcon color="primary" sx={{fontSize: 22}}></AddAPhotoIcon>
                                </IconButton>
                                <IconButton>
                                     <EmojiEmotionsIcon color="primary" sx={{fontSize: 22}}></EmojiEmotionsIcon>
                                </IconButton>
                            </div>
                            <div>
                                <Button onClick={handleClickAddTweet} variant="contained" size="small" type="submit">Опубликовать</Button>
                            </div>
                        </TweetsIcons>
                    </Grid>
                </Grid>
            </Paper>
    );
};

export default CreateTweet;