import React from 'react';
import { Table, TR, TH, TD } from '../components/table';

export default class EloTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      loading: true,
      success: true,
    }
  }

  componentDidMount() {
    this.setState({ loading: true, success: false })

    fetch('http://localhost:8000/elo/', {
      method: 'get',
      mode: 'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(result => this.setState({ loading: false, success: true, results: result, }))
    .catch(result => this.setState({ loading: false, success: false, }))
  }

  render() {
    return (
      !this.state.loading && this.state.success
      ? (
        <Table>
          <thead>
            <TR><TH>Player</TH><TH>Rating</TH></TR>
          </thead>
          <tbody>
            {
              Object.entries(this.state.results.response)
                .sort(([_0, a], [_1, b]) => b - a)
                .slice(0, 100)
                .map(([player, score]) => <TR><TD>{player}</TD><TD>{score}</TD></TR>)
            }
          </tbody>
        </Table>
      )
      : <pre>Didn't load</pre>
    )
  }
}
