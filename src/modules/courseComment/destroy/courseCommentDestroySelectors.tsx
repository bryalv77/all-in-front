import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseComment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseCommentDestroySelectors = {
  selectLoading,
};

export default courseCommentDestroySelectors;
