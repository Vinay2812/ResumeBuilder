import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DefaultLayout from '../../components/DefaultLayout'
import Template1 from './Template1'
import Template2 from './Template2'

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'antd'

function Templates() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const navigate = useNavigate()
    const router = useParams()
    const getTemplate = ()=>{
        switch(router.id){
          case '1' : {
            return <Template1 />
          }
          case '2' : {
            return <Template2 />
          }
        }
    }
  return (
    <DefaultLayout>
      <div className='d-flex justify-content-end mt-5 px-5'>

        <Button className='mx-2 back-btn' onClick={()=>{navigate('/home')}}>Back</Button>
        <Button onClick={handlePrint}>Print</Button>

      </div>
      <div ref={componentRef}>
        {getTemplate()}
      </div>
    </DefaultLayout>
  )
}

export default Templates