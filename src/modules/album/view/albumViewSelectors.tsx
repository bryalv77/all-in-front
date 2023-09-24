import { createSelector } from 'reselect';

const selectRaw = (state) => state.album.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const albumViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default albumViewSelectors;
