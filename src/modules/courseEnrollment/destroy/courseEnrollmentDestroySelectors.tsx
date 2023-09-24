import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseEnrollment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseEnrollmentDestroySelectors = {
  selectLoading,
};

export default courseEnrollmentDestroySelectors;
