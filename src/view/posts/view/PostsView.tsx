import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

function PostsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.posts.fields.content')}
        value={record.content}
      />

      {record.postDate && <TextViewItem
        label={i18n(
          'entities.posts.fields.postDate',
        )}
        value={moment(record.postDate).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <FilesViewItem
        label={i18n(
          'entities.posts.fields.media',
        )}
        value={record.media}
      />

      <UserViewItem
        label={i18n('entities.posts.fields.userId')}
        value={record.userId}
      />
    </div>
  );
}

export default PostsView;
