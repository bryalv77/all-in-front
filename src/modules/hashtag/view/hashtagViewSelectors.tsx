import { createSelector } from 'reselect';

const selectRaw = (state) => state.hashtag.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const hashtagViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default hashtagViewSelectors;
