import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PlayerCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return(
        <Card>
            {props.players.map(player =>
                <CardContent key={player.id}>
                    <Typography variant="h5" component="h2">{player.name}</Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>{bull}{player.country}</Typography>
                    <Typography className={classes.pos} color="textSecondary">Number of searches: {player.searches}</Typography>
                </CardContent>
            )}
        </Card>
    );
}

export default PlayerCard;
