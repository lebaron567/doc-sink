// src/components/NoSidebar.js
import React from 'react';
import Layout from '@theme/Layout';

export default function NoSidebar({ children }) {
  return (
    <Layout>
      <div style={{ margin: '0 auto', maxWidth: '80%' }}>
        {children}
      </div>
    </Layout>
  );
}
