'use client'
import { Typography, Card } from 'antd'
import Navbar from '../components/Navbar'

const { Title, Paragraph } = Typography

export default function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '64px' }}>
      <Navbar />
      <div className="container" style={{ padding: '40px 0' }}>
        <Card>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>Privacy Policy</Title>
        
          <Title level={2}>1. Introduction</Title>
          <Paragraph>
            Welcome to Tour & Travel. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </Paragraph>

          <Title level={2}>2. Information We Collect</Title>
          <Paragraph>
            We may collect, use, store and transfer different kinds of personal data about you, including:
          </Paragraph>
          <ul>
            <li>Identity Data (name, username, title)</li>
            <li>Contact Data (email address, phone number)</li>
            <li>Technical Data (IP address, browser type, device information)</li>
            <li>Usage Data (how you use our website)</li>
            <li>Marketing and Communications Data (your preferences)</li>
          </ul>

          <Title level={2}>3. How We Use Your Information</Title>
          <Paragraph>
            We use your personal data for the following purposes:
          </Paragraph>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <Title level={2}>4. Data Security</Title>
          <Paragraph>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
            used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, 
            contractors, and other third parties who have a business need to know.
          </Paragraph>

          <Title level={2}>5. Your Legal Rights</Title>
          <Paragraph>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
            including the right to:
          </Paragraph>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>

          <Title level={2}>6. Cookies</Title>
          <Paragraph>
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </Paragraph>

          <Title level={2}>7. Changes to This Privacy Policy</Title>
          <Paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date.
          </Paragraph>

          <Title level={2}>8. Contact Us</Title>
          <Paragraph>
            If you have any questions about this Privacy Policy, please contact us:
          </Paragraph>
          <ul>
            <li>By email: privacy@tourandtravel.com</li>
            <li>By phone: +1 (555) 123-4567</li>
            <li>By mail: 123 Travel Street, Suite 100, New York, NY 10001</li>
          </ul>
        </Card>
      </div>
    </div>
  )
} 