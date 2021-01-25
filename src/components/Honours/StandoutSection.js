import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import NewTabLink from 'meiko/NewTabLink';

import Table from '@/components/Table';
import PageAnchor from '@/components/PageAnchor';

import storage from '@/utils/storage';
import { rhythm } from '@/utils/typography';
import { orderStandoutEpisodes } from './utils';

const standoutHeaders = [
  { text: '#', style: { textAlign: 'right' } },
  { text: 'Title' },
  { text: 'Episode Rating', style: { textAlign: 'right' } },
  { text: 'Rating difference', style: { textAlign: 'right' } }
];

function StandoutSection({ sectionId, items }) {
  const standOutRating = storage.getKey('standoutEpisodeRating');
  const standOutSectionId = `${sectionId}_standout`;

  return (
    <section id={standOutSectionId} style={{ margin: `${rhythm(1)} 0` }}>
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <PageAnchor id={standOutSectionId} />
        <h4
          className="season-link season-link--no-hover"
          style={{ margin: `${rhythm(3 / 4)} 0` }}
        >
          Standout episodes of the year
        </h4>
      </header>
      <p>
        The top 5 episodes rating in at {standOutRating} or above.
        <br /> Ordered by rating desc, rating difference to overall series
        rating desc, and title asc.
      </p>
      {items.length ? (
        <Table headers={standoutHeaders}>
          {() =>
            items
              .sort(orderStandoutEpisodes)
              .slice(0, 5)
              .map((x, i) => {
                const number = i + 1;
                const season = `${x.season.season} ${x.season.year}`;
                const hasRating = x.rating > 0;
                const diffMessage = hasRating
                  ? 'Rating difference is the episode rating minus the series rating.'
                  : 'Rating difference cannot be calculated as the series does not currently have a rating.';

                return (
                  <tr key={x.episodeId}>
                    <td column-title="#" className="cell cell--rhs">
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>{number}</div>
                        <div style={{ fontSize: `0.75rem` }}>{season}</div>
                      </div>
                    </td>
                    <td column-title="Title" className="cell">
                      <div style={{ display: 'flex' }}>
                        <Img
                          style={{ flex: `0 0 96px` }}
                          {...x.image.childImageSharp}
                        />
                        <div style={{ margin: `0 ${rhythm(1 / 2)}` }}>
                          <NewTabLink
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-start'
                            }}
                            href={`https://myanimelist.net/anime/${x.malId}`}
                          >
                            {x.title}
                          </NewTabLink>
                          <div style={{ fontSize: `0.75rem` }}>
                            Episode {x.episode.episode}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      column-title="Episode Rating"
                      className="cell cell--rhs"
                    >
                      {x.episode.rating}
                    </td>
                    <td
                      column-title="Rating Difference"
                      className="cell cell--rhs"
                      aria-label={diffMessage}
                      title={diffMessage}
                    >
                      {hasRating ? x.episode.rating - x.rating : 'N/A'}
                    </td>
                  </tr>
                );
              })
          }
        </Table>
      ) : (
        <div>This year saw no stand out episodes.</div>
      )}
    </section>
  );
}

StandoutSection.propTypes = {
  sectionId: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StandoutSection;
