import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Services() {
    return (
        <div className='w-100' style={{ overflowX: 'auto' }}>
            <Row>
                <Col className='bg-info text-center text-white p-4 col-sm-6 col-md-4'>
                    <div className="material-symbols-outlined p-4" style={{ fontSize: '84px' }} >
                        integration_instructions
                    </div>
                    {/* <img width={'100px'} src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_statistics-512.png" className='rounded mx-auto d-block my-4' /> */}
                    <h4>Web Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam dolorem odit repellendus asperiores magni deleniti, sint neque delectus rerum?</p>
                </Col>
                <Col className='bg-info text-center text-white p-4 col-sm-6 col-md-4'>
                    <div className="material-symbols-outlined p-4" style={{ fontSize: '84px' }} >
                        phone_iphone
                    </div>
                    {/* <img width={'100px'} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_developer_mode_48px-512.png" className='rounded mx-auto d-block my-4' /> */}
                    <h4>Software Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio qui temporibus, voluptatum natus aliquam quo assumenda atque molestias error.</p>
                </Col>
                <Col className='bg-info text-center text-white p-4 col-sm-6 col-md-4'>
                    <div className="material-symbols-outlined p-4" style={{ fontSize: '84px' }}>
                        query_stats
                    </div>
                    {/* <img width={'100px'} src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_statistics-512.png" className='rounded mx-auto d-block my-4' /> */}
                    <h4>Data Science</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore id aliquid odio repudiandae dignissimos minima omnis expedita tenetur deserunt pariatur.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Services