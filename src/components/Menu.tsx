import React from 'react';
import {Grid, IconButton, Typography, Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {styled} from "@mui/system";
import {IMenu} from "../utils/Interfaces";

// Menu
const Menu: React.FC<IMenu> = ({onClick}) => {
    // Styles
    const List = styled("ul")({
        listStyle: "none",
        marginTop: 20,
        position: "sticky",
        top: 20,
        marginLeft: "auto"
    });
    const ListItem = styled("li")({
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 30,
        userSelect: "none",
        padding: "5px 15px"
    });
    return (
        <Grid item xs={3}>
            <List>
                <ListItem sx={{"&:hover": {backgroundColor: "#3599de"}}}>
                    <SearchIcon sx={{fontSize: 28}}/>
                    <Typography ml={2} variant="h6">Поиск</Typography>
                </ListItem>
                <ListItem sx={{"&:hover": {backgroundColor: "#3599de"}}}>
                    <NotificationsIcon sx={{fontSize: 28}}/>
                    <Typography ml={2} variant="h6">Уведомления</Typography>
                </ListItem>
                <ListItem sx={{"&:hover": {backgroundColor: "#3599de"}}}>
                    <MailOutlineIcon sx={{fontSize: 28}}/>
                    <Typography ml={2} variant="h6">Сообщения</Typography>
                </ListItem>
                <ListItem  sx={{"&:hover": {backgroundColor: "#3599de"}}}>
                    <BookmarkBorderOutlinedIcon sx={{fontSize: 28}}/>
                    <Typography ml={2} variant="h6">Закладки</Typography>
                </ListItem>
                <ListItem sx={{"&:hover": {backgroundColor: "#3599de"}}}>
                    <FactCheckOutlinedIcon sx={{fontSize: 28}}/>
                    <Typography ml={2} variant="h6">Список</Typography>
                </ListItem>
                <ListItem sx={{"&:hover": {backgroundColor: "#3599de"}}}>
                    <PersonOutlineOutlinedIcon sx={{fontSize: 28}}/>
                    <Typography ml={2} variant="h6">Профиль</Typography>
                </ListItem>
                <ListItem>
                    <Button onClick={() => onClick("createPostPopup")} variant="contained" sx={{width: "100%", marginTop: "12px", textAlign: "center"}}>Опубликовать</Button>
                </ListItem>

            </List>
        </Grid>
    );
};

export default Menu;