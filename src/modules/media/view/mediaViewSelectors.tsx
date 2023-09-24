import { createSelector } from 'reselect';

const selectRaw = (state) => state.media.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mediaViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default mediaViewSelectors;
