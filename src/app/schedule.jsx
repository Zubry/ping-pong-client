import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Table, TR, TH, TD } from '../components/table';

const StyledLink = styled(Link)`
  color: #75434D;

  &:hover {
    color: #5c353d;
  }
`

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      loading: true,
      success: true,
    }
  }

  update() {
    this.setState({ loading: true, success: false })

    fetch(`http://localhost:8000/results/${this.props.player}`, {
      method: 'get',
      mode: 'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(result => {
      const results = {}

      for (const match of result.response.wins) {
        if (results.hasOwnProperty(match.opponent)) {
          results[match.opponent].wins = match.games_played;
        } else {
          results[match.opponent] = { wins: match.games_played };
        }
      }

      for (const match of result.response.losses) {
        if (results.hasOwnProperty(match.opponent)) {
          results[match.opponent].losses = match.games_played;
        } else {
          results[match.opponent] = { losses: match.games_played };
        }
      }

      result.response = results;
      return result;
    })
    .then(result => this.setState({ loading: false, success: true, results: result, }))
      .catch(result => this.setState({ loading: false, success: false, }))
  }

  componentDidMount() {
    this.update()
  }

  componentDidUpdate(prev) {
    if (prev.player !== this.props.player) {
      this.update()
    }
  }

  render() {
    return (
      !this.state.loading && this.state.success
      ? (
        <Table>
          <thead>
            <TR><TH>Opponent</TH><TH>Wins</TH><TH>Losses</TH><TH>%</TH></TR>
          </thead>
          <tbody>
            {
              Object.entries(this.state.results.response)
                .slice(0, 100)
                .map(([opponent, { wins, losses }]) => (
                  <TR key={opponent}>
                    <TD><StyledLink to={`/player/${opponent}`}>{opponent}</StyledLink></TD>
                    <TD>{wins || 0}</TD>
                    <TD>{losses || 0}</TD>
                    <TD>{
                      `.${((wins || 0) / ((wins || 0) + (losses || 0))) * 1000}`.slice(0, 4)
                    }</TD>
                  </TR>
                ))
            }
          </tbody>
        </Table>
      )
      : <pre>Didn't load</pre>
    )
  }
}
