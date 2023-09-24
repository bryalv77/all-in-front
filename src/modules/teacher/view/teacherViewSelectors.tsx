import { createSelector } from 'reselect';

const selectRaw = (state) => state.teacher.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const teacherViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default teacherViewSelectors;
