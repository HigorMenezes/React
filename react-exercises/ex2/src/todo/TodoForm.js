import React from 'react';
import Grid from './../template/Grip';
import IconButton from './../template/IconButton'
export default props => (
    <div role='form' className='todoForm row'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'></IconButton>
        </Grid>

    </div>
);