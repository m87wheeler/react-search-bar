import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    margin: '2rem 0',
  },
})

const Item = props => {
  const classes = useStyles()

  const createMarkup = html => {
    return { __html: html }
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          dangerouslySetInnerHTML={createMarkup(props.title)}
        />
        <Typography color="textSecondary" gutterBottom>
          User: {props.user}
        </Typography>
        <Typography dangerouslySetInnerHTML={createMarkup(props.body)} />
      </CardContent>
    </Card>
  )
}

export default Item
