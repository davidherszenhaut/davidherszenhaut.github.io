import React from "react"
import PropTypes from "prop-types"

import selfPortrait from "../../content/img/self-portrait.jpg"
import "../styles/Hero.css"

export default class Hero extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="heroContainer">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <div className="linkContainer">
          {Object.keys(data.links)
            .sort()
            .map(function (e) {
              return (
                <p key={e}>
                  <a key={e} href={data.links[e][0]}>
                    <img src={data.links[e][1]} />
                  </a>
                </p>
              )
            })}
        </div>
        <div className="captionImgContainer">
          <div className="captionContainer">
            <p>{data.caption}</p>
          </div>
          <img
            src={selfPortrait}
            alt="Self Portrait"
            className="selfPortrait"
          />
        </div>
      </div>
    )
  }
}

Hero.propTypes = {
  data: PropTypes.object,
}
