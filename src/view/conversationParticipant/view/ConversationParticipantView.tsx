import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ConversationViewItem from 'src/view/conversation/view/ConversationViewItem';

function ConversationParticipantView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.conversationParticipant.fields.userId')}
        value={record.userId}
      />

      <ConversationViewItem
        label={i18n('entities.conversationParticipant.fields.conversationId')}
        value={record.conversationId}
      />
    </div>
  );
}

export default ConversationParticipantView;
