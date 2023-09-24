import { createSelector } from 'reselect';

const selectRaw = (state) => state.like.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const likeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default likeViewSelectors;
