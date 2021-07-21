import React from "react"
import PropTypes from "prop-types"

import "../styles/Resume.css"

import Contact from "./Contact"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Extracurriculars from "./Extracurriculars"
import Coursework from "./Coursework"
import resume from "../../content/data/resume.pdf";

export default class Resume extends React.Component {
  render() {
    const data = this.props.data
    const contact = data[0].data
    const education = data[1].data
    const experience = data[2].data
    const skills = data[3].data
    const extracurriculars = data[4].data
    const coursework = data[5].data
    return (
      <div className="resumeContainer">
        <div id="resume-pdf-container">
          <a id="resume-pdf" href={resume}>View as PDF</a>
        </div>
        <Contact data={contact} />
        <hr />
        <Education data={education} />
        <hr />
        <Experience data={experience} />
        <hr />
        <Skills data={skills} />
        <hr />
        <Extracurriculars data={extracurriculars} />
        <hr />
        <Coursework data={coursework} />
      </div>
    )
  }
}

Resume.propTypes = {
  data: PropTypes.array,
}
