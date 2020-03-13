import React, { useState } from 'react';

import FormControls from 'meiko/FormControls';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';

import storage from '@/utils/storage';
import { rhythm } from '@/utils/typography';

const { ClearableInput, SelectBox } = FormControls;

const minEpisodesOptions = [
  { value: 1, text: '1' },
  { value: 2, text: '2' },
  { value: 3, text: '3' },
  { value: 4, text: '4' },
  { value: 6, text: '6' }
];

function Settings() {
  const [errors, setErrors] = useState(new Map([]));
  const [minEpisodes, setMinEpisodes] = useState(storage.getKey('minEpisodes'));
  const [standoutEpisodeRating, setStandoutEpisodeRating] = useState(
    storage.getKey('standoutEpisodeRating')
  );

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
            error={errors}
          >
            {minEpisodesOptions.map((x) => (
              <option key={x.value} value={x.value}>
                {x.text}
              </option>
            ))}
          </SelectBox>
        </div>

        <div style={{ margin: `${rhythm(1 / 5)} 0` }}>
          <ClearableInput
            type="number"
            min={7}
            max={10}
            id="standoutEpisodeRating"
            name="standoutEpisodeRating"
            value={standoutEpisodeRating}
            label="Standout episode minimum rating"
            onChange={(e) => {
              const value = Number(e.target.value);
              const isValid = value >= 7 && value <= 10;

              if (isValid) {
                storage.set({ standoutEpisodeRating: value });

                if (errors.has('standoutEpisodeRating')) {
                  setErrors((p) => {
                    p.delete('standoutEpisodeRating');
                    return p;
                  });
                }
              } else {
                setErrors((p) =>
                  p.set(
                    'standoutEpisodeRating',
                    'Standout episode minimum rating must be between 7 and 10 inclusive.'
                  )
                );
              }

              setStandoutEpisodeRating(value);
            }}
            error={errors}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
