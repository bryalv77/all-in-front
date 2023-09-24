import { createSelector } from 'reselect';

const selectRaw = (state) => state.like.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const likeDestroySelectors = {
  selectLoading,
};

export default likeDestroySelectors;
