import Permissions from '../security/permissions';
import { i18n } from '../i18n';
import config from '../config';
import {
  faChevronRight,
  faCog,
  faCreditCard,
  faHistory,
  faThLarge,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: faCreditCard,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: faUserPlus,
  },

  {
    path: '/audit-logs',
    icon: faHistory,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: faCog,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/customer',
    permissionRequired: permissions.customerRead,
    icon: faChevronRight,
    label: i18n('entities.customer.menu'),
  },

  {
    path: '/product',
    permissionRequired: permissions.productRead,
    icon: faChevronRight,
    label: i18n('entities.product.menu'),
  },

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: faChevronRight,
    label: i18n('entities.order.menu'),
  },

  {
    path: '/operation',
    permissionRequired: permissions.operationRead,
    icon: faChevronRight,
    label: i18n('entities.operation.menu'),
  },

  {
    path: '/bank',
    permissionRequired: permissions.bankRead,
    icon: faChevronRight,
    label: i18n('entities.bank.menu'),
  },

  {
    path: '/category',
    permissionRequired: permissions.categoryRead,
    icon: faChevronRight,
    label: i18n('entities.category.menu'),
  },

  {
    path: '/task-list',
    permissionRequired: permissions.taskListRead,
    icon: faChevronRight,
    label: i18n('entities.taskList.menu'),
  },

  {
    path: '/tasks',
    permissionRequired: permissions.tasksRead,
    icon: faChevronRight,
    label: i18n('entities.tasks.menu'),
  },

  {
    path: '/tags',
    permissionRequired: permissions.tagsRead,
    icon: faChevronRight,
    label: i18n('entities.tags.menu'),
  },

  {
    path: '/task-tags',
    permissionRequired: permissions.taskTagsRead,
    icon: faChevronRight,
    label: i18n('entities.taskTags.menu'),
  },

  {
    path: '/sub-tasks',
    permissionRequired: permissions.subTasksRead,
    icon: faChevronRight,
    label: i18n('entities.subTasks.menu'),
  },

  {
    path: '/media',
    permissionRequired: permissions.mediaRead,
    icon: faChevronRight,
    label: i18n('entities.media.menu'),
  },

  {
    path: '/posts',
    permissionRequired: permissions.postsRead,
    icon: faChevronRight,
    label: i18n('entities.posts.menu'),
  },

  {
    path: '/followers',
    permissionRequired: permissions.followersRead,
    icon: faChevronRight,
    label: i18n('entities.followers.menu'),
  },

  {
    path: '/like',
    permissionRequired: permissions.likeRead,
    icon: faChevronRight,
    label: i18n('entities.like.menu'),
  },

  {
    path: '/hashtag',
    permissionRequired: permissions.hashtagRead,
    icon: faChevronRight,
    label: i18n('entities.hashtag.menu'),
  },

  {
    path: '/post-hashtag',
    permissionRequired: permissions.postHashtagRead,
    icon: faChevronRight,
    label: i18n('entities.postHashtag.menu'),
  },

  {
    path: '/artist',
    permissionRequired: permissions.artistRead,
    icon: faChevronRight,
    label: i18n('entities.artist.menu'),
  },

  {
    path: '/album',
    permissionRequired: permissions.albumRead,
    icon: faChevronRight,
    label: i18n('entities.album.menu'),
  },

  {
    path: '/song',
    permissionRequired: permissions.songRead,
    icon: faChevronRight,
    label: i18n('entities.song.menu'),
  },

  {
    path: '/playlist',
    permissionRequired: permissions.playlistRead,
    icon: faChevronRight,
    label: i18n('entities.playlist.menu'),
  },

  {
    path: '/playlist-song',
    permissionRequired: permissions.playlistSongRead,
    icon: faChevronRight,
    label: i18n('entities.playlistSong.menu'),
  },

  {
    path: '/user-playlist',
    permissionRequired: permissions.userPlaylistRead,
    icon: faChevronRight,
    label: i18n('entities.userPlaylist.menu'),
  },

  {
    path: '/city',
    permissionRequired: permissions.cityRead,
    icon: faChevronRight,
    label: i18n('entities.city.menu'),
  },

  {
    path: '/country',
    permissionRequired: permissions.countryRead,
    icon: faChevronRight,
    label: i18n('entities.country.menu'),
  },

  {
    path: '/address',
    permissionRequired: permissions.addressRead,
    icon: faChevronRight,
    label: i18n('entities.address.menu'),
  },

  {
    path: '/product-category',
    permissionRequired: permissions.productCategoryRead,
    icon: faChevronRight,
    label: i18n('entities.productCategory.menu'),
  },

  {
    path: '/order-detail',
    permissionRequired: permissions.orderDetailRead,
    icon: faChevronRight,
    label: i18n('entities.orderDetail.menu'),
  },

  {
    path: '/payment-methods',
    permissionRequired: permissions.paymentMethodsRead,
    icon: faChevronRight,
    label: i18n('entities.paymentMethods.menu'),
  },

  {
    path: '/product-review',
    permissionRequired: permissions.productReviewRead,
    icon: faChevronRight,
    label: i18n('entities.productReview.menu'),
  },

  {
    path: '/promotions',
    permissionRequired: permissions.promotionsRead,
    icon: faChevronRight,
    label: i18n('entities.promotions.menu'),
  },

  {
    path: '/course',
    permissionRequired: permissions.courseRead,
    icon: faChevronRight,
    label: i18n('entities.course.menu'),
  },

  {
    path: '/teacher',
    permissionRequired: permissions.teacherRead,
    icon: faChevronRight,
    label: i18n('entities.teacher.menu'),
  },

  {
    path: '/lesson',
    permissionRequired: permissions.lessonRead,
    icon: faChevronRight,
    label: i18n('entities.lesson.menu'),
  },

  {
    path: '/course-enrollment',
    permissionRequired: permissions.courseEnrollmentRead,
    icon: faChevronRight,
    label: i18n('entities.courseEnrollment.menu'),
  },

  {
    path: '/student',
    permissionRequired: permissions.studentRead,
    icon: faChevronRight,
    label: i18n('entities.student.menu'),
  },

  {
    path: '/course-comment',
    permissionRequired: permissions.courseCommentRead,
    icon: faChevronRight,
    label: i18n('entities.courseComment.menu'),
  },

  {
    path: '/course-transaction',
    permissionRequired: permissions.courseTransactionRead,
    icon: faChevronRight,
    label: i18n('entities.courseTransaction.menu'),
  },

  {
    path: '/course-category',
    permissionRequired: permissions.courseCategoryRead,
    icon: faChevronRight,
    label: i18n('entities.courseCategory.menu'),
  },

  {
    path: '/category-course-relation',
    permissionRequired:
      permissions.categoryCourseRelationRead,
    icon: faChevronRight,
    label: i18n('entities.categoryCourseRelation.menu'),
  },

  {
    path: '/course-progress',
    permissionRequired: permissions.courseProgressRead,
    icon: faChevronRight,
    label: i18n('entities.courseProgress.menu'),
  },

  {
    path: '/message',
    permissionRequired: permissions.messageRead,
    icon: faChevronRight,
    label: i18n('entities.message.menu'),
  },

  {
    path: '/conversation',
    permissionRequired: permissions.conversationRead,
    icon: faChevronRight,
    label: i18n('entities.conversation.menu'),
  },

  {
    path: '/conversation-participant',
    permissionRequired:
      permissions.conversationParticipantRead,
    icon: faChevronRight,
    label: i18n('entities.conversationParticipant.menu'),
  },

  {
    path: '/business',
    permissionRequired: permissions.businessRead,
    icon: faChevronRight,
    label: i18n('entities.business.menu'),
  },

  {
    path: '/business-category',
    permissionRequired: permissions.businessCategoryRead,
    icon: faChevronRight,
    label: i18n('entities.businessCategory.menu'),
  },

  {
    path: '/service',
    permissionRequired: permissions.serviceRead,
    icon: faChevronRight,
    label: i18n('entities.service.menu'),
  },

  {
    path: '/availability-timeslot',
    permissionRequired:
      permissions.availabilityTimeslotRead,
    icon: faChevronRight,
    label: i18n('entities.availabilityTimeslot.menu'),
  },

  {
    path: '/appointment',
    permissionRequired: permissions.appointmentRead,
    icon: faChevronRight,
    label: i18n('entities.appointment.menu'),
  },

  {
    path: '/brand',
    permissionRequired: permissions.brandRead,
    icon: faChevronRight,
    label: i18n('entities.brand.menu'),
  },

  {
    path: '/delivery-method',
    permissionRequired: permissions.deliveryMethodRead,
    icon: faChevronRight,
    label: i18n('entities.deliveryMethod.menu'),
  },
].filter(Boolean);
