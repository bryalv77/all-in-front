import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseCategory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseCategoryDestroySelectors = {
  selectLoading,
};

export default courseCategoryDestroySelectors;
