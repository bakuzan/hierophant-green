import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { words } from '../consts';
import { rhythm } from '../utils/typography';

function getRandomAdj() {
  return words[Math.floor(Math.random() * words.length)];
}

function Personal() {
  const data = useStaticQuery(graphql`
    query PersonalMetaQuery {
      site {
        siteMetadata {
          author
          avatar
          malUrl
        }
      }
    }
  `);

  const info = data.site.siteMetadata;
  const adjective = getRandomAdj();

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(1)
      }}
    >
      <img
        src={info.avatar}
        alt={info.author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(1.7),
          height: rhythm(1.75),
          borderRadius: '50%'
        }}
      />
      <p style={{ maxWidth: 290 }}>
        Seasonal rating data by{' '}
        <a href={info.malUrl} target="_blank" rel="noopener noreferrer">
          {info.author}
        </a>
        . I reveal my {adjective} taste
      </p>
    </div>
  );
}

export default Personal;
