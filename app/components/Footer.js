'use client'
import { Typography, Row, Col, Space } from 'antd'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
import Link from 'next/link'

const { Text } = Typography

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#001529', 
      color: 'white',
      padding: '40px 20px'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={6}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px' }}>Tour & Travel</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                Your trusted partner for memorable travel experiences. We specialize in creating unforgettable journeys around the world.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={6}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px' }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Home</Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/tours" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Tours</Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>About Us</Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={6}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px' }}>Support</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/privacy-policy" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Privacy Policy</Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Terms & Conditions</Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={6}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '20px' }}>Connect With Us</h3>
              <Space size="large">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  <FacebookOutlined style={{ fontSize: '24px' }} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  <TwitterOutlined style={{ fontSize: '24px' }} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  <InstagramOutlined style={{ fontSize: '24px' }} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  <YoutubeOutlined style={{ fontSize: '24px' }} />
                </a>
              </Space>
            </div>
          </Col>
        </Row>
        <div style={{ 
          marginTop: '40px', 
          paddingTop: '20px', 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                © {new Date().getFullYear()} Tour & Travel. All rights reserved.
              </Text>
            </Col>
            <Col>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                Designed and developed with ❤️ by{' '}
                <a 
                  href="https://rajankumargoyal.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  Rajan
                </a>
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  )
} 