import { createSelector } from 'reselect';

const selectRaw = (state) => state.playlist.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const playlistDestroySelectors = {
  selectLoading,
};

export default playlistDestroySelectors;
