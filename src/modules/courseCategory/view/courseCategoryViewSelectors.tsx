import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseCategory.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseCategoryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default courseCategoryViewSelectors;
