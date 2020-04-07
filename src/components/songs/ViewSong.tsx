import React from 'react';

import { SongModel } from '../../data/Models';
import { SongRepository } from '../../data/SongRepository';
import SongForm from './SongForm';
import { useParams } from 'react-router';
import { TEST_SONG } from '../../data/Fixtures';
import queryString from 'query-string'

const ViewSong: React.FC = (props) => {
  let { id } = useParams();
  var tmpSong = TEST_SONG
  const [song, setSong] = React.useState<SongModel>(tmpSong)
  console.log(window.location.search);
  var parseString = queryString.parse(window.location.search)
  var toParse = parseString.songJson;

  if (toParse !== undefined && toParse !== null && !Array.isArray(toParse)) {
    var newSong = JSON.parse(toParse);
    console.log(newSong)
    //if(newSong != tmpSong) {
        //setSong(newSong)
    //}
  } else if (id !== undefined && song !== tmpSong) {
    setSong(SongRepository.getSong(parseInt(id)))
  }

  return (
    <SongForm song={song} />
  );
}

export default ViewSong;