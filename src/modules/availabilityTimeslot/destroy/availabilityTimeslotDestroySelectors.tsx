import { createSelector } from 'reselect';

const selectRaw = (state) => state.availabilityTimeslot.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const availabilityTimeslotDestroySelectors = {
  selectLoading,
};

export default availabilityTimeslotDestroySelectors;
