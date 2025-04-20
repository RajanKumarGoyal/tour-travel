'use client'
import { useState } from 'react'
import { Card, Row, Col, Input, Modal } from 'antd'
import Navbar from '../components/Navbar'

const { Search } = Input

const galleryImages = [
  {
    id: 1,
    title: 'Bali Sunset',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Beach',
  },
  {
    id: 2,
    title: 'Eiffel Tower',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'City',
  },
  {
    id: 3,
    title: 'Maldives Paradise',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Beach',
  },
  {
    id: 4,
    title: 'Tokyo Streets',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'City',
  },
  {
    id: 5,
    title: 'Safari Adventure',
    location: 'Serengeti, Tanzania',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Wildlife',
  },
  {
    id: 6,
    title: 'Mountain View',
    location: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Mountain',
  },
  {
    id: 7,
    title: 'Desert Sunset',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Desert',
  },
  {
    id: 8,
    title: 'Northern Lights',
    location: 'Iceland',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Nature',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...new Set(galleryImages.map(image => image.category))]

  return (
    <div style={{ paddingTop: '64px' }}>
      <Navbar />
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 className="section-title">Travel Gallery</h1>

        <div style={{ marginBottom: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Search
            placeholder="Search images..."
            style={{ width: 300 }}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <Row gutter={[24, 24]}>
          {filteredImages.map(image => (
            <Col xs={24} sm={12} md={8} lg={6} key={image.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={image.title}
                    src={image.image}
                    style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => setSelectedImage(image)}
                  />
                }
              >
                <Card.Meta
                  title={image.title}
                  description={
                    <div>
                      <p>{image.location}</p>
                      <span style={{ color: '#1890ff' }}>{image.category}</span>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          title={selectedImage?.title}
          open={!!selectedImage}
          onCancel={() => setSelectedImage(null)}
          footer={null}
          width={800}
        >
          {selectedImage && (
            <div>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{ width: '100%', marginBottom: '20px' }}
              />
              <p><strong>Location:</strong> {selectedImage.location}</p>
              <p><strong>Category:</strong> {selectedImage.category}</p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
} 