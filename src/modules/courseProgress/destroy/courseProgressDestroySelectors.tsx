import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseProgress.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseProgressDestroySelectors = {
  selectLoading,
};

export default courseProgressDestroySelectors;
