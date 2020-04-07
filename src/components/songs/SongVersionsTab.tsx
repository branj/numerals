import React from 'react';
import {Theme, createStyles, IconButton, Tabs, Tab, Grid, withStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface SongVersionsTabProps {
    versions : any,
}

const VersionTabs = withStyles({
  root: {
  },
  indicator: {
    backgroundColor: 'yellow ',
  },
})(Tabs);

const VersionTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      //background : theme.palette.primary.dark,
      //textTransform: 'none',
      color : theme.palette.grey[900],
      minWidth: 50,
      padding: 0,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(0),
      borderTop : 'solid thin',
      borderLeft : 'solid thin',
      borderRight : 'solid thin',
      borderTopRightRadius : '25px',
      background : theme.palette.primary.light,
      '&$selected': {
        fontWeight: theme.typography.fontWeightBold,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }),
)((props: any) => <Tab disableRipple {...props} />);

const SongVersionsTab: React.FC<SongVersionsTabProps> = ({
  versions
}) => {
    
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function renderTab(item:any,key:number) {
    return  <VersionTab key={"version-" + key} label={"v" + item} />
  }

  var tabs = [];
  for (var i = 0; i < versions.length; i++) {
    tabs.push(renderTab(versions[i],i))
  } 

  return (
    <Grid container spacing={0}>
        <Grid item xs={1}>
            <IconButton aria-label="Save song at version" color="primary">
                <AddIcon fontWeight="900" />
            </IconButton>
        </Grid>  
        <Grid item xs={11}>
            <VersionTabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                {tabs}
            </VersionTabs>
        </Grid>
    </Grid>
  );
}

export default SongVersionsTab;