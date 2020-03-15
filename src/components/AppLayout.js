import PropTypes from 'prop-types';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ScrollTopButton from 'meiko/ScrollTopButton';
import { useGlobalStyles } from 'meiko/hooks/useGlobalStyles';

import Header from './AppHeader';
import Footer from './AppFooter';
import { rhythm } from '@/utils/typography';

const headerHeight = 102;

function Layout({ children }) {
  useGlobalStyles({ includeFont: false });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px ${rhythm(3 / 4)} ${rhythm(1)}`,
          paddingTop: 0
        }}
      >
        <main style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
          {children}
        </main>
        <ScrollTopButton />
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
