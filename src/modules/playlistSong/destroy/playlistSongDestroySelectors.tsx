import { createSelector } from 'reselect';

const selectRaw = (state) => state.playlistSong.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const playlistSongDestroySelectors = {
  selectLoading,
};

export default playlistSongDestroySelectors;
