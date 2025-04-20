'use client'
import { useState } from 'react'
import { Card, Row, Col, Input, Select, Rate } from 'antd'
import Navbar from '../components/Navbar'

const { Search } = Input
const { Option } = Select

const tours = [
  {
    id: 1,
    title: 'Bali Adventure',
    description: 'Explore the beautiful beaches, ancient temples, and vibrant culture of Bali. Includes visits to Ubud, Uluwatu, and the famous rice terraces.',
    price: '$999',
    duration: '7 days',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    highlights: ['Temple visits', 'Beach activities', 'Cultural shows', 'Local cuisine']
  },
  {
    id: 2,
    title: 'European Delight',
    description: 'Discover the charm of Europe\'s most beautiful cities including Paris, Rome, and Barcelona. Experience the rich history and culture.',
    price: '$1499',
    duration: '10 days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cultural',
    highlights: ['City tours', 'Museum visits', 'Local markets', 'Historic landmarks']
  },
  {
    id: 3,
    title: 'Maldives Paradise',
    description: 'Experience luxury in the crystal clear waters of Maldives. Stay in overwater bungalows and enjoy world-class diving and spa facilities.',
    price: '$1999',
    duration: '5 days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Luxury',
    highlights: ['Private beach', 'Spa treatments', 'Water sports', 'Sunset cruises']
  },
  {
    id: 4,
    title: 'Japanese Culture Tour',
    description: 'Immerse yourself in Japanese culture with visits to Tokyo, Kyoto, and Osaka. Experience traditional tea ceremonies and modern city life.',
    price: '$1799',
    duration: '8 days',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cultural',
    highlights: ['Temple visits', 'Cherry blossom viewing', 'Sushi making', 'Bullet train experience']
  },
  {
    id: 5,
    title: 'African Safari',
    description: 'Experience the wild beauty of Africa with game drives, luxury tented camps, and breathtaking landscapes in Kenya and Tanzania.',
    price: '$2499',
    duration: '12 days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    highlights: ['Game drives', 'Hot air balloon safari', 'Cultural village visits', 'Sunset cocktails']
  },
  {
    id: 6,
    title: 'Australian Outback',
    description: 'Discover the unique landscapes and wildlife of Australia. Visit the Great Barrier Reef, Uluru, and Sydney\'s iconic landmarks.',
    price: '$2199',
    duration: '14 days',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    highlights: ['Great Barrier Reef', 'Uluru visit', 'Wildlife encounters', 'City tours']
  },
  {
    id: 7,
    title: 'Mediterranean Cruise',
    description: 'Sail through the Mediterranean visiting Greece, Italy, and Spain. Experience ancient ruins, beautiful beaches, and delicious cuisine.',
    price: '$2999',
    duration: '10 days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Luxury',
    highlights: ['Island hopping', 'Historical sites', 'Gourmet dining', 'Onboard entertainment']
  },
  {
    id: 8,
    title: 'South American Explorer',
    description: 'Journey through Peru, Chile, and Argentina. Visit Machu Picchu, explore the Atacama Desert, and experience the vibrant culture.',
    price: '$1899',
    duration: '15 days',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Adventure',
    highlights: ['Machu Picchu', 'Wine tasting', 'Desert exploration', 'Cultural experiences']
  }
]

export default function Tours() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'all' || tour.category === category
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'budget' && parseInt(tour.price.replace('$', '')) < 1000) ||
                        (priceRange === 'mid' && parseInt(tour.price.replace('$', '')) >= 1000 && parseInt(tour.price.replace('$', '')) < 2000) ||
                        (priceRange === 'luxury' && parseInt(tour.price.replace('$', '')) >= 2000)
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div style={{ paddingTop: '64px' }}>
      <Navbar />
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 className="section-title">Our Tours</h1>
        
        <div style={{ marginBottom: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Search
            placeholder="Search tours..."
            style={{ width: 300 }}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Select
            placeholder="Select Category"
            style={{ width: 200 }}
            onChange={value => setCategory(value)}
          >
            <Option value="all">All Categories</Option>
            <Option value="Adventure">Adventure</Option>
            <Option value="Cultural">Cultural</Option>
            <Option value="Luxury">Luxury</Option>
          </Select>
          <Select
            placeholder="Price Range"
            style={{ width: 200 }}
            onChange={value => setPriceRange(value)}
          >
            <Option value="all">All Prices</Option>
            <Option value="budget">Budget ($0 - $999)</Option>
            <Option value="mid">Mid-Range ($1000 - $1999)</Option>
            <Option value="luxury">Luxury ($2000+)</Option>
          </Select>
        </div>

        <Row gutter={[24, 24]}>
          {filteredTours.map(tour => (
            <Col xs={24} sm={12} md={8} key={tour.id}>
              <Card
                hoverable
                cover={<img alt={tour.title} src={tour.image} style={{ height: '200px', objectFit: 'cover' }} />}
              >
                <Card.Meta
                  title={tour.title}
                  description={
                    <div>
                      <p>{tour.description}</p>
                      <div style={{ marginTop: '10px' }}>
                        <Rate disabled defaultValue={tour.rating} />
                        <span style={{ marginLeft: '10px' }}>{tour.rating}</span>
                      </div>
                      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#1890ff', fontWeight: 'bold' }}>{tour.price}</span>
                        <span>{tour.duration}</span>
                      </div>
                      <div style={{ marginTop: '10px' }}>
                        <strong>Highlights:</strong>
                        <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                          {tour.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
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