import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './About.css'

function About() {
  return (
    <div style={{ overflowX: 'auto' }}>
        <Row>
            <Col className='m-4'>
                <img src="https://i.pinimg.com/originals/bc/4b/bd/bc4bbd2ce6b43c390187869173b36130.jpg" className='shadow bg-body rounded' />
            </Col>
            <Col className='m-4 text-black shadow bg-body rounded'>
                <h1>About</h1>
                <div className='underline mb-4'></div>
                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint exercitationem facere officia odit vitae, praesentium consequuntur suscipit ipsam dolore beatae dicta nobis quas optio sunt consequatur est ratione repellat a! Quis voluptate cum illum aliquam mollitia sed, nesciunt, excepturi itaque, quidem praesentium asperiores repudiandae ullam labore et nostrum at deleniti corporis totam cupiditate aperiam! Accusantium qui nesciunt pariatur, ducimus maxime reprehenderit placeat deleniti illo reiciendis quas accusamus enim blanditiis dolor quis architecto autem iusto, voluptates, harum corrupti suscipit consectetur adipisci. Praesentium quae odio consectetur perspiciatis maiores doloremque ex ratione ea tempore ad assumenda velit, modi asperiores necessitatibus quaerat eos.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum assumenda consequuntur, quam hic tempora quia atque eius dolorem. Ea velit quibusdam fugiat at, cupiditate odit unde quod, animi soluta, minima quia. Ex voluptates cumque sit. Quae, laboriosam, ullam facere placeat fuga dolores recusandae voluptatibus corrupti molestias, minus repellat? Voluptatibus, dolores?</p>
            </Col>
        </Row>
    </div>
  )
}

export default About