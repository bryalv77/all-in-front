import { createSelector } from 'reselect';

const selectRaw = (state) => state.conversationParticipant.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const conversationParticipantViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default conversationParticipantViewSelectors;
