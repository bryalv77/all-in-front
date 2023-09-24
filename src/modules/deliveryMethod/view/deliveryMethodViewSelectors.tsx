import { createSelector } from 'reselect';

const selectRaw = (state) => state.deliveryMethod.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const deliveryMethodViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default deliveryMethodViewSelectors;
