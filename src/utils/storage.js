import Store from 'ayaka/localStorage';

const storage = new Store('higUserSettings', {
  minEpisodes: 4,
  standoutEpisodeRating: 8
});

export default storage;
