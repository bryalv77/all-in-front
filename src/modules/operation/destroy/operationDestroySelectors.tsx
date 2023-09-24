import { createSelector } from 'reselect';

const selectRaw = (state) => state.operation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const operationDestroySelectors = {
  selectLoading,
};

export default operationDestroySelectors;
