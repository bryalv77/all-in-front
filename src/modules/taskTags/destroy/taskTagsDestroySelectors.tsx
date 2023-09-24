import { createSelector } from 'reselect';

const selectRaw = (state) => state.taskTags.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const taskTagsDestroySelectors = {
  selectLoading,
};

export default taskTagsDestroySelectors;
