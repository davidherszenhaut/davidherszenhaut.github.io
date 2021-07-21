// @format
import React from "react"
import { Helmet } from "react-helmet";
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Resume from "../components/Resume"

import about from "../../content/data/about.json"
import projects from "../../content/data/projects.json"
import resume from "../../content/data/resume.json"

import "../styles/App.css"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleProjectsChange = this.handleProjectsChange.bind(this)
    this.handleResumeChange = this.handleResumeChange.bind(this)
    this.state = {
      tab: "projects",
    }
  }

  handleProjectsChange() {
    this.setState({ tab: "projects" })
  }

  handleResumeChange() {
    this.setState({ tab: "resume" })
  }

  render() {
    return (
      <div>
        <Helmet htmlAttributes={{ lang: "en" }}>
          <meta charSet="utf-8" />
          <meta name="description" content="David Herszenhaut's portfolio" />
          <title>David Herszenhaut</title>
        </Helmet>
        <Header
          onProjectsChange={this.handleProjectsChange}
          onResumeChange={this.handleResumeChange}
          activeTab={this.state.tab}
        />
        <div className="contentContainer">
          <Hero data={about} />
          {this.state.tab === "projects" ? <Projects data={projects} /> : null}
          {this.state.tab === "resume" ? <Resume data={resume} /> : null}
        </div>
        <Footer />
      </div>
    )
  }
}
