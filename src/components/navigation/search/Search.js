import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './search.module.scss'
function Search() {
    return (
        <div className={styles.search}>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300,height:40, backgroundColor:'rgba(64, 64, 64,0.8)' }}
            >       
            <InputBase
                sx={{ ml: 1, flex: 1 , color:'rgb(242, 242, 242)'}}
                placeholder="Search Movie"
                inputProps={{ 'aria-label': 'search google maps' }}
            />      
            <Divider sx={{ height: 28, m: 0.5,color:'red' }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon sx={{color:'rgb(242, 242, 242)'}} />
            </IconButton>
            </Paper>
        </div>
      );
}

export default Search