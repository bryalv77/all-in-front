import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import UserViewItem from '../../../view/user/view/UserViewItem';
import FilesViewItem from '../../../view/shared/view/FilesViewItem';
import ConversationViewItem from '../../../view/conversation/view/ConversationViewItem';

function MessageView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.message.fields.senderId')}
        value={record.senderId}
      />

      <UserViewItem
        label={i18n('entities.message.fields.recipientId')}
        value={record.recipientId}
      />

      <TextViewItem
        label={i18n('entities.message.fields.content')}
        value={record.content}
      />

      <FilesViewItem
        label={i18n('entities.message.fields.media')}
        value={record.media}
      />

      <ConversationViewItem
        label={i18n(
          'entities.message.fields.conversationId',
        )}
        value={record.conversationId}
      />

      <TextViewItem
        label={i18n('entities.message.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.message.enumerators.status.${record.status}`,
          )
        }
      />
    </div>
  );
}

export default MessageView;
