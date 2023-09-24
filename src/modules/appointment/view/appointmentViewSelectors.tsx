import { createSelector } from 'reselect';

const selectRaw = (state) => state.appointment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const appointmentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default appointmentViewSelectors;
