import React from "react"
import PropTypes from "prop-types"

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <h2>Experience</h2>
        {this.props.data.map((e, i) => {
          return (
            <div key={i}>
              <div className="experienceHeader">
                <p>{e.title}</p>
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

Experience.propTypes = {
  data: PropTypes.array,
}
