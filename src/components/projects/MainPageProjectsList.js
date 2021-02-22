import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { projectData } from '../../pages/projectDetails/projectData';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
    fontFamily: 'Lemonada',
    fontSize: '14px'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const MainPageProjectsList = ({projects}) => {
  const classes = useStyles();
if(projects) {
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3.5}>
        {projects.map((tile) => (
          <GridListTile key={tile.fileUrl}>
            <img src={tile.fileUrl} alt={tile.title} />
            <Link to={`/project/${tile.id}`} key={tile.id}>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )} else {
      return (<div>Loading...</div>)
  };
};

export default MainPageProjectsList;