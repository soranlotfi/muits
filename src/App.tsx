import React, {useState} from 'react';
import './App.css';
import Post from "./post";
import {createTheme, Grid, Theme, ThemeProvider} from "@mui/material";
import theme from "./assets/theme/theme";
import {Colors} from "./assets/theme/base/color";
console.log(Colors)

function App() {
    const [name, setName] = useState<string | null>("")
    return (
        <ThemeProvider theme={theme}>
            <Grid>
                <Post/>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
