import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import ImagesViewItem from '../../../view/shared/view/ImagesViewItem';

function ConversationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.conversation.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.conversation.enumerators.type.${record.type}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.conversation.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.conversation.fields.avatar')}
        value={record.avatar}
      />
    </div>
  );
}

export default ConversationView;
