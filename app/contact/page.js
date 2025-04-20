'use client'
import { Typography, Row, Col, Card, Divider } from 'antd'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons'
import Image from 'next/image'

const { Title, Paragraph } = Typography

export default function Contact() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
          Get in Touch
        </Title>

        <Row gutter={[32, 32]} style={{ marginBottom: '40px' }}>
          <Col xs={24} md={12}>
            <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Contact Us"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <Title level={2} style={{ marginBottom: '24px' }}>Contact Information</Title>
              
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <PhoneOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '16px' }} />
                  <div>
                    <Title level={4} style={{ margin: 0 }}>Phone</Title>
                    <Paragraph style={{ margin: '8px 0 0 0' }}>+1 (555) 123-4567</Paragraph>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <MailOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '16px' }} />
                  <div>
                    <Title level={4} style={{ margin: 0 }}>Email</Title>
                    <Paragraph style={{ margin: '8px 0 0 0' }}>info@tourandtravel.com</Paragraph>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <EnvironmentOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '16px' }} />
                  <div>
                    <Title level={4} style={{ margin: 0 }}>Address</Title>
                    <Paragraph style={{ margin: '8px 0 0 0' }}>
                      123 Travel Street<br />
                      Suite 100<br />
                      New York, NY 10001
                    </Paragraph>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ClockCircleOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '16px' }} />
                  <div>
                    <Title level={4} style={{ margin: 0 }}>Business Hours</Title>
                    <Paragraph style={{ margin: '8px 0 0 0' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <Card style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
                Visit Our Office
              </Title>
              <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176661378654!2d-73.9878448!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
} 