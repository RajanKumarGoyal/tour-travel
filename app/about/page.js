'use client'
import { Card, Row, Col, Avatar } from 'antd'
import Navbar from '../components/Navbar'

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'With over 15 years of experience in the travel industry, John leads our team with passion and expertise.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Travel Director',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    description: 'Jane ensures that every tour is perfectly planned and executed, making your travel experience unforgettable.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Customer Experience Manager',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    description: 'Mike is dedicated to making sure every customer has the best possible experience with our services.',
  },
]

export default function About() {
  return (
    <div style={{ paddingTop: '64px' }}>
      <Navbar />
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 className="section-title">About Us</h1>

        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Story</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            Founded in 2010, Tour & Travel has been helping travelers explore the world with confidence and ease.
            We believe that travel should be accessible, enjoyable, and memorable for everyone. Our team of experienced
            professionals works tirelessly to create unique travel experiences that exceed expectations.
          </p>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Our Mission</h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card style={{ height: '100%' }}>
                <h3 style={{ color: '#1890ff', marginBottom: '15px' }}>Quality Service</h3>
                <p>We are committed to providing the highest quality service to our customers, ensuring their complete satisfaction.</p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card style={{ height: '100%' }}>
                <h3 style={{ color: '#1890ff', marginBottom: '15px' }}>Sustainable Travel</h3>
                <p>We promote responsible tourism that benefits local communities and preserves natural resources.</p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card style={{ height: '100%' }}>
                <h3 style={{ color: '#1890ff', marginBottom: '15px' }}>Customer Satisfaction</h3>
                <p>Our success is measured by the satisfaction of our customers and their memorable travel experiences.</p>
              </Card>
            </Col>
          </Row>
        </div>

        <div>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Our Team</h2>
          <Row gutter={[24, 24]}>
            {teamMembers.map(member => (
              <Col xs={24} md={8} key={member.id}>
                <Card style={{ textAlign: 'center' }}>
                  <Avatar size={120} src={member.image} style={{ marginBottom: '20px' }} />
                  <h3 style={{ marginBottom: '10px' }}>{member.name}</h3>
                  <p style={{ color: '#1890ff', marginBottom: '15px' }}>{member.position}</p>
                  <p>{member.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
} 