import { createSelector } from 'reselect';

const selectRaw = (state) => state.followers.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const followersViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default followersViewSelectors;
