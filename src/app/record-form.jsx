import React from 'react';
import Text from './../components/text';
import Label from './../components/label';
import Button from './../components/button';
import Form from './../components/form';
import P from './../components/p';

export default class RecordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: '',
      loser: '',
      loading: false,
      success: true,
    }

    this.handleChangeWinner = this.handleChangeWinner.bind(this);
    this.handleChangeLoser = this.handleChangeLoser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeWinner(event) {
    this.setState({winner: event.target.value});
  }

  handleChangeLoser(event) {
    this.setState({loser: event.target.value});
  }

  handleSubmit(event) {
    this.setState({ loading: true, success: false })

    if (!this.state.winner || !this.state.loser) {
      this.setState({ loading: false, success: false })

      event.preventDefault();
      return false;
    }

    if (this.state.winner.length < 2 || this.state.loser.length < 2) {
      this.setState({ loading: false, success: false })

      event.preventDefault();
      return false;
    }

    fetch('http://localhost:8000/match', {
      method: 'post',
      mode: 'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        winner: this.state.winner.toLowerCase(),
        loser: this.state.loser.toLowerCase(),
        winning_score: 0,
        losing_score: 0,
      })
    })
    .then(result => this.setState({ loading: false, success: true }))
    .catch(result => this.setState({ loading: false, success: false }))

    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div>
          <Label for="winner">Winner</Label>
          <div>
            <Text id="winner" name="winner" onChange={this.handleChangeWinner} value={this.state.winner}/>
          </div>
        </div>
        <div>
          <Label for="loser">Loser</Label>
          <div>
            <Text id="loser" name="loser" onChange={this.handleChangeLoser} value={this.state.loser}/>
          </div>
        </div>
        <div>
          <Button loading={this.state.loading} success={this.state.success}>Submit</Button>
        </div>
        {
          !this.state.loading && !this.state.success && (
            <P>Could not record your ping-pong game. Please try again later.</P>
          )
        }
      </Form>
    )
  }
}
