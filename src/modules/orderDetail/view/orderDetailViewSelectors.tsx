import { createSelector } from 'reselect';

const selectRaw = (state) => state.orderDetail.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const orderDetailViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default orderDetailViewSelectors;
