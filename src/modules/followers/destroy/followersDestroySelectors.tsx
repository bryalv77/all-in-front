import { createSelector } from 'reselect';

const selectRaw = (state) => state.followers.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const followersDestroySelectors = {
  selectLoading,
};

export default followersDestroySelectors;
