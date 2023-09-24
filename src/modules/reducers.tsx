import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import customer from 'src/modules/customer/customerReducers';
import product from 'src/modules/product/productReducers';
import order from 'src/modules/order/orderReducers';
import operation from 'src/modules/operation/operationReducers';
import bank from 'src/modules/bank/bankReducers';
import category from 'src/modules/category/categoryReducers';
import taskList from 'src/modules/taskList/taskListReducers';
import tasks from 'src/modules/tasks/tasksReducers';
import tags from 'src/modules/tags/tagsReducers';
import taskTags from 'src/modules/taskTags/taskTagsReducers';
import subTasks from 'src/modules/subTasks/subTasksReducers';
import media from 'src/modules/media/mediaReducers';
import posts from 'src/modules/posts/postsReducers';
import followers from 'src/modules/followers/followersReducers';
import like from 'src/modules/like/likeReducers';
import hashtag from 'src/modules/hashtag/hashtagReducers';
import postHashtag from 'src/modules/postHashtag/postHashtagReducers';
import artist from 'src/modules/artist/artistReducers';
import album from 'src/modules/album/albumReducers';
import song from 'src/modules/song/songReducers';
import playlist from 'src/modules/playlist/playlistReducers';
import playlistSong from 'src/modules/playlistSong/playlistSongReducers';
import userPlaylist from 'src/modules/userPlaylist/userPlaylistReducers';
import city from 'src/modules/city/cityReducers';
import country from 'src/modules/country/countryReducers';
import address from 'src/modules/address/addressReducers';
import productCategory from 'src/modules/productCategory/productCategoryReducers';
import orderDetail from 'src/modules/orderDetail/orderDetailReducers';
import paymentMethods from 'src/modules/paymentMethods/paymentMethodsReducers';
import productReview from 'src/modules/productReview/productReviewReducers';
import promotions from 'src/modules/promotions/promotionsReducers';
import course from 'src/modules/course/courseReducers';
import teacher from 'src/modules/teacher/teacherReducers';
import lesson from 'src/modules/lesson/lessonReducers';
import courseEnrollment from 'src/modules/courseEnrollment/courseEnrollmentReducers';
import student from 'src/modules/student/studentReducers';
import courseComment from 'src/modules/courseComment/courseCommentReducers';
import courseTransaction from 'src/modules/courseTransaction/courseTransactionReducers';
import courseCategory from 'src/modules/courseCategory/courseCategoryReducers';
import categoryCourseRelation from 'src/modules/categoryCourseRelation/categoryCourseRelationReducers';
import courseProgress from 'src/modules/courseProgress/courseProgressReducers';
import message from 'src/modules/message/messageReducers';
import conversation from 'src/modules/conversation/conversationReducers';
import conversationParticipant from 'src/modules/conversationParticipant/conversationParticipantReducers';
import business from 'src/modules/business/businessReducers';
import businessCategory from 'src/modules/businessCategory/businessCategoryReducers';
import service from 'src/modules/service/serviceReducers';
import availabilityTimeslot from 'src/modules/availabilityTimeslot/availabilityTimeslotReducers';
import appointment from 'src/modules/appointment/appointmentReducers';
import brand from 'src/modules/brand/brandReducers';
import deliveryMethod from 'src/modules/deliveryMethod/deliveryMethodReducers';
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
