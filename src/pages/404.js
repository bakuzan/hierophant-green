import React from 'react';
import { Link } from 'gatsby';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';

const NotFoundPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="Page Not found" />
    <h2>Not Found</h2>
    <p>This is not the page you are looking for...</p>
    <Link to="/">Return to the homepage</Link>
  </Layout>
);

export default NotFoundPage;
