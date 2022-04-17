import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Form, Tabs,Button, Spin, message } from 'antd';
import Personalinfo from '../components/Personalinfo';
import SkillEducation from '../components/SkillEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios'
import { useState } from 'react';


const { TabPane } = Tabs;

function Profile() {
    function callback(key) {
        console.log(key);
    }
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('resume_builder-user'))
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result = await axios.post('/api/user/update', {...values, _id : user._id});
            localStorage.setItem('resume_builder-user', JSON.stringify(result.data))
            setLoading(false);
            message.success('Profile Updated Successfully')//ant design component
        } catch (error) {
            message.error('Profile Failed to update')
        }
    };
  return (
    <DefaultLayout>
        {loading && <Spin size="large"/>}
        <div className='update-profile'>
        <Form layout='vertical' onFinish={(values)=>{onFinish(values)}} initialValues={user}>
          <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Personal info" key="1">
                  <Personalinfo />
              </TabPane>
              <TabPane tab="Skills and Education" key="2">
                  <SkillEducation />
              </TabPane>
              <TabPane tab="Experience / Projects" key="3">
                  <ExperienceProjects />
              </TabPane>
          </Tabs>

          <Button htmlType='submit'>
              Update profile
          </Button>
        </Form>
        </div>
    </DefaultLayout>
  )
}

export default Profile