import { createSelector } from 'reselect';

const selectRaw = (state) => state.postHashtag.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const postHashtagDestroySelectors = {
  selectLoading,
};

export default postHashtagDestroySelectors;
