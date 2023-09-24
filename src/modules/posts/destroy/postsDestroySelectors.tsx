import { createSelector } from 'reselect';

const selectRaw = (state) => state.posts.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const postsDestroySelectors = {
  selectLoading,
};

export default postsDestroySelectors;
