'use client'
import { Card, Row, Col, Input, Tag } from 'antd'
import { CalendarOutlined, UserOutlined, TagOutlined } from '@ant-design/icons'
import Navbar from '../components/Navbar'

const { Search } = Input

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Must-Visit Destinations in 2024',
    excerpt: 'Discover the most exciting travel destinations for the upcoming year...',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'March 15, 2024',
    author: 'John Doe',
    category: 'Travel Tips',
    tags: ['Destinations', 'Travel Guide', '2024'],
  },
  {
    id: 2,
    title: 'How to Travel on a Budget',
    excerpt: 'Learn the best tips and tricks for traveling without breaking the bank...',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'March 10, 2024',
    author: 'Jane Smith',
    category: 'Budget Travel',
    tags: ['Budget', 'Tips', 'Savings'],
  },
  {
    id: 3,
    title: 'The Ultimate Packing Guide',
    excerpt: 'Never forget an essential item again with our comprehensive packing guide...',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'March 5, 2024',
    author: 'Mike Johnson',
    category: 'Travel Tips',
    tags: ['Packing', 'Essentials', 'Guide'],
  },
  {
    id: 4,
    title: 'Sustainable Travel: How to Reduce Your Impact',
    excerpt: 'Learn how to travel responsibly and minimize your environmental footprint...',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'February 28, 2024',
    author: 'Sarah Wilson',
    category: 'Sustainable Travel',
    tags: ['Eco-friendly', 'Sustainability', 'Green Travel'],
  },
]

export default function Blog() {
  return (
    <div style={{ paddingTop: '64px' }}>
      <Navbar />
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 className="section-title">Travel Blog</h1>

        <div style={{ marginBottom: '40px' }}>
          <Search
            placeholder="Search blog posts..."
            style={{ width: 300 }}
          />
        </div>

        <Row gutter={[24, 24]}>
          {blogPosts.map(post => (
            <Col xs={24} md={12} key={post.id}>
              <Card
                hoverable
                cover={<img alt={post.title} src={post.image} style={{ height: '200px', objectFit: 'cover' }} />}
              >
                <div style={{ marginBottom: '15px' }}>
                  <Tag color="blue">{post.category}</Tag>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{post.title}</h2>
                <p style={{ marginBottom: '20px' }}>{post.excerpt}</p>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <CalendarOutlined style={{ marginRight: '8px' }} />
                  <span>{post.date}</span>
                  <UserOutlined style={{ marginLeft: '16px', marginRight: '8px' }} />
                  <span>{post.author}</span>
                </div>

                <div>
                  <TagOutlined style={{ marginRight: '8px' }} />
                  {post.tags.map(tag => (
                    <Tag key={tag} style={{ marginRight: '8px', marginBottom: '8px' }}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
} 