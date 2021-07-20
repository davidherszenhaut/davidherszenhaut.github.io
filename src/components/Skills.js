import React from "react"
import PropTypes from "prop-types"

export default class Skills extends React.Component {
  render() {
    const data = this.props.data
    const programmingLanguages = data["Programming Languages"].join(", ")
    const librariesFrameworks = data["Libraries/Frameworks"].join(", ")
    const tools = data["Tools"].join(", ")
    const spokenLanguages = data["Fluent In"].join(", ")
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          <li>
            <b>Programming Languages</b>: {programmingLanguages}
          </li>
          <li>
            <b>Libraries/Frameworks</b>: {librariesFrameworks}
          </li>
          <li>
            <b>Tools</b>: {tools}
          </li>
          <li>
            <b>Spoken Languages</b>: {spokenLanguages}
          </li>
        </ul>
      </div>
    )
  }
}

Skills.propTypes = {
  data: PropTypes.object,
}
