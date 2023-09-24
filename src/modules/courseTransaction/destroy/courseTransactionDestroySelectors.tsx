import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseTransaction.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseTransactionDestroySelectors = {
  selectLoading,
};

export default courseTransactionDestroySelectors;
