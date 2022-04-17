import React from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import template1_img from './templates/template1.png'
import template2_img from './templates/template2.png'

//content written in home page inside defaultLayout is rendered
function Home() {
  const templates = [
    {
      title:'Basic Resume',
      image: template1_img,
    },
    {
      title: 'Divided Section Resume',
      image: template2_img,
    }
  ];

  const navigate = useNavigate();
  return (
      <DefaultLayout>
          <div className='row home-page'>
              {templates.map((template, index)=>{
                 return <div className='col-md-4 col-sm-12 home'>
                          <div className='template'>
                            <img src={template.image} alt={`Template ${index+1}`}/>
                              <div className='text'>
                                <p>{template.title}</p>
                                <button onClick={()=>{
                                  navigate(`/templates/${index + 1}`)
                                }}>Use</button>
                              </div>
                          </div>
                        </div>
              })}
          </div>
      </DefaultLayout>
  )
}

export default Home
