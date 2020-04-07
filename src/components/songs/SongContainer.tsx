import React from 'react';
import Container from '@material-ui/core/Container';
import SongVersionsTab from './SongVersionsTab';
import SongForm from './SongForm';
import { TEST_SONG } from '../../data/Fixtures';
import { Divider } from '@material-ui/core';
const SongContainer: React.FC = (props) => { 

  return (
    <Container maxWidth="sm"> 
        <SongVersionsTab versions={[1,2,3]}/>
        <Divider />
        <SongForm song={TEST_SONG}/>
    </Container>
  );
}

export default SongContainer;