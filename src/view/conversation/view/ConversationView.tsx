import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

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
