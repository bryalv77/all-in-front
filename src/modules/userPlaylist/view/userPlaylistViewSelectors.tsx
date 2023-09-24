import { createSelector } from 'reselect';

const selectRaw = (state) => state.userPlaylist.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const userPlaylistViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default userPlaylistViewSelectors;
