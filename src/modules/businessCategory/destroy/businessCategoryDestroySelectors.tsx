import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessCategory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessCategoryDestroySelectors = {
  selectLoading,
};

export default businessCategoryDestroySelectors;
