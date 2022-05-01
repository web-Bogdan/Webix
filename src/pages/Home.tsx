import React, {useState} from 'react';
import {Grid, Container, TextField, Typography, Paper, Button} from "@mui/material";

import {styled} from "@mui/system";
import Tweet from "../components/Tweet";
import Menu from "../components/Menu";
import CreateTweet from "../components/CreateTweet";
import Topics from "../components/Topics";
import Popup from "../components/Popup";
const Home = () => {
    // Modals settings
    const [activePopupName, setActivePopupName] = useState('');
    const handleClose = (): void => setActivePopupName('');
    const TweetsWrapper = styled(Paper)({
        borderRadius: 0,
        backgroundColor: "#f0ebec"
    });
    return (
        <Container>

            <Grid container spacing={2}>
                <Menu onClick={setActivePopupName}></Menu>
                <Grid item xs={6}>
                    <TweetsWrapper variant="outlined" sx={{marginTop: "20px"}}>
                        <TweetsWrapper sx={{height: 46, backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", padding: "0 20px", position: "sti"}}>
                            <Typography variant="h5">Главная</Typography>
                        </TweetsWrapper>
                        <CreateTweet user={{fullName: "Дашуля", username: "lasss", url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"}}></CreateTweet>
                    <Tweet text="Lorem dsadsaaaaaaaaaaaaaa dsadsasdasda dsasdasad dsadsa dsasadsadsa sasadsads ad sa dsa sad sasaddsasadsdsdsada ad dsadsa dsa" user={{
                        fullName: "Даша Савченкова",
                        username: "lashaOni",
                        url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"
                    }} />
                    <Tweet text="Lorem dsadsaaaaaaaaaaaaaa dsadsasdasda dsasdasad dsadsa dsasadsadsa sasadsads ad sa dsa sad sasaddsasadsdsdsada ad dsadsa dsa" user={{
                        fullName: "Даша Савченкова",
                        username: "lashaOni",
                        url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"
                    }} />
                    <Tweet text="Lorem dsadsaaaaaaaaaaaaaa dsadsasdasda dsasdasad dsadsa dsasadsadsa sasadsads ad sa dsa sad sasaddsasadsdsdsada ad dsadsa dsa" user={{
                        fullName: "Даша Савченкова",
                        username: "lashaOni",
                        url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"
                    }} />
                        <Tweet text="Lorem dsadsaaaaaaaaaaaaaa dsadsasdasda dsasdasad dsadsa dsasadsadsa sasadsads ad sa dsa sad sasaddsasadsdsdsada ad dsadsa dsa" user={{
                            fullName: "Даша Савченкова",
                            username: "lashaOni",
                            url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"
                        }} />
                        <Tweet text="Lorem dsadsaaaaaaaaaaaaaa dsadsasdasda dsasdasad dsadsa dsasadsadsa sasadsads ad sa dsa sad sasaddsasadsdsdsada ad dsadsa dsa" user={{
                            fullName: "Даша Савченкова",
                            username: "lashaOni",
                            url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"
                        }} />
                        <Tweet text="Lorem dsadsaaaaaaaaaaaaaa dsadsasdasda dsasdasad dsadsa dsasadsadsa sasadsads ad sa dsa sad sasaddsasadsdsdsada ad dsadsa dsa" user={{
                            fullName: "Даша Савченкова",
                            username: "lashaOni",
                            url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"
                        }} />
                        <Tweet text="Lorem dsadsaaaaaaaaaaaaaa dsadsasdasda dsasdasad dsadsa dsasadsadsa sasadsads ad sa dsa sad sasaddsasadsdsdsada ad dsadsa dsa" user={{
                            fullName: "Даша Савченкова",
                            username: "lashaOni",
                            url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"
                        }} />
                    </TweetsWrapper>
                </Grid>
                <Grid item xs={3}>
                    <TextField  fullWidth id="standard-basic" label="Поиск в вебиксе" variant="standard" sx={{marginTop: "20px"}}/>
                    <Topics></Topics>
                </Grid>
            </Grid>
            <Popup open={activePopupName === "createPostPopup" ? true : false} handleClose={handleClose} popupName="Создать пост">
                <CreateTweet user={{fullName: "Дашуля", username: "lasss", url: "https://iphone-image.apkpure.com/v2/app/0/f/5/0f55dbb5867583ec6ffc0c3b27c63415.jpg"}}></CreateTweet>
            </Popup>
        </Container>
    );
};

export default Home;