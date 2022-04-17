import React from 'react'
import '../../resources/templates.css'

function Template2() {
  const user = JSON.parse(localStorage.getItem('resume_builder-user'));
  return (
    <div className='template2-parent'>

      <div className='heading d-flex justify-content-between'>
        <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
        <div>
          <p>{user.email}</p>
          <p>{user.mobileNumber}</p>
        </div>

      </div>
      <div className='divider'></div>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='objective mt-3'>
            <h3> Objective </h3>
            <hr />
            <p my-3>{user.objective}</p>
          </div>

          <div className='education mt-3'>
            <h3>Education</h3>
            <hr />
            {user.education.map((education) => {
              return <div>
                <div className='title mb-2'>
                  {education.qualification} :
                </div>
                <div>
                  <ul>
                    <li>
                      {<p>Studied from : <b>{education.institution}</b></p>}
                    </li>
                    <li>
                      {<p>Percentage achieved : <b>{education.percentage}%</b></p>}
                    </li>
                    <li>
                      {<p>Pass out Year : <b>{education.endingYear}</b></p>}
                    </li>
                  </ul>
                </div>
              </div>
            })}

          </div>

          <div className='skills mt-3 mb-2'>
            <h3>Skills</h3>
            <hr />
            {user.skills.map((skill) => {

              return <div className='d-flex flex-column'>
                <li>{skill.skillName}</li>
              </div>

            })}
          </div>
        </div >

        <div className='col-sm-1'>
          <div class="v-line"></div>
        </div>

        <div className='col-sm-6 my-3'>
          <div className='experience'>
            <h3>Experience</h3>
            <hr />

            {user.experience.map((exp) => {
              return <ul><div className='d-flex flex-column'>
                <li>
                <h6>
                  {exp.Company}
                </h6>

                <ul>
                  <li>
                    <p><b>City : </b>{exp.Place}</p>
                  </li>
                  <li>
                    <p>Worked for <b>{exp.Years} year</b> during <b>{exp.Year_Range}</b></p>
                  </li>
                </ul>
                </li>
              </div>
              </ul>
            })}
          </div>
          <div className='projects'>
            <h3>Projects</h3>
            <hr />

            {user.projects.map((project) => {
              return<ul> <div className='d-flex flex-column'>
               
                <li><h6><b>{project.Title} :</b></h6></li>
                  <p> {project.Description} in year <b>{project.Year_Range}</b>.</p>
              </div>
              </ul>
            })}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Template2