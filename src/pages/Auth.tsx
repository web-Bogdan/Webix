import React, {useState} from 'react';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import {Typography, Button, TextField} from "@mui/material";
import Popup from "../components/Popup";

const Auth = () => {
    // Modals settings
    const [activePopupName, setActivePopupName] = useState('');
    const handleClose = (): void => setActivePopupName('');
    // Auth page wrapper styles
    const Auth = styled("div")({
        backgroundColor: "#FFFFFF",
        height: "100vh",
        display: "flex",
    });
    // Blue side styles
    const OpportunitiesSide = styled("div")({
        backgroundColor: "#0d51cc",
        height: "100%",
        flex: "0 1 50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600
    });
    const List = styled("ul")({
        listStyle: "none",
        color: "#FFFFFF"
    });
    // Login side styles
    const LoginSide = styled("div")({
        height: "100vh",
        flex: "0 1 50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    });
    const LoginSideWrapper = styled("div")({
        width: 370
    });
    const Buttons = styled("div")({
        display: "flex",
        justifyContent: "end"
    });
    return (
        <Auth>
            <OpportunitiesSide>
                <List>
                    <li>
                        <Typography mb={1} sx={{display: "flex", alignItems: "center"}}><SearchIcon sx={{marginRight: "6px"}}/> Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li>
                        <Typography mb={1} sx={{display: "flex", alignItems: "center"}}><PeopleOutlineIcon sx={{marginRight: "6px"}}/> Узнайте, о чём говорят в мире.</Typography>
                    </li>
                    <li>
                        <Typography sx={{display: "flex", alignItems: "center"}}><ChatBubbleOutlineOutlinedIcon sx={{marginRight: "6px"}}/> Присоединяйтесь к обшению.</Typography>
                    </li>
                </List>
            </OpportunitiesSide>
            <LoginSide>
                <LoginSideWrapper>
                    <Typography variant="h4">Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography mt={4} mb={1}>Присоединяйтесь к вебикс прямо сейчас!</Typography>
                    <Button onClick={() => setActivePopupName("loginPopup")} fullWidth variant="contained" color="primary">Войти</Button>
                    <Button onClick={() => setActivePopupName("registrationPopup")} fullWidth variant="outlined" color="primary" sx={{marginTop: "10px"}}>Зарегистрироваться</Button>
                </LoginSideWrapper>
            </LoginSide>
            <Popup open={activePopupName === "loginPopup" ? true : false} handleClose={handleClose} popupName="Авторизация">
                <TextField  fullWidth size="small" id="email" label="Почта" type="email" sx={{marginBottom: "11px"}}/>
                <TextField  fullWidth size="small" id="password" label="Пароль" type="password" sx={{marginBottom: "18px"}}/>
                <Buttons className="buttons">
                    <Button onClick={handleClose} sx={{marginRight: "10px"}}>Закрыть</Button>
                    <Button size="small" variant="contained">Войти</Button>
                </Buttons>
            </Popup>
            <Popup open={activePopupName === "registrationPopup" ? true : false} handleClose={handleClose} popupName="Регистрация">
                <TextField  fullWidth size="small" id="name" label="Имя" type="text" sx={{marginBottom: "11px"}}/>
                <TextField  fullWidth size="small" id="email" label="Почта" type="email" sx={{marginBottom: "11px"}}/>
                <TextField  fullWidth size="small" id="password" label="Пароль" type="password" sx={{marginBottom: "18px"}}/>
                <Buttons className="buttons">
                    <Button onClick={handleClose} sx={{marginRight: "10px"}}>Закрыть</Button>
                    <Button size="small" variant="contained">Зарегистрироваться</Button>
                </Buttons>
            </Popup>
        </Auth>
    );
};

export default Auth;