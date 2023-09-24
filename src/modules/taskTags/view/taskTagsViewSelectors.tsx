import { createSelector } from 'reselect';

const selectRaw = (state) => state.taskTags.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const taskTagsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default taskTagsViewSelectors;
