import { createSelector } from 'reselect';

const selectRaw = (state) => state.tasks.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tasksDestroySelectors = {
  selectLoading,
};

export default tasksDestroySelectors;
