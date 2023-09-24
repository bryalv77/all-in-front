import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessCategory.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessCategoryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default businessCategoryViewSelectors;
