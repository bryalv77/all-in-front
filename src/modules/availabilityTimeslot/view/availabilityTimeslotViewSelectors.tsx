import { createSelector } from 'reselect';

const selectRaw = (state) => state.availabilityTimeslot.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const availabilityTimeslotViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default availabilityTimeslotViewSelectors;
