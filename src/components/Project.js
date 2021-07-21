import React from "react"
import PropTypes from "prop-types"

export default class Project extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="projectContainer">
        <h1>{data.name}</h1>
        <p>
          [{data.stack.sort().join(", ")}]
        </p>
        {data.links ? Object.keys(data.links).sort().reverse().map((e, i) => <a key={i} href={data.links[e]}>{e}</a>) : null
        }
        <p>{data.description}</p>
        <hr></hr>
      </div>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object,
}
