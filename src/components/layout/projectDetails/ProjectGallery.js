import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '20px',
    marginTop: '40px'
  },
  gridList: {
    width: 1000,
    height: 530,
  },
}));

const ProjectGallery = ({ projectData }) => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={260} className={classes.gridList} cols={9}>
          {projectData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  };

export default ProjectGallery;