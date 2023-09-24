import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import UserViewItem from '../../../view/user/view/UserViewItem';

function PlaylistView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.playlist.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.playlist.fields.description')}
        value={record.description}
      />

      <UserViewItem
        label={i18n('entities.playlist.fields.userId')}
        value={record.userId}
      />
    </div>
  );
}

export default PlaylistView;
