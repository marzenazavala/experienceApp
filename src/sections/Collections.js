import React from 'react';
import CollectionCard from '../components/cards/CollectionCard/CollectionCard';
import { collections } from '../utils/collections';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const CollectionsSection = () => {
  
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
        {collections.map((collection => (
          <Grid key={collection.id} item>
            <CollectionCard collection={collection}/>
          </Grid>
          )
        ))}
        </Grid>
    </Grid>
  </Grid>
  )
};

export default CollectionsSection