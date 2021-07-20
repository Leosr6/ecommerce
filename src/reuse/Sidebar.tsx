import {Divider, List, ListItem, ListItemText, Box} from  '@material-ui/core';
import React, { useEffect, useState } from 'react';

interface SideBarProps {
    onPressItem: (text: string) => void;
    itemList: string[];
    className?: string;
    style?: React.CSSProperties;
};

function SideBar({ onPressItem, itemList, className, style }: SideBarProps ) {
    return (
        <Box width="15%" className={className} style={style}>
            <Divider />
            <List>
            {itemList.map((text) => (
                <React.Fragment>
                    <ListItem button key={text} onClick={() => onPressItem(text)}>
                        <ListItemText primary={text} />
                    </ListItem>
                    <Divider />
                </React.Fragment>
            ))}
            </List>
        </Box>
    );
}

export default SideBar;
