import React from 'react';
import {Paper, Typography} from "@mui/material";
import {styled} from "@mui/system";

const Topics: React.FC = () => {
    // Styles
    const Topic = styled(Paper)({
        borderRadius: 0,
        backgroundColor: "transparent",
        userSelect: "none"
    });
    return (
        <Paper  variant="outlined" sx={{backgroundColor: "#f7f7f7", marginTop: "16px", position: "sticky", top: 20,}}>
            <Topic>
                <Typography variant="h5" component="h2" sx={{padding: "16px 10px"}}>Актуальные новости</Typography>
            </Topic>
            <div>
                <Topic sx={{ padding: "6px 10px", cursor: "pointer", "&:hover": {backgroundColor: "rgb(213, 214, 214, .3)"}}}>
                    <Typography variant="h6">Казань</Typography>
                    {/*Информация о теме*/}
                    <div style={{fontSize: 14, color: "#a19e9e"}}>
                        3600 новостей
                    </div>
                </Topic>
                <Topic sx={{ padding: "6px 10px", cursor: "pointer", "&:hover": {backgroundColor: "rgb(213, 214, 214, .3)"}}}>
                    <Typography variant="h6">Казань</Typography>
                    {/*Информация о теме*/}
                    <div style={{fontSize: 14, color: "#a19e9e"}}>
                        3600 новостей
                    </div>
                </Topic>
                <Topic sx={{ padding: "6px 10px", cursor: "pointer", "&:hover": {backgroundColor: "rgb(213, 214, 214, .3)"}}}>
                    <Typography variant="h6">Казань</Typography>
                    {/*Информация о теме*/}
                    <div style={{fontSize: 14, color: "#a19e9e"}}>
                        3600 новостей
                    </div>
                </Topic>
            </div>
        </Paper>
    );
};

export default Topics;