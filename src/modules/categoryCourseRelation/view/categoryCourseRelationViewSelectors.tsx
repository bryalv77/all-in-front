import { createSelector } from 'reselect';

const selectRaw = (state) => state.categoryCourseRelation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categoryCourseRelationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default categoryCourseRelationViewSelectors;
