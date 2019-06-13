import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not found" />
    <h2>Not Found</h2>
    <p>This is not the page you are looking for...</p>
    <Link to="/">Return to the homepage</Link>
  </Layout>
);

export default NotFoundPage;
