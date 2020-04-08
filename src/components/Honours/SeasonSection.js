import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { capitalise } from 'ayaka/capitalise';

import HGTable from '@/components/Table/HGTable';
import PageAnchor from '@/components/PageAnchor';

import averageRatedTotal from '@/utils/averageRatedTotal';
import { rhythm } from '@/utils/typography';
import { selectTop } from './utils';

function SeasonSection({ slug, title, hideCarryOvers, items, ...props }) {
  const sectionId = `section_${slug.replace(/\//g, '')}`;
  const rows = selectTop(items, { top: 3, hideCarryOvers });
  const { average, ratedCount } = averageRatedTotal({ series: items });

  return (
    <section id={sectionId} style={{ margin: `${rhythm(1)} 0` }}>
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <PageAnchor id={sectionId} />
        <Link
          to={slug}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <h4 className="season-link" style={{ margin: `${rhythm(3 / 4)} 0` }}>
            {capitalise(title)}
          </h4>
        </Link>
      </header>
      <p>
        {isNaN(average)
          ? `Average rating unavailable`
          : `Average: ${average} for ${ratedCount} rated series`}
      </p>
      <HGTable hideSeason {...props} items={rows} />
    </section>
  );
}

SeasonSection.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hideCarryOvers: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SeasonSection;
