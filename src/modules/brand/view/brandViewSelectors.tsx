import { createSelector } from 'reselect';

const selectRaw = (state) => state.brand.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const brandViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default brandViewSelectors;
