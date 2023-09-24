import { createSelector } from 'reselect';

const selectRaw = (state) => state.subTasks.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subTasksViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default subTasksViewSelectors;
