import React, {useState} from 'react';
import './App.css';
import Post from "./post";
import {createTheme, Grid, Theme, ThemeProvider} from "@mui/material";
import theme from "./assets/theme/theme";


function App() {
    const [name, setName] = useState<string | null>("")
    return (
        <ThemeProvider theme={theme}>
            <Grid bgcolor={(theme:Theme)=>theme.palette.info.main}>
                <Post/>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
