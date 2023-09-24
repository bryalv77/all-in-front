import { createSelector } from 'reselect';

const selectRaw = (state) => state.playlistSong.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const playlistSongViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default playlistSongViewSelectors;
