import { createSelector } from 'reselect';

const selectRaw = (state) => state.bank.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const bankViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default bankViewSelectors;
