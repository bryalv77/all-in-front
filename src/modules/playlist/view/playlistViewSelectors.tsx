import { createSelector } from 'reselect';

const selectRaw = (state) => state.playlist.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const playlistViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default playlistViewSelectors;
