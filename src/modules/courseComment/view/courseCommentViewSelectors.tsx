import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseComment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseCommentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default courseCommentViewSelectors;
