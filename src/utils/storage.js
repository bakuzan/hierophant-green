import Store from 'ayaka/localStorage';

const storage = new Store('higUserSettings', {
  minEpisodes: 4
});

export default storage;
