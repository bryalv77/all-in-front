import { createSelector } from 'reselect';

const selectRaw = (state) => state.conversationParticipant.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const conversationParticipantDestroySelectors = {
  selectLoading,
};

export default conversationParticipantDestroySelectors;
