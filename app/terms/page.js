'use client'
import { Typography, Card, Row, Col } from 'antd'
import Navbar from '../components/Navbar'

const { Title, Paragraph } = Typography

export default function Terms() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '64px' }}>
        <div className="container" style={{ padding: '40px 0' }}>
          <Row justify="center">
            <Col xs={24} sm={22} md={20} lg={18} xl={16}>
              <Card>
                <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>Terms of Service</Title>
                
                <Paragraph style={{ textAlign: 'center', marginBottom: '30px' }}>
                  Last updated: March 15, 2024
                </Paragraph>

                <Title level={2}>1. Agreement to Terms</Title>
                <Paragraph>
                  By accessing and using Tour & Travel's website and services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                  using or accessing this site.
                </Paragraph>

                <Title level={2}>2. Use License</Title>
                <Paragraph>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Tour & Travel's 
                  website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </Paragraph>
                <ul>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Tour & Travel's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>

                <Title level={2}>3. Booking and Cancellation</Title>
                <Paragraph>
                  All bookings are subject to availability and confirmation. Cancellation policies vary by tour package and will be 
                  clearly stated at the time of booking. We reserve the right to cancel or modify tours due to circumstances beyond 
                  our control.
                </Paragraph>

                <Title level={2}>4. User Accounts</Title>
                <Paragraph>
                  When you create an account with us, you must provide accurate, complete, and current information. Failure to do so 
                  constitutes a breach of the Terms, which may result in immediate termination of your account.
                </Paragraph>

                <Title level={2}>5. Intellectual Property</Title>
                <Paragraph>
                  The Service and its original content, features, and functionality are owned by Tour & Travel and are protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </Paragraph>

                <Title level={2}>6. Limitation of Liability</Title>
                <Paragraph>
                  In no event shall Tour & Travel or its suppliers be liable for any damages (including, without limitation, damages 
                  for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
                  on Tour & Travel's website.
                </Paragraph>

                <Title level={2}>7. Links to Other Websites</Title>
                <Paragraph>
                  Our Service may contain links to third-party websites or services that are not owned or controlled by Tour & Travel. 
                  We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party 
                  websites or services.
                </Paragraph>

                <Title level={2}>8. Changes to Terms</Title>
                <Paragraph>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 
                  30 days' notice prior to any new terms taking effect.
                </Paragraph>

                <Title level={2}>9. Contact Us</Title>
                <Paragraph>
                  If you have any questions about these Terms, please contact us:
                </Paragraph>
                <ul>
                  <li>By email: legal@tourandtravel.com</li>
                  <li>By phone: +1 (555) 123-4567</li>
                  <li>By mail: 123 Travel Street, Suite 100, New York, NY 10001</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  )
} 