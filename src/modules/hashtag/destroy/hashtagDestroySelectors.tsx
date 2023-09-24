import { createSelector } from 'reselect';

const selectRaw = (state) => state.hashtag.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const hashtagDestroySelectors = {
  selectLoading,
};

export default hashtagDestroySelectors;
