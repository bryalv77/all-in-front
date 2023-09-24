import { createSelector } from 'reselect';

const selectRaw = (state) => state.tasks.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tasksViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default tasksViewSelectors;
