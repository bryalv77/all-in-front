import { createSelector } from 'reselect';

const selectRaw = (state) => state.productReview.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const productReviewDestroySelectors = {
  selectLoading,
};

export default productReviewDestroySelectors;
