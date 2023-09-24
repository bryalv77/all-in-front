import { createSelector } from 'reselect';

const selectRaw = (state) => state.categoryCourseRelation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categoryCourseRelationDestroySelectors = {
  selectLoading,
};

export default categoryCourseRelationDestroySelectors;
