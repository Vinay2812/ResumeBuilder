import React from 'react'
import '../../resources/templates.css'

function Template1() {
    const user = JSON.parse(localStorage.getItem('resume_builder-user'))
  return (
    <div className='template1-parent'>
        <div className='heading d-flex justify-content-between'>
            <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
            <div>
                <p>{user.email}</p>
                <p>{user.mobileNumber}</p>
            </div>
        </div>

        <div className='divider my-3'></div>

        <div className='objective'>
            <h3> Objective </h3>
            <hr />
            <p my-3>{user.objective}</p>
        </div>

        <div className='divider my-3'></div>

        <div className='education'>
            <h3>Education</h3>
            <hr />
            {user.education.map((education)=>{
                return <div className='d-flex align-items-center '>
                    <h6><b>{education.qualification} : </b></h6>&nbsp;
                    <p> Pass out from {education.institution} during year <b> {education.endingYear} </b> with <b>{education.percentage}%</b>.</p>
                </div>
            })}
        </div>

          <div className='divider my-3'></div>

          <div className='experience my-3'>
              <h3>Experience</h3>
              <hr />
              {user.experience.map((exp) => {
                  return <div className='d-flex align-items-center justify-content-space-between'>
                      <h6><b>{exp.Company} :</b></h6>&nbsp;
                      <p> Worked for <b>{exp.Years}</b> year at <b> {exp.Place} </b> during <b>{exp.Year_Range}</b>.</p>
                  </div>
              })}
          </div>

          <div className='divider my-3'></div>

          <div className='projects my-3'>
              <h3>Projects</h3>
              <hr />
              {user.projects.map((project) => {
                  return <div className='d-flex flex-column'>
                      <h6><b>{project.Title} :</b></h6>
                      <p> {project.Description} in year <b>{project.Year_Range}</b>.</p>
                  </div>
              })}
          </div>

          <div className='divider my-3'></div>
          
          <div className='skills my-3'>
              <h3>Skills</h3>
              <hr />
              {user.skills.map((skill) => {
                  return <div className='d-flex flex-column'>
                      <p>{skill.skillName}</p>
                  </div>
              })}
          </div>

    </div>
  )
}

export default Template1