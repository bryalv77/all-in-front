import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import PostsViewItem from '../../../view/posts/view/PostsViewItem';
import HashtagViewItem from '../../../view/hashtag/view/HashtagViewItem';

function PostHashtagView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <PostsViewItem
        label={i18n('entities.postHashtag.fields.postId')}
        value={record.postId}
      />

      <HashtagViewItem
        label={i18n(
          'entities.postHashtag.fields.hashtagId',
        )}
        value={record.hashtagId}
      />
    </div>
  );
}

export default PostHashtagView;
