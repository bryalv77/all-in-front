import { createSelector } from 'reselect';

const selectRaw = (state) => state.subTasks.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subTasksDestroySelectors = {
  selectLoading,
};

export default subTasksDestroySelectors;
