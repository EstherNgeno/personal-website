import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styles from './Navbar.css'

const Navbar = () => {
  return (
    <Nav
      variant="pills"
      defaultActiveKey="/home"
      style={{
        marginLeft: '20px', // Indent the navbar from the left
        display: 'flex',    // Ensure tabs are horizontal
        gap: '15px',        // Add space between tabs
        padding: '10px 0',  // Add vertical padding
      }}
    >
      <Nav.Item>
        <Nav.Link className={styles.title} href="/home" style={{ color:'rgb(79, 70, 229)' }}>Esther Ngeno</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about" style={{ color:'rgb(79, 70, 229)' }}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects" style={{ color: 'rgb(79, 70, 229)'}}>Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/blog" style={{ color: 'rgb(79, 70, 229)'}}>Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/links" style={{ color: 'rgb(79, 70, 229)' }}>Links</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
