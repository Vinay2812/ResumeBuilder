import React from 'react'
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const {TextArea} = Input

function ExperienceProjects() {
    return (
        <div>
            <Form.List name="experience">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            <h6>Experience</h6>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item label="Company"
                                            {...restField}
                                            name={[name, 'Company']}
                                            rules={[{ required: true, message: 'Missing Company' }]}
                                        >
                                            <Input placeholder="Company" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item label="Years"
                                            {...restField}
                                            name={[name, 'Years']}
                                            rules={[{ required: true, message: 'Missing Years' }]}
                                        >
                                            <Input placeholder="Years" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item label="Place"
                                            {...restField}
                                            name={[name, 'Place']}
                                            rules={[{ required: true, message: 'Missing Place' }]}
                                        >
                                            <Input placeholder="Place" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item label="Year Range"
                                            {...restField}
                                            name={[name, 'Year_Range']}
                                            rules={[{ required: true, message: 'Missing Year Range' }]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.List name="projects">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            <h6>Projects</h6>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item label="Title"
                                            {...restField}
                                            name={[name, 'Title']}
                                            rules={[{ required: true, message: 'Missing Title' }]}
                                        >
                                            <Input placeholder="Title" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Item label="Description"
                                            {...restField}
                                            name={[name, 'Description']}
                                            rules={[{ required: true, message: 'Missing Description' }]}
                                        >
                                            <TextArea placeholder="Description" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item label="Year Range"
                                            {...restField}
                                            name={[name, 'Year_Range']}
                                            rules={[{ required: true, message: 'Missing Year Range' }]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-1'>
                                        <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato', marginTop: '10px' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add project
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default ExperienceProjects