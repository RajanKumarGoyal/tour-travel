'use client'
import { Card, Row, Col, Input } from 'antd'
import Navbar from '../components/Navbar'

const { Search } = Input

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Known for its volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tours: 15,
  },
  {
    id: 2,
    name: 'Paris, France',
    description: 'The City of Light, famous for its cafe culture, the Eiffel Tower and the Louvre.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tours: 12,
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    description: 'A mix of ultramodern and traditional, from neon-lit skyscrapers to historic temples.',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tours: 10,
  },
  {
    id: 4,
    name: 'New York, USA',
    description: 'The city that never sleeps, home to Times Square, Central Park, and the Statue of Liberty.',
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tours: 18,
  },
  {
    id: 5,
    name: 'Sydney, Australia',
    description: 'Famous for its harbor, the Sydney Opera House, and the Sydney Harbour Bridge.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tours: 8,
  },
  {
    id: 6,
    name: 'Cape Town, South Africa',
    description: 'Known for its harbor, natural setting, and landmarks like Table Mountain.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tours: 7,
  },
]

export default function Destinations() {
  return (
    <div style={{ paddingTop: '64px' }}>
      <Navbar />
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 className="section-title">Popular Destinations</h1>
        
        <div style={{ marginBottom: '40px' }}>
          <Search
            placeholder="Search destinations..."
            style={{ width: 300 }}
          />
        </div>

        <Row gutter={[24, 24]}>
          {destinations.map(destination => (
            <Col xs={24} sm={12} md={8} key={destination.id}>
              <Card
                hoverable
                cover={<img alt={destination.name} src={destination.image} style={{ height: '200px', objectFit: 'cover' }} />}
              >
                <Card.Meta
                  title={destination.name}
                  description={
                    <div>
                      <p>{destination.description}</p>
                      <div style={{ marginTop: '10px', color: '#1890ff' }}>
                        {destination.tours} tours available
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
} 