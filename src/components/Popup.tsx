import React from 'react';
import {Modal, Box, Typography} from "@mui/material";

interface IPopup{
    children: React.ReactNode,
    open: boolean,
    handleClose: any,
    popupName: string,
}

const Popup: React.FC<IPopup> = ({children, open, handleClose, popupName }) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#FFFFFF',
        border: '1px solid #000',
        borderRadius: 3,
        p: 4
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {popupName}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                        {children}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default Popup;