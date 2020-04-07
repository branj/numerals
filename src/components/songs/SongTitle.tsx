import React from 'react';
import { SongTitleHandler } from '../../utils/Handlers';
import { TextField, withStyles } from '@material-ui/core';


interface TitleEditProps {
    title : string,
    titleHandler : any
}

const TitleTextField = withStyles({
    root: {
      border : 'none',
      marginTop : '8px',
      marginBottom : '8px',
      width : '100%',
      maxWidth : '100%',
      '& input' : {
        padding : '8.5px 14px;',
        fontSize : '36px',
        border : 'none'
      },
      '& .MuiInput-underline:before' : {
        padding : '8.5px 14px;',
        fontSize : '36px',
        border : 'none'
      },
    },
})(TextField);

const SongTitle: React.FC<TitleEditProps> = ({
    title,
    titleHandler
  }) => {

    const [clickedTitle, setClickedTitle] = React.useState(false)
    const [tmpTitle, setTmpTitle] = React.useState('')
    const [update, setUpdate] = React.useState(false)
    
    const validateText = (text:string) => {
        return (text.length > 0 && text.length < 64);
    }

    const handleChange = (data:any) => {
        if(validateText(data.target.value)) {
            setTmpTitle(data.target.value)
            setUpdate(true)
        }
    }; 

    const handleSave = () => {

        if(!update){return}

        var handler = new SongTitleHandler();
        handler.title = tmpTitle;
        titleHandler(handler)
        setClickedTitle(!clickedTitle)
        setUpdate(false)
    }

   return (
          <TitleTextField
            key="song-title"
            placeholder="Untitled song"
            inputProps={{ 'aria-label': 'Create a song name' }}
            onChangeCapture={handleChange}
            onMouseLeave={handleSave}
            defaultValue={title}
        />
  );
}

export default SongTitle;