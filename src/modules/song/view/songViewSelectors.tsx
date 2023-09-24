import { createSelector } from 'reselect';

const selectRaw = (state) => state.song.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const songViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default songViewSelectors;
