import { createSelector } from 'reselect';

const selectRaw = (state) => state.teacher.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const teacherDestroySelectors = {
  selectLoading,
};

export default teacherDestroySelectors;
