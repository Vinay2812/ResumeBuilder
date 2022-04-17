import React from 'react'
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

function SkillEducation() {
    return (
        <div>
            <Form.List name="education">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            <h6>Education</h6>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item label="Qualification"
                                            {...restField}
                                            name={[name, 'qualification']}
                                            rules={[{ required: true, message: 'Missing Qualification' }]}
                                        >
                                            <Input placeholder="Qualification" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item label="Percentage"
                                            {...restField}
                                            name={[name, 'percentage']}
                                            rules={[{ required: true, message: 'Missing Percentage' }]}
                                        >
                                            <Input placeholder="Percentage" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item label="Institution"
                                            {...restField}
                                            name={[name, 'institution']}
                                            rules={[{ required: true, message: 'Missing Institution' }]}
                                        >
                                            <Input placeholder="Institution" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item label="Ending year"
                                            {...restField}
                                            name={[name, 'endingYear']}
                                            rules={[{ required: true, message: 'Missing Ending Year' }]}
                                        >
                                            <Input placeholder="Ending Year"/>
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{fontSize:25, color:'tomato'}}onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Education
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.List name="skills">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            <h6>Skills</h6>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item label="Skill name"
                                            {...restField}
                                            name={[name, 'skillName']}
                                            rules={[{ required: true, message: 'Missing Skill name' }]}
                                        >
                                            <Input placeholder="Skill name" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Item label="rating out of 10"
                                            {...restField}
                                            name={[name, 'rating']}
                                            rules={[{ required: true, message: 'Missing rating' }]}
                                        >
                                            <Input placeholder="rating out of 10" />
                                        </Form.Item>
                                    </div>
                                    
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato' , marginTop:'10px'}} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default SkillEducation