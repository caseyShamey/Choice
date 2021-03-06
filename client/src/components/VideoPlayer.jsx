import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNode: null,
      link: null,
      choiceOne: null,
      choiceTwo: null,
      childOne: null,
      childTwo: null
    }

    this.onChoiceOne = this.onChoiceOne.bind(this)
    this.onChoiceTwo = this.onChoiceTwo.bind(this)
  }

async componentDidMount() {
  let response = await fetch('/init')
  let json = await response.json()
  this.setState({
    currentNode: json._id,
    link: json.link,
    choiceOne: json.choiceOne,
    choiceTwo: json.choiceTwo,
    childOne: json.childOne,
    childTwo: json.childTwo
  })
}

async onChoiceOne() {
  let response = await fetch('/getNode?_id=' + this.state.childOne)
  let json = await response.json()
  this.setState({
    currentNode: json._id,
    link: json.link,
    choiceOne: json.choiceOne,
    choiceTwo: json.choiceTwo,
    childOne: json.childOne,
    childTwo: json.childTwo
  })
}

async onChoiceTwo() {
  let response = await fetch('/getNode?_id=' + this.state.childTwo)
  let json = await response.json()
  this.setState({
    currentNode: json._id,
    link: json.link,
    choiceOne: json.choiceOne,
    choiceTwo: json.choiceTwo,
    childOne: json.childOne,
    childTwo: json.childTwo
  })
}

  render() {
    return (
      <div>
        <div>
          <ReactPlayer
            url = {this.state.link}
            width = {1280}
            height = {800}
            controls = {true}
            playing />
        </div>
        <div>
          <Grid
            container
            spacing={24}
            style={{padding: 24}}
            direction="row"
            justify="center"
          >
            <Grid
              item xs={6}
            >
              <Button
              variant="contained"
              color="primary"
              onClick={this.onChoiceOne}
              >
                {this.state.choiceOne}
              </Button>
            </Grid>

            <Grid
              item xs={6}
            >
              <Button
              variant="contained"
              color="primary"
              onClick={this.onChoiceTwo}
              >
                {this.state.choiceTwo}
              </Button>
            </Grid>

          </Grid>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;