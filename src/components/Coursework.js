import React from "react"
import PropTypes from "prop-types"

export default class Coursework extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <h2>Coursework</h2>
        <p>
          <b>Computer Science</b>
        </p>
        <ul>
          {data["cs"].sort().reverse().map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
        <p>
          <b>Mathematics</b>
        </p>
        <ul>
          {data["math"].sort().reverse().map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
        <p>
          <b>Psychology</b>
        </p>
        <ul>
          {data["psyc"].sort().reverse().map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
      </div>
    )
  }
}

Coursework.propTypes = {
  data: PropTypes.object,
}
