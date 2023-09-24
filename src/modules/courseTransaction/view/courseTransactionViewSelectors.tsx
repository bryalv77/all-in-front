import { createSelector } from 'reselect';

const selectRaw = (state) => state.courseTransaction.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const courseTransactionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default courseTransactionViewSelectors;
