import React from "react";


// User interface

interface IUser {
    fullName: string,
    username: string,
    url: string
}

export interface ITweet {
    user: IUser,
    text: string
}

// Modal interface
export interface IPopup{
    children: React.ReactNode,
    open: boolean,
    handleClose: () => void,
    popupName: string,
}

// Tweet interface
export interface ICreateTweet {
    user: IUser,
}

export interface IMenu {
    onClick: (popupName: string) => void
}