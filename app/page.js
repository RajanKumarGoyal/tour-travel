'use client'
import { Typography, Card, Row, Col, Button } from 'antd'
import { SearchOutlined, GlobalOutlined, TeamOutlined, SafetyOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image'

const { Title, Paragraph } = Typography

export default function Home() {
  const featuredTours = [
    {
      id: 1,
      title: 'Bali Adventure',
      description: 'Explore the beautiful beaches and culture of Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'European Delight',
      description: 'Discover the charm of Europe\'s most beautiful cities',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Maldives Paradise',
      description: 'Experience luxury in the crystal clear waters of Maldives',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        height: '80vh',
        minHeight: '500px',
        maxHeight: '800px',
        width: '100%',
        overflow: 'hidden'
      }}>
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Travel Hero"
          fill
          priority
          quality={75}
          sizes="100vw"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 20px'
        }}>
          <Title level={1} style={{ 
            color: 'white', 
            marginBottom: '20px',
            fontSize: 'clamp(2rem, 5vw, 4rem)'
          }}>
            Discover Your Next Adventure
          </Title>
          <Paragraph style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
            maxWidth: '800px', 
            marginBottom: '30px' 
          }}>
            Explore the world with our curated travel experiences
          </Paragraph>
          <Link href="/tours">
            <Button type="primary" size="large">
              Find Your Tour
            </Button>
          </Link>
        </div>
      </div>

      {/* Rest of the content */}
      <div style={{ padding: '40px 20px' }}>
        <section className="section">
          <div className="container">
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Featured Tours</Title>
            <Row gutter={[24, 24]}>
              {featuredTours.map((tour) => (
                <Col xs={24} sm={12} md={8} key={tour.id}>
                  <Card
                    hoverable
                    cover={<img alt={tour.title} src={tour.image} style={{ height: '200px', objectFit: 'cover' }} />}
                  >
                    <Card.Meta
                      title={tour.title}
                      description={tour.description}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#f5f5f5', padding: '60px 0' }}>
          <div className="container">
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Us</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={8}>
                <div style={{ textAlign: 'center' }}>
                  <GlobalOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                  <Title level={3} style={{ margin: '16px 0' }}>Worldwide Tours</Title>
                  <Paragraph>Explore destinations across the globe with our expert guides</Paragraph>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div style={{ textAlign: 'center' }}>
                  <TeamOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                  <Title level={3} style={{ margin: '16px 0' }}>Best Services</Title>
                  <Paragraph>Experience top-notch service and comfort throughout your journey</Paragraph>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div style={{ textAlign: 'center' }}>
                  <SafetyOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                  <Title level={3} style={{ margin: '16px 0' }}>Expert Guides</Title>
                  <Paragraph>Learn from experienced guides who know the destinations inside out</Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </div>
  )
} 