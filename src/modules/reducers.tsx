import { connectRouter } from 'connected-react-router';
import layout from '../modules/layout/layoutReducers';
import auth from '../modules/auth/authReducers';
import tenant from '../modules/tenant/tenantReducers';
import plan from '../modules/plan/planReducers';
import user from '../modules/user/userReducers';
import auditLog from '../modules/auditLog/auditLogReducers';
import settings from '../modules/settings/settingsReducers';
import customer from '../modules/customer/customerReducers';
import product from '../modules/product/productReducers';
import order from '../modules/order/orderReducers';
import operation from '../modules/operation/operationReducers';
import bank from '../modules/bank/bankReducers';
import category from '../modules/category/categoryReducers';
import taskList from '../modules/taskList/taskListReducers';
import tasks from '../modules/tasks/tasksReducers';
import tags from '../modules/tags/tagsReducers';
import taskTags from '../modules/taskTags/taskTagsReducers';
import subTasks from '../modules/subTasks/subTasksReducers';
import media from '../modules/media/mediaReducers';
import posts from '../modules/posts/postsReducers';
import followers from '../modules/followers/followersReducers';
import like from '../modules/like/likeReducers';
import hashtag from '../modules/hashtag/hashtagReducers';
import postHashtag from '../modules/postHashtag/postHashtagReducers';
import artist from '../modules/artist/artistReducers';
import album from '../modules/album/albumReducers';
import song from '../modules/song/songReducers';
import playlist from '../modules/playlist/playlistReducers';
import playlistSong from '../modules/playlistSong/playlistSongReducers';
import userPlaylist from '../modules/userPlaylist/userPlaylistReducers';
import city from '../modules/city/cityReducers';
import country from '../modules/country/countryReducers';
import address from '../modules/address/addressReducers';
import productCategory from '../modules/productCategory/productCategoryReducers';
import orderDetail from '../modules/orderDetail/orderDetailReducers';
import paymentMethods from '../modules/paymentMethods/paymentMethodsReducers';
import productReview from '../modules/productReview/productReviewReducers';
import promotions from '../modules/promotions/promotionsReducers';
import course from '../modules/course/courseReducers';
import teacher from '../modules/teacher/teacherReducers';
import lesson from '../modules/lesson/lessonReducers';
import courseEnrollment from '../modules/courseEnrollment/courseEnrollmentReducers';
import student from '../modules/student/studentReducers';
import courseComment from '../modules/courseComment/courseCommentReducers';
import courseTransaction from '../modules/courseTransaction/courseTransactionReducers';
import courseCategory from '../modules/courseCategory/courseCategoryReducers';
import categoryCourseRelation from '../modules/categoryCourseRelation/categoryCourseRelationReducers';
import courseProgress from '../modules/courseProgress/courseProgressReducers';
import message from '../modules/message/messageReducers';
import conversation from '../modules/conversation/conversationReducers';
import conversationParticipant from '../modules/conversationParticipant/conversationParticipantReducers';
import business from '../modules/business/businessReducers';
import businessCategory from '../modules/businessCategory/businessCategoryReducers';
import service from '../modules/service/serviceReducers';
import availabilityTimeslot from '../modules/availabilityTimeslot/availabilityTimeslotReducers';
import appointment from '../modules/appointment/appointmentReducers';
import brand from '../modules/brand/brandReducers';
import deliveryMethod from '../modules/deliveryMethod/deliveryMethodReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    customer,
    product,
    order,
    operation,
    bank,
    category,
    taskList,
    tasks,
    tags,
    taskTags,
    subTasks,
    media,
    posts,
    followers,
    like,
    hashtag,
    postHashtag,
    artist,
    album,
    song,
    playlist,
    playlistSong,
    userPlaylist,
    city,
    country,
    address,
    productCategory,
    orderDetail,
    paymentMethods,
    productReview,
    promotions,
    course,
    teacher,
    lesson,
    courseEnrollment,
    student,
    courseComment,
    courseTransaction,
    courseCategory,
    categoryCourseRelation,
    courseProgress,
    message,
    conversation,
    conversationParticipant,
    business,
    businessCategory,
    service,
    availabilityTimeslot,
    appointment,
    brand,
    deliveryMethod,
  });
