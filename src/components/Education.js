import React from "react"
import PropTypes from "prop-types"

import "../styles/Resume.css"

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        {this.props.data.map((e, i) => {
          return (
            <div key={i}>
              <div className="educationHeader">
                <p>{e.name}</p>
                <p>{e.date}</p>
              </div>
              <ul>
                {e.text.map((t, j) => {
                  return <li key={j}>{t}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

Education.propTypes = {
  data: PropTypes.array,
}
