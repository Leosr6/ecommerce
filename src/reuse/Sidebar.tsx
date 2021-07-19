import {Divider, List, ListItem, ListItemText, Box} from  '@material-ui/core';
import React, { useEffect, useState } from 'react';

interface SideBarProps {
    onPressItem: (text: string) => void;
    itemList: string[];
};

function SideBar({ onPressItem, itemList }: SideBarProps ) {
    return (
        <Box width="15%">
            <Divider />
            <List>
            {itemList.map((text, index) => (
                <ListItem button key={text} onClick={() => onPressItem(text)}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {[].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </Box>
    );
}

export default SideBar;
