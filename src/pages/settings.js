import React, { useState } from 'react';

import SelectBox from 'meiko/SelectBox';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';

import storage from '@/utils/storage';
import { rhythm } from '@/utils/typography';

const minEpisodesOptions = [
  { value: 1, text: '1' },
  { value: 2, text: '2' },
  { value: 3, text: '3' },
  { value: 4, text: '4' },
  { value: 6, text: '6' }
];

function Settings() {
  const [minEpisodes, setMinEpisodes] = useState(storage.getKey('minEpisodes'));

  return (
    <Layout>
      <SEO title="Settings" />
      <div>
        <header>
          <h2>Settings</h2>
        </header>

        <div style={{ margin: `${rhythm(1 / 5)} 0` }}>
          <SelectBox
            id="minEpisodes"
            name="minEpisodes"
            value={minEpisodes}
            text="Minimum episodes for series to appear in a season or year"
            onChange={(e) => {
              const value = Number(e.target.value);
              storage.set({ minEpisodes: value });
              setMinEpisodes(value);
            }}
          >
            {minEpisodesOptions.map((x) => (
              <option key={x.value} value={x.value}>
                {x.text}
              </option>
            ))}
          </SelectBox>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
