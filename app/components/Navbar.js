'use client'
import { useState, useMemo } from 'react'
import { Menu, Button, Drawer } from 'antd'
import Link from 'next/link'
import { MenuOutlined } from '@ant-design/icons'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [visible, setVisible] = useState(false)

  const menuItems = useMemo(() => [
    {
      key: 'home',
      label: <Link href="/" passHref legacyBehavior><a>Home</a></Link>,
    },
    {
      key: 'tours',
      label: <Link href="/tours" passHref legacyBehavior><a>Tours</a></Link>,
    },
    {
      key: 'about',
      label: <Link href="/about" passHref legacyBehavior><a>About Us</a></Link>,
    },
    {
      key: 'contact',
      label: <Link href="/contact" passHref legacyBehavior><a>Contact</a></Link>,
    },
  ], [])

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Tour & Travel
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Menu 
            mode="horizontal" 
            items={menuItems} 
            style={{ border: 'none' }} 
            selectedKeys={[]}
          />
        </div>

        {/* Mobile Menu Button */}
        <Button 
          type="text" 
          icon={<MenuOutlined />} 
          onClick={showDrawer} 
          className={styles.mobileMenuButton} 
        />

        {/* Mobile Drawer */}
        <Drawer 
          title="Menu" 
          placement="right" 
          onClose={onClose} 
          open={visible} 
          width={250}
        >
          <Menu 
            mode="vertical" 
            items={menuItems} 
            style={{ border: 'none' }} 
            selectedKeys={[]}
          />
        </Drawer>
      </div>
    </nav>
  )
} 