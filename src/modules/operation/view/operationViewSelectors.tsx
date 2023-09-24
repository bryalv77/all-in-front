import { createSelector } from 'reselect';

const selectRaw = (state) => state.operation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const operationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default operationViewSelectors;
