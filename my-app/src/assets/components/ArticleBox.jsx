import {Button, Grid, Paper, TextField, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';

let answer = ' ';

const ArticleBox = ({questionWord, questionArticle}) => {
  // 'buttons' tai 'type'
  let variant = 'buttons';

  if (variant == 'buttons') {
    return (
      <Paper sx={{width: '50%', m: 'auto'}}>
        <Grid
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{p: 2}}
        >
          <Typography component="h1" variant="h2">
            {questionWord}
          </Typography>
        </Grid>
      </Paper>
    );
  } else {
    return (
      <Paper elevation={7} sx={{width: '50%', m: 'auto'}}>
        <Grid
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{p: 2}}
        >
          <Typography component="h1" variant="h2">
            __ sana
          </Typography>
          <TextField variant="outlined" />
          <Grid
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            gap={2}
            sx={{height: '100%', p: 2}}
          ></Grid>
        </Grid>
      </Paper>
    );
  }
};

export default ArticleBox;
export {answer};
