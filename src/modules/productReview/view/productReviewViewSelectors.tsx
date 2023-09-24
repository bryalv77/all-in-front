import { createSelector } from 'reselect';

const selectRaw = (state) => state.productReview.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const productReviewViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default productReviewViewSelectors;
