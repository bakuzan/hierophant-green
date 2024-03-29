import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { rhythm } from '../utils/typography';

function Personal() {
  const data = useStaticQuery(graphql`
    query PersonalMetaQuery {
      site {
        siteMetadata {
          author
          malUrl
        }
      }
      profilePic: file(name: { eq: "profile-pic" }) {
        childImageSharp {
          gatsbyImageData(
            width: 75
            height: 75
            transformOptions: { cropFocus: NORTH }
            layout: FIXED
          )
        }
      }
    }
  `);

  const info = data.site.siteMetadata;
  const avatar = getImage(data.profilePic);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: rhythm(1)
      }}
    >
      <GatsbyImage
        image={avatar}
        alt={info.author}
        style={{
          marginRight: rhythm(1 / 3),
          marginBottom: 0,
          borderRadius: '50%'
        }}
      />
      <p style={{ maxWidth: 300, marginBottom: 0 }}>
        Seasonal rating data by{' '}
        <a href={info.malUrl} target="_blank" rel="noopener noreferrer">
          {info.author}
        </a>
        . Behold my idiosyncratic taste.
      </p>
    </div>
  );
}

export default Personal;
