import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  counter: {
    height: '2.5rem',
    margin: '0 .5rem',
    textAlign: 'center',
    background: '#CF4434',
  },
  type: {
    lineHeight: '2.5rem',
    fontWeight: '600',
    color: 'whitesmoke',
  },
})

const Counter = props => {
  const classes = useStyles()

  return (
    <Card className={classes.counter}>
      <Typography color="textSecondary" gutterBottom className={classes.type}>
        {props.result}
      </Typography>
    </Card>
  )
}

export default Counter
