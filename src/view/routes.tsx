import Permissions from '../security/permissions';
import config from '../config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () => import('../view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('../view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('../view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('../view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('../view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('../view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('../view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('../view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('../view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('../view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('../view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('../view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('../view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('../view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/customer',
    loader: () =>
      import('../view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },
  {
    path: '/customer/new',
    loader: () =>
      import('../view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import(
        '../view/customer/importer/CustomerImporterPage'
      ),
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () =>
      import('../view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () =>
      import('../view/customer/view/CustomerViewPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },

  {
    path: '/product',
    loader: () =>
      import('../view/product/list/ProductListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },
  {
    path: '/product/new',
    loader: () =>
      import('../view/product/form/ProductFormPage'),
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import(
        '../view/product/importer/ProductImporterPage'
      ),
    permissionRequired: permissions.productImport,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () =>
      import('../view/product/form/ProductFormPage'),
    permissionRequired: permissions.productEdit,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () =>
      import('../view/product/view/ProductViewPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },

  {
    path: '/order',
    loader: () =>
      import('../view/order/list/OrderListPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },
  {
    path: '/order/new',
    loader: () =>
      import('../view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderCreate,
    exact: true,
  },
  {
    path: '/order/importer',
    loader: () =>
      import('../view/order/importer/OrderImporterPage'),
    permissionRequired: permissions.orderImport,
    exact: true,
  },
  {
    path: '/order/:id/edit',
    loader: () =>
      import('../view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderEdit,
    exact: true,
  },
  {
    path: '/order/:id',
    loader: () =>
      import('../view/order/view/OrderViewPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },

  {
    path: '/operation',
    loader: () =>
      import('../view/operation/list/OperationListPage'),
    permissionRequired: permissions.operationRead,
    exact: true,
  },
  {
    path: '/operation/new',
    loader: () =>
      import('../view/operation/form/OperationFormPage'),
    permissionRequired: permissions.operationCreate,
    exact: true,
  },
  {
    path: '/operation/importer',
    loader: () =>
      import(
        '../view/operation/importer/OperationImporterPage'
      ),
    permissionRequired: permissions.operationImport,
    exact: true,
  },
  {
    path: '/operation/:id/edit',
    loader: () =>
      import('../view/operation/form/OperationFormPage'),
    permissionRequired: permissions.operationEdit,
    exact: true,
  },
  {
    path: '/operation/:id',
    loader: () =>
      import('../view/operation/view/OperationViewPage'),
    permissionRequired: permissions.operationRead,
    exact: true,
  },

  {
    path: '/bank',
    loader: () => import('../view/bank/list/BankListPage'),
    permissionRequired: permissions.bankRead,
    exact: true,
  },
  {
    path: '/bank/new',
    loader: () => import('../view/bank/form/BankFormPage'),
    permissionRequired: permissions.bankCreate,
    exact: true,
  },
  {
    path: '/bank/importer',
    loader: () =>
      import('../view/bank/importer/BankImporterPage'),
    permissionRequired: permissions.bankImport,
    exact: true,
  },
  {
    path: '/bank/:id/edit',
    loader: () => import('../view/bank/form/BankFormPage'),
    permissionRequired: permissions.bankEdit,
    exact: true,
  },
  {
    path: '/bank/:id',
    loader: () => import('../view/bank/view/BankViewPage'),
    permissionRequired: permissions.bankRead,
    exact: true,
  },

  {
    path: '/category',
    loader: () =>
      import('../view/category/list/CategoryListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/category/new',
    loader: () =>
      import('../view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },
  {
    path: '/category/importer',
    loader: () =>
      import(
        '../view/category/importer/CategoryImporterPage'
      ),
    permissionRequired: permissions.categoryImport,
    exact: true,
  },
  {
    path: '/category/:id/edit',
    loader: () =>
      import('../view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryEdit,
    exact: true,
  },
  {
    path: '/category/:id',
    loader: () =>
      import('../view/category/view/CategoryViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/task-list',
    loader: () =>
      import('../view/taskList/list/TaskListListPage'),
    permissionRequired: permissions.taskListRead,
    exact: true,
  },
  {
    path: '/task-list/new',
    loader: () =>
      import('../view/taskList/form/TaskListFormPage'),
    permissionRequired: permissions.taskListCreate,
    exact: true,
  },
  {
    path: '/task-list/importer',
    loader: () =>
      import(
        '../view/taskList/importer/TaskListImporterPage'
      ),
    permissionRequired: permissions.taskListImport,
    exact: true,
  },
  {
    path: '/task-list/:id/edit',
    loader: () =>
      import('../view/taskList/form/TaskListFormPage'),
    permissionRequired: permissions.taskListEdit,
    exact: true,
  },
  {
    path: '/task-list/:id',
    loader: () =>
      import('../view/taskList/view/TaskListViewPage'),
    permissionRequired: permissions.taskListRead,
    exact: true,
  },

  {
    path: '/tasks',
    loader: () =>
      import('../view/tasks/list/TasksListPage'),
    permissionRequired: permissions.tasksRead,
    exact: true,
  },
  {
    path: '/tasks/new',
    loader: () =>
      import('../view/tasks/form/TasksFormPage'),
    permissionRequired: permissions.tasksCreate,
    exact: true,
  },
  {
    path: '/tasks/importer',
    loader: () =>
      import('../view/tasks/importer/TasksImporterPage'),
    permissionRequired: permissions.tasksImport,
    exact: true,
  },
  {
    path: '/tasks/:id/edit',
    loader: () =>
      import('../view/tasks/form/TasksFormPage'),
    permissionRequired: permissions.tasksEdit,
    exact: true,
  },
  {
    path: '/tasks/:id',
    loader: () =>
      import('../view/tasks/view/TasksViewPage'),
    permissionRequired: permissions.tasksRead,
    exact: true,
  },

  {
    path: '/tags',
    loader: () => import('../view/tags/list/TagsListPage'),
    permissionRequired: permissions.tagsRead,
    exact: true,
  },
  {
    path: '/tags/new',
    loader: () => import('../view/tags/form/TagsFormPage'),
    permissionRequired: permissions.tagsCreate,
    exact: true,
  },
  {
    path: '/tags/importer',
    loader: () =>
      import('../view/tags/importer/TagsImporterPage'),
    permissionRequired: permissions.tagsImport,
    exact: true,
  },
  {
    path: '/tags/:id/edit',
    loader: () => import('../view/tags/form/TagsFormPage'),
    permissionRequired: permissions.tagsEdit,
    exact: true,
  },
  {
    path: '/tags/:id',
    loader: () => import('../view/tags/view/TagsViewPage'),
    permissionRequired: permissions.tagsRead,
    exact: true,
  },

  {
    path: '/task-tags',
    loader: () =>
      import('../view/taskTags/list/TaskTagsListPage'),
    permissionRequired: permissions.taskTagsRead,
    exact: true,
  },
  {
    path: '/task-tags/new',
    loader: () =>
      import('../view/taskTags/form/TaskTagsFormPage'),
    permissionRequired: permissions.taskTagsCreate,
    exact: true,
  },
  {
    path: '/task-tags/importer',
    loader: () =>
      import(
        '../view/taskTags/importer/TaskTagsImporterPage'
      ),
    permissionRequired: permissions.taskTagsImport,
    exact: true,
  },
  {
    path: '/task-tags/:id/edit',
    loader: () =>
      import('../view/taskTags/form/TaskTagsFormPage'),
    permissionRequired: permissions.taskTagsEdit,
    exact: true,
  },
  {
    path: '/task-tags/:id',
    loader: () =>
      import('../view/taskTags/view/TaskTagsViewPage'),
    permissionRequired: permissions.taskTagsRead,
    exact: true,
  },

  {
    path: '/sub-tasks',
    loader: () =>
      import('../view/subTasks/list/SubTasksListPage'),
    permissionRequired: permissions.subTasksRead,
    exact: true,
  },
  {
    path: '/sub-tasks/new',
    loader: () =>
      import('../view/subTasks/form/SubTasksFormPage'),
    permissionRequired: permissions.subTasksCreate,
    exact: true,
  },
  {
    path: '/sub-tasks/importer',
    loader: () =>
      import(
        '../view/subTasks/importer/SubTasksImporterPage'
      ),
    permissionRequired: permissions.subTasksImport,
    exact: true,
  },
  {
    path: '/sub-tasks/:id/edit',
    loader: () =>
      import('../view/subTasks/form/SubTasksFormPage'),
    permissionRequired: permissions.subTasksEdit,
    exact: true,
  },
  {
    path: '/sub-tasks/:id',
    loader: () =>
      import('../view/subTasks/view/SubTasksViewPage'),
    permissionRequired: permissions.subTasksRead,
    exact: true,
  },

  {
    path: '/media',
    loader: () =>
      import('../view/media/list/MediaListPage'),
    permissionRequired: permissions.mediaRead,
    exact: true,
  },
  {
    path: '/media/new',
    loader: () =>
      import('../view/media/form/MediaFormPage'),
    permissionRequired: permissions.mediaCreate,
    exact: true,
  },
  {
    path: '/media/importer',
    loader: () =>
      import('../view/media/importer/MediaImporterPage'),
    permissionRequired: permissions.mediaImport,
    exact: true,
  },
  {
    path: '/media/:id/edit',
    loader: () =>
      import('../view/media/form/MediaFormPage'),
    permissionRequired: permissions.mediaEdit,
    exact: true,
  },
  {
    path: '/media/:id',
    loader: () =>
      import('../view/media/view/MediaViewPage'),
    permissionRequired: permissions.mediaRead,
    exact: true,
  },

  {
    path: '/posts',
    loader: () =>
      import('../view/posts/list/PostsListPage'),
    permissionRequired: permissions.postsRead,
    exact: true,
  },
  {
    path: '/posts/new',
    loader: () =>
      import('../view/posts/form/PostsFormPage'),
    permissionRequired: permissions.postsCreate,
    exact: true,
  },
  {
    path: '/posts/importer',
    loader: () =>
      import('../view/posts/importer/PostsImporterPage'),
    permissionRequired: permissions.postsImport,
    exact: true,
  },
  {
    path: '/posts/:id/edit',
    loader: () =>
      import('../view/posts/form/PostsFormPage'),
    permissionRequired: permissions.postsEdit,
    exact: true,
  },
  {
    path: '/posts/:id',
    loader: () =>
      import('../view/posts/view/PostsViewPage'),
    permissionRequired: permissions.postsRead,
    exact: true,
  },

  {
    path: '/followers',
    loader: () =>
      import('../view/followers/list/FollowersListPage'),
    permissionRequired: permissions.followersRead,
    exact: true,
  },
  {
    path: '/followers/new',
    loader: () =>
      import('../view/followers/form/FollowersFormPage'),
    permissionRequired: permissions.followersCreate,
    exact: true,
  },
  {
    path: '/followers/importer',
    loader: () =>
      import(
        '../view/followers/importer/FollowersImporterPage'
      ),
    permissionRequired: permissions.followersImport,
    exact: true,
  },
  {
    path: '/followers/:id/edit',
    loader: () =>
      import('../view/followers/form/FollowersFormPage'),
    permissionRequired: permissions.followersEdit,
    exact: true,
  },
  {
    path: '/followers/:id',
    loader: () =>
      import('../view/followers/view/FollowersViewPage'),
    permissionRequired: permissions.followersRead,
    exact: true,
  },

  {
    path: '/like',
    loader: () => import('../view/like/list/LikeListPage'),
    permissionRequired: permissions.likeRead,
    exact: true,
  },
  {
    path: '/like/new',
    loader: () => import('../view/like/form/LikeFormPage'),
    permissionRequired: permissions.likeCreate,
    exact: true,
  },
  {
    path: '/like/importer',
    loader: () =>
      import('../view/like/importer/LikeImporterPage'),
    permissionRequired: permissions.likeImport,
    exact: true,
  },
  {
    path: '/like/:id/edit',
    loader: () => import('../view/like/form/LikeFormPage'),
    permissionRequired: permissions.likeEdit,
    exact: true,
  },
  {
    path: '/like/:id',
    loader: () => import('../view/like/view/LikeViewPage'),
    permissionRequired: permissions.likeRead,
    exact: true,
  },

  {
    path: '/hashtag',
    loader: () =>
      import('../view/hashtag/list/HashtagListPage'),
    permissionRequired: permissions.hashtagRead,
    exact: true,
  },
  {
    path: '/hashtag/new',
    loader: () =>
      import('../view/hashtag/form/HashtagFormPage'),
    permissionRequired: permissions.hashtagCreate,
    exact: true,
  },
  {
    path: '/hashtag/importer',
    loader: () =>
      import(
        '../view/hashtag/importer/HashtagImporterPage'
      ),
    permissionRequired: permissions.hashtagImport,
    exact: true,
  },
  {
    path: '/hashtag/:id/edit',
    loader: () =>
      import('../view/hashtag/form/HashtagFormPage'),
    permissionRequired: permissions.hashtagEdit,
    exact: true,
  },
  {
    path: '/hashtag/:id',
    loader: () =>
      import('../view/hashtag/view/HashtagViewPage'),
    permissionRequired: permissions.hashtagRead,
    exact: true,
  },

  {
    path: '/post-hashtag',
    loader: () =>
      import(
        '../view/postHashtag/list/PostHashtagListPage'
      ),
    permissionRequired: permissions.postHashtagRead,
    exact: true,
  },
  {
    path: '/post-hashtag/new',
    loader: () =>
      import(
        '../view/postHashtag/form/PostHashtagFormPage'
      ),
    permissionRequired: permissions.postHashtagCreate,
    exact: true,
  },
  {
    path: '/post-hashtag/importer',
    loader: () =>
      import(
        '../view/postHashtag/importer/PostHashtagImporterPage'
      ),
    permissionRequired: permissions.postHashtagImport,
    exact: true,
  },
  {
    path: '/post-hashtag/:id/edit',
    loader: () =>
      import(
        '../view/postHashtag/form/PostHashtagFormPage'
      ),
    permissionRequired: permissions.postHashtagEdit,
    exact: true,
  },
  {
    path: '/post-hashtag/:id',
    loader: () =>
      import(
        '../view/postHashtag/view/PostHashtagViewPage'
      ),
    permissionRequired: permissions.postHashtagRead,
    exact: true,
  },

  {
    path: '/artist',
    loader: () =>
      import('../view/artist/list/ArtistListPage'),
    permissionRequired: permissions.artistRead,
    exact: true,
  },
  {
    path: '/artist/new',
    loader: () =>
      import('../view/artist/form/ArtistFormPage'),
    permissionRequired: permissions.artistCreate,
    exact: true,
  },
  {
    path: '/artist/importer',
    loader: () =>
      import('../view/artist/importer/ArtistImporterPage'),
    permissionRequired: permissions.artistImport,
    exact: true,
  },
  {
    path: '/artist/:id/edit',
    loader: () =>
      import('../view/artist/form/ArtistFormPage'),
    permissionRequired: permissions.artistEdit,
    exact: true,
  },
  {
    path: '/artist/:id',
    loader: () =>
      import('../view/artist/view/ArtistViewPage'),
    permissionRequired: permissions.artistRead,
    exact: true,
  },

  {
    path: '/album',
    loader: () =>
      import('../view/album/list/AlbumListPage'),
    permissionRequired: permissions.albumRead,
    exact: true,
  },
  {
    path: '/album/new',
    loader: () =>
      import('../view/album/form/AlbumFormPage'),
    permissionRequired: permissions.albumCreate,
    exact: true,
  },
  {
    path: '/album/importer',
    loader: () =>
      import('../view/album/importer/AlbumImporterPage'),
    permissionRequired: permissions.albumImport,
    exact: true,
  },
  {
    path: '/album/:id/edit',
    loader: () =>
      import('../view/album/form/AlbumFormPage'),
    permissionRequired: permissions.albumEdit,
    exact: true,
  },
  {
    path: '/album/:id',
    loader: () =>
      import('../view/album/view/AlbumViewPage'),
    permissionRequired: permissions.albumRead,
    exact: true,
  },

  {
    path: '/song',
    loader: () => import('../view/song/list/SongListPage'),
    permissionRequired: permissions.songRead,
    exact: true,
  },
  {
    path: '/song/new',
    loader: () => import('../view/song/form/SongFormPage'),
    permissionRequired: permissions.songCreate,
    exact: true,
  },
  {
    path: '/song/importer',
    loader: () =>
      import('../view/song/importer/SongImporterPage'),
    permissionRequired: permissions.songImport,
    exact: true,
  },
  {
    path: '/song/:id/edit',
    loader: () => import('../view/song/form/SongFormPage'),
    permissionRequired: permissions.songEdit,
    exact: true,
  },
  {
    path: '/song/:id',
    loader: () => import('../view/song/view/SongViewPage'),
    permissionRequired: permissions.songRead,
    exact: true,
  },

  {
    path: '/playlist',
    loader: () =>
      import('../view/playlist/list/PlaylistListPage'),
    permissionRequired: permissions.playlistRead,
    exact: true,
  },
  {
    path: '/playlist/new',
    loader: () =>
      import('../view/playlist/form/PlaylistFormPage'),
    permissionRequired: permissions.playlistCreate,
    exact: true,
  },
  {
    path: '/playlist/importer',
    loader: () =>
      import(
        '../view/playlist/importer/PlaylistImporterPage'
      ),
    permissionRequired: permissions.playlistImport,
    exact: true,
  },
  {
    path: '/playlist/:id/edit',
    loader: () =>
      import('../view/playlist/form/PlaylistFormPage'),
    permissionRequired: permissions.playlistEdit,
    exact: true,
  },
  {
    path: '/playlist/:id',
    loader: () =>
      import('../view/playlist/view/PlaylistViewPage'),
    permissionRequired: permissions.playlistRead,
    exact: true,
  },

  {
    path: '/playlist-song',
    loader: () =>
      import(
        '../view/playlistSong/list/PlaylistSongListPage'
      ),
    permissionRequired: permissions.playlistSongRead,
    exact: true,
  },
  {
    path: '/playlist-song/new',
    loader: () =>
      import(
        '../view/playlistSong/form/PlaylistSongFormPage'
      ),
    permissionRequired: permissions.playlistSongCreate,
    exact: true,
  },
  {
    path: '/playlist-song/importer',
    loader: () =>
      import(
        '../view/playlistSong/importer/PlaylistSongImporterPage'
      ),
    permissionRequired: permissions.playlistSongImport,
    exact: true,
  },
  {
    path: '/playlist-song/:id/edit',
    loader: () =>
      import(
        '../view/playlistSong/form/PlaylistSongFormPage'
      ),
    permissionRequired: permissions.playlistSongEdit,
    exact: true,
  },
  {
    path: '/playlist-song/:id',
    loader: () =>
      import(
        '../view/playlistSong/view/PlaylistSongViewPage'
      ),
    permissionRequired: permissions.playlistSongRead,
    exact: true,
  },

  {
    path: '/user-playlist',
    loader: () =>
      import(
        '../view/userPlaylist/list/UserPlaylistListPage'
      ),
    permissionRequired: permissions.userPlaylistRead,
    exact: true,
  },
  {
    path: '/user-playlist/new',
    loader: () =>
      import(
        '../view/userPlaylist/form/UserPlaylistFormPage'
      ),
    permissionRequired: permissions.userPlaylistCreate,
    exact: true,
  },
  {
    path: '/user-playlist/importer',
    loader: () =>
      import(
        '../view/userPlaylist/importer/UserPlaylistImporterPage'
      ),
    permissionRequired: permissions.userPlaylistImport,
    exact: true,
  },
  {
    path: '/user-playlist/:id/edit',
    loader: () =>
      import(
        '../view/userPlaylist/form/UserPlaylistFormPage'
      ),
    permissionRequired: permissions.userPlaylistEdit,
    exact: true,
  },
  {
    path: '/user-playlist/:id',
    loader: () =>
      import(
        '../view/userPlaylist/view/UserPlaylistViewPage'
      ),
    permissionRequired: permissions.userPlaylistRead,
    exact: true,
  },

  {
    path: '/city',
    loader: () => import('../view/city/list/CityListPage'),
    permissionRequired: permissions.cityRead,
    exact: true,
  },
  {
    path: '/city/new',
    loader: () => import('../view/city/form/CityFormPage'),
    permissionRequired: permissions.cityCreate,
    exact: true,
  },
  {
    path: '/city/importer',
    loader: () =>
      import('../view/city/importer/CityImporterPage'),
    permissionRequired: permissions.cityImport,
    exact: true,
  },
  {
    path: '/city/:id/edit',
    loader: () => import('../view/city/form/CityFormPage'),
    permissionRequired: permissions.cityEdit,
    exact: true,
  },
  {
    path: '/city/:id',
    loader: () => import('../view/city/view/CityViewPage'),
    permissionRequired: permissions.cityRead,
    exact: true,
  },

  {
    path: '/country',
    loader: () =>
      import('../view/country/list/CountryListPage'),
    permissionRequired: permissions.countryRead,
    exact: true,
  },
  {
    path: '/country/new',
    loader: () =>
      import('../view/country/form/CountryFormPage'),
    permissionRequired: permissions.countryCreate,
    exact: true,
  },
  {
    path: '/country/importer',
    loader: () =>
      import(
        '../view/country/importer/CountryImporterPage'
      ),
    permissionRequired: permissions.countryImport,
    exact: true,
  },
  {
    path: '/country/:id/edit',
    loader: () =>
      import('../view/country/form/CountryFormPage'),
    permissionRequired: permissions.countryEdit,
    exact: true,
  },
  {
    path: '/country/:id',
    loader: () =>
      import('../view/country/view/CountryViewPage'),
    permissionRequired: permissions.countryRead,
    exact: true,
  },

  {
    path: '/address',
    loader: () =>
      import('../view/address/list/AddressListPage'),
    permissionRequired: permissions.addressRead,
    exact: true,
  },
  {
    path: '/address/new',
    loader: () =>
      import('../view/address/form/AddressFormPage'),
    permissionRequired: permissions.addressCreate,
    exact: true,
  },
  {
    path: '/address/importer',
    loader: () =>
      import(
        '../view/address/importer/AddressImporterPage'
      ),
    permissionRequired: permissions.addressImport,
    exact: true,
  },
  {
    path: '/address/:id/edit',
    loader: () =>
      import('../view/address/form/AddressFormPage'),
    permissionRequired: permissions.addressEdit,
    exact: true,
  },
  {
    path: '/address/:id',
    loader: () =>
      import('../view/address/view/AddressViewPage'),
    permissionRequired: permissions.addressRead,
    exact: true,
  },

  {
    path: '/product-category',
    loader: () =>
      import(
        '../view/productCategory/list/ProductCategoryListPage'
      ),
    permissionRequired: permissions.productCategoryRead,
    exact: true,
  },
  {
    path: '/product-category/new',
    loader: () =>
      import(
        '../view/productCategory/form/ProductCategoryFormPage'
      ),
    permissionRequired: permissions.productCategoryCreate,
    exact: true,
  },
  {
    path: '/product-category/importer',
    loader: () =>
      import(
        '../view/productCategory/importer/ProductCategoryImporterPage'
      ),
    permissionRequired: permissions.productCategoryImport,
    exact: true,
  },
  {
    path: '/product-category/:id/edit',
    loader: () =>
      import(
        '../view/productCategory/form/ProductCategoryFormPage'
      ),
    permissionRequired: permissions.productCategoryEdit,
    exact: true,
  },
  {
    path: '/product-category/:id',
    loader: () =>
      import(
        '../view/productCategory/view/ProductCategoryViewPage'
      ),
    permissionRequired: permissions.productCategoryRead,
    exact: true,
  },

  {
    path: '/order-detail',
    loader: () =>
      import(
        '../view/orderDetail/list/OrderDetailListPage'
      ),
    permissionRequired: permissions.orderDetailRead,
    exact: true,
  },
  {
    path: '/order-detail/new',
    loader: () =>
      import(
        '../view/orderDetail/form/OrderDetailFormPage'
      ),
    permissionRequired: permissions.orderDetailCreate,
    exact: true,
  },
  {
    path: '/order-detail/importer',
    loader: () =>
      import(
        '../view/orderDetail/importer/OrderDetailImporterPage'
      ),
    permissionRequired: permissions.orderDetailImport,
    exact: true,
  },
  {
    path: '/order-detail/:id/edit',
    loader: () =>
      import(
        '../view/orderDetail/form/OrderDetailFormPage'
      ),
    permissionRequired: permissions.orderDetailEdit,
    exact: true,
  },
  {
    path: '/order-detail/:id',
    loader: () =>
      import(
        '../view/orderDetail/view/OrderDetailViewPage'
      ),
    permissionRequired: permissions.orderDetailRead,
    exact: true,
  },

  {
    path: '/payment-methods',
    loader: () =>
      import(
        '../view/paymentMethods/list/PaymentMethodsListPage'
      ),
    permissionRequired: permissions.paymentMethodsRead,
    exact: true,
  },
  {
    path: '/payment-methods/new',
    loader: () =>
      import(
        '../view/paymentMethods/form/PaymentMethodsFormPage'
      ),
    permissionRequired: permissions.paymentMethodsCreate,
    exact: true,
  },
  {
    path: '/payment-methods/importer',
    loader: () =>
      import(
        '../view/paymentMethods/importer/PaymentMethodsImporterPage'
      ),
    permissionRequired: permissions.paymentMethodsImport,
    exact: true,
  },
  {
    path: '/payment-methods/:id/edit',
    loader: () =>
      import(
        '../view/paymentMethods/form/PaymentMethodsFormPage'
      ),
    permissionRequired: permissions.paymentMethodsEdit,
    exact: true,
  },
  {
    path: '/payment-methods/:id',
    loader: () =>
      import(
        '../view/paymentMethods/view/PaymentMethodsViewPage'
      ),
    permissionRequired: permissions.paymentMethodsRead,
    exact: true,
  },

  {
    path: '/product-review',
    loader: () =>
      import(
        '../view/productReview/list/ProductReviewListPage'
      ),
    permissionRequired: permissions.productReviewRead,
    exact: true,
  },
  {
    path: '/product-review/new',
    loader: () =>
      import(
        '../view/productReview/form/ProductReviewFormPage'
      ),
    permissionRequired: permissions.productReviewCreate,
    exact: true,
  },
  {
    path: '/product-review/importer',
    loader: () =>
      import(
        '../view/productReview/importer/ProductReviewImporterPage'
      ),
    permissionRequired: permissions.productReviewImport,
    exact: true,
  },
  {
    path: '/product-review/:id/edit',
    loader: () =>
      import(
        '../view/productReview/form/ProductReviewFormPage'
      ),
    permissionRequired: permissions.productReviewEdit,
    exact: true,
  },
  {
    path: '/product-review/:id',
    loader: () =>
      import(
        '../view/productReview/view/ProductReviewViewPage'
      ),
    permissionRequired: permissions.productReviewRead,
    exact: true,
  },

  {
    path: '/promotions',
    loader: () =>
      import('../view/promotions/list/PromotionsListPage'),
    permissionRequired: permissions.promotionsRead,
    exact: true,
  },
  {
    path: '/promotions/new',
    loader: () =>
      import('../view/promotions/form/PromotionsFormPage'),
    permissionRequired: permissions.promotionsCreate,
    exact: true,
  },
  {
    path: '/promotions/importer',
    loader: () =>
      import(
        '../view/promotions/importer/PromotionsImporterPage'
      ),
    permissionRequired: permissions.promotionsImport,
    exact: true,
  },
  {
    path: '/promotions/:id/edit',
    loader: () =>
      import('../view/promotions/form/PromotionsFormPage'),
    permissionRequired: permissions.promotionsEdit,
    exact: true,
  },
  {
    path: '/promotions/:id',
    loader: () =>
      import('../view/promotions/view/PromotionsViewPage'),
    permissionRequired: permissions.promotionsRead,
    exact: true,
  },

  {
    path: '/course',
    loader: () =>
      import('../view/course/list/CourseListPage'),
    permissionRequired: permissions.courseRead,
    exact: true,
  },
  {
    path: '/course/new',
    loader: () =>
      import('../view/course/form/CourseFormPage'),
    permissionRequired: permissions.courseCreate,
    exact: true,
  },
  {
    path: '/course/importer',
    loader: () =>
      import('../view/course/importer/CourseImporterPage'),
    permissionRequired: permissions.courseImport,
    exact: true,
  },
  {
    path: '/course/:id/edit',
    loader: () =>
      import('../view/course/form/CourseFormPage'),
    permissionRequired: permissions.courseEdit,
    exact: true,
  },
  {
    path: '/course/:id',
    loader: () =>
      import('../view/course/view/CourseViewPage'),
    permissionRequired: permissions.courseRead,
    exact: true,
  },

  {
    path: '/teacher',
    loader: () =>
      import('../view/teacher/list/TeacherListPage'),
    permissionRequired: permissions.teacherRead,
    exact: true,
  },
  {
    path: '/teacher/new',
    loader: () =>
      import('../view/teacher/form/TeacherFormPage'),
    permissionRequired: permissions.teacherCreate,
    exact: true,
  },
  {
    path: '/teacher/importer',
    loader: () =>
      import(
        '../view/teacher/importer/TeacherImporterPage'
      ),
    permissionRequired: permissions.teacherImport,
    exact: true,
  },
  {
    path: '/teacher/:id/edit',
    loader: () =>
      import('../view/teacher/form/TeacherFormPage'),
    permissionRequired: permissions.teacherEdit,
    exact: true,
  },
  {
    path: '/teacher/:id',
    loader: () =>
      import('../view/teacher/view/TeacherViewPage'),
    permissionRequired: permissions.teacherRead,
    exact: true,
  },

  {
    path: '/lesson',
    loader: () =>
      import('../view/lesson/list/LessonListPage'),
    permissionRequired: permissions.lessonRead,
    exact: true,
  },
  {
    path: '/lesson/new',
    loader: () =>
      import('../view/lesson/form/LessonFormPage'),
    permissionRequired: permissions.lessonCreate,
    exact: true,
  },
  {
    path: '/lesson/importer',
    loader: () =>
      import('../view/lesson/importer/LessonImporterPage'),
    permissionRequired: permissions.lessonImport,
    exact: true,
  },
  {
    path: '/lesson/:id/edit',
    loader: () =>
      import('../view/lesson/form/LessonFormPage'),
    permissionRequired: permissions.lessonEdit,
    exact: true,
  },
  {
    path: '/lesson/:id',
    loader: () =>
      import('../view/lesson/view/LessonViewPage'),
    permissionRequired: permissions.lessonRead,
    exact: true,
  },

  {
    path: '/course-enrollment',
    loader: () =>
      import(
        '../view/courseEnrollment/list/CourseEnrollmentListPage'
      ),
    permissionRequired: permissions.courseEnrollmentRead,
    exact: true,
  },
  {
    path: '/course-enrollment/new',
    loader: () =>
      import(
        '../view/courseEnrollment/form/CourseEnrollmentFormPage'
      ),
    permissionRequired: permissions.courseEnrollmentCreate,
    exact: true,
  },
  {
    path: '/course-enrollment/importer',
    loader: () =>
      import(
        '../view/courseEnrollment/importer/CourseEnrollmentImporterPage'
      ),
    permissionRequired: permissions.courseEnrollmentImport,
    exact: true,
  },
  {
    path: '/course-enrollment/:id/edit',
    loader: () =>
      import(
        '../view/courseEnrollment/form/CourseEnrollmentFormPage'
      ),
    permissionRequired: permissions.courseEnrollmentEdit,
    exact: true,
  },
  {
    path: '/course-enrollment/:id',
    loader: () =>
      import(
        '../view/courseEnrollment/view/CourseEnrollmentViewPage'
      ),
    permissionRequired: permissions.courseEnrollmentRead,
    exact: true,
  },

  {
    path: '/student',
    loader: () =>
      import('../view/student/list/StudentListPage'),
    permissionRequired: permissions.studentRead,
    exact: true,
  },
  {
    path: '/student/new',
    loader: () =>
      import('../view/student/form/StudentFormPage'),
    permissionRequired: permissions.studentCreate,
    exact: true,
  },
  {
    path: '/student/importer',
    loader: () =>
      import(
        '../view/student/importer/StudentImporterPage'
      ),
    permissionRequired: permissions.studentImport,
    exact: true,
  },
  {
    path: '/student/:id/edit',
    loader: () =>
      import('../view/student/form/StudentFormPage'),
    permissionRequired: permissions.studentEdit,
    exact: true,
  },
  {
    path: '/student/:id',
    loader: () =>
      import('../view/student/view/StudentViewPage'),
    permissionRequired: permissions.studentRead,
    exact: true,
  },

  {
    path: '/course-comment',
    loader: () =>
      import(
        '../view/courseComment/list/CourseCommentListPage'
      ),
    permissionRequired: permissions.courseCommentRead,
    exact: true,
  },
  {
    path: '/course-comment/new',
    loader: () =>
      import(
        '../view/courseComment/form/CourseCommentFormPage'
      ),
    permissionRequired: permissions.courseCommentCreate,
    exact: true,
  },
  {
    path: '/course-comment/importer',
    loader: () =>
      import(
        '../view/courseComment/importer/CourseCommentImporterPage'
      ),
    permissionRequired: permissions.courseCommentImport,
    exact: true,
  },
  {
    path: '/course-comment/:id/edit',
    loader: () =>
      import(
        '../view/courseComment/form/CourseCommentFormPage'
      ),
    permissionRequired: permissions.courseCommentEdit,
    exact: true,
  },
  {
    path: '/course-comment/:id',
    loader: () =>
      import(
        '../view/courseComment/view/CourseCommentViewPage'
      ),
    permissionRequired: permissions.courseCommentRead,
    exact: true,
  },

  {
    path: '/course-transaction',
    loader: () =>
      import(
        '../view/courseTransaction/list/CourseTransactionListPage'
      ),
    permissionRequired: permissions.courseTransactionRead,
    exact: true,
  },
  {
    path: '/course-transaction/new',
    loader: () =>
      import(
        '../view/courseTransaction/form/CourseTransactionFormPage'
      ),
    permissionRequired: permissions.courseTransactionCreate,
    exact: true,
  },
  {
    path: '/course-transaction/importer',
    loader: () =>
      import(
        '../view/courseTransaction/importer/CourseTransactionImporterPage'
      ),
    permissionRequired: permissions.courseTransactionImport,
    exact: true,
  },
  {
    path: '/course-transaction/:id/edit',
    loader: () =>
      import(
        '../view/courseTransaction/form/CourseTransactionFormPage'
      ),
    permissionRequired: permissions.courseTransactionEdit,
    exact: true,
  },
  {
    path: '/course-transaction/:id',
    loader: () =>
      import(
        '../view/courseTransaction/view/CourseTransactionViewPage'
      ),
    permissionRequired: permissions.courseTransactionRead,
    exact: true,
  },

  {
    path: '/course-category',
    loader: () =>
      import(
        '../view/courseCategory/list/CourseCategoryListPage'
      ),
    permissionRequired: permissions.courseCategoryRead,
    exact: true,
  },
  {
    path: '/course-category/new',
    loader: () =>
      import(
        '../view/courseCategory/form/CourseCategoryFormPage'
      ),
    permissionRequired: permissions.courseCategoryCreate,
    exact: true,
  },
  {
    path: '/course-category/importer',
    loader: () =>
      import(
        '../view/courseCategory/importer/CourseCategoryImporterPage'
      ),
    permissionRequired: permissions.courseCategoryImport,
    exact: true,
  },
  {
    path: '/course-category/:id/edit',
    loader: () =>
      import(
        '../view/courseCategory/form/CourseCategoryFormPage'
      ),
    permissionRequired: permissions.courseCategoryEdit,
    exact: true,
  },
  {
    path: '/course-category/:id',
    loader: () =>
      import(
        '../view/courseCategory/view/CourseCategoryViewPage'
      ),
    permissionRequired: permissions.courseCategoryRead,
    exact: true,
  },

  {
    path: '/category-course-relation',
    loader: () =>
      import(
        '../view/categoryCourseRelation/list/CategoryCourseRelationListPage'
      ),
    permissionRequired:
      permissions.categoryCourseRelationRead,
    exact: true,
  },
  {
    path: '/category-course-relation/new',
    loader: () =>
      import(
        '../view/categoryCourseRelation/form/CategoryCourseRelationFormPage'
      ),
    permissionRequired:
      permissions.categoryCourseRelationCreate,
    exact: true,
  },
  {
    path: '/category-course-relation/importer',
    loader: () =>
      import(
        '../view/categoryCourseRelation/importer/CategoryCourseRelationImporterPage'
      ),
    permissionRequired:
      permissions.categoryCourseRelationImport,
    exact: true,
  },
  {
    path: '/category-course-relation/:id/edit',
    loader: () =>
      import(
        '../view/categoryCourseRelation/form/CategoryCourseRelationFormPage'
      ),
    permissionRequired:
      permissions.categoryCourseRelationEdit,
    exact: true,
  },
  {
    path: '/category-course-relation/:id',
    loader: () =>
      import(
        '../view/categoryCourseRelation/view/CategoryCourseRelationViewPage'
      ),
    permissionRequired:
      permissions.categoryCourseRelationRead,
    exact: true,
  },

  {
    path: '/course-progress',
    loader: () =>
      import(
        '../view/courseProgress/list/CourseProgressListPage'
      ),
    permissionRequired: permissions.courseProgressRead,
    exact: true,
  },
  {
    path: '/course-progress/new',
    loader: () =>
      import(
        '../view/courseProgress/form/CourseProgressFormPage'
      ),
    permissionRequired: permissions.courseProgressCreate,
    exact: true,
  },
  {
    path: '/course-progress/importer',
    loader: () =>
      import(
        '../view/courseProgress/importer/CourseProgressImporterPage'
      ),
    permissionRequired: permissions.courseProgressImport,
    exact: true,
  },
  {
    path: '/course-progress/:id/edit',
    loader: () =>
      import(
        '../view/courseProgress/form/CourseProgressFormPage'
      ),
    permissionRequired: permissions.courseProgressEdit,
    exact: true,
  },
  {
    path: '/course-progress/:id',
    loader: () =>
      import(
        '../view/courseProgress/view/CourseProgressViewPage'
      ),
    permissionRequired: permissions.courseProgressRead,
    exact: true,
  },

  {
    path: '/message',
    loader: () =>
      import('../view/message/list/MessageListPage'),
    permissionRequired: permissions.messageRead,
    exact: true,
  },
  {
    path: '/message/new',
    loader: () =>
      import('../view/message/form/MessageFormPage'),
    permissionRequired: permissions.messageCreate,
    exact: true,
  },
  {
    path: '/message/importer',
    loader: () =>
      import(
        '../view/message/importer/MessageImporterPage'
      ),
    permissionRequired: permissions.messageImport,
    exact: true,
  },
  {
    path: '/message/:id/edit',
    loader: () =>
      import('../view/message/form/MessageFormPage'),
    permissionRequired: permissions.messageEdit,
    exact: true,
  },
  {
    path: '/message/:id',
    loader: () =>
      import('../view/message/view/MessageViewPage'),
    permissionRequired: permissions.messageRead,
    exact: true,
  },

  {
    path: '/conversation',
    loader: () =>
      import(
        '../view/conversation/list/ConversationListPage'
      ),
    permissionRequired: permissions.conversationRead,
    exact: true,
  },
  {
    path: '/conversation/new',
    loader: () =>
      import(
        '../view/conversation/form/ConversationFormPage'
      ),
    permissionRequired: permissions.conversationCreate,
    exact: true,
  },
  {
    path: '/conversation/importer',
    loader: () =>
      import(
        '../view/conversation/importer/ConversationImporterPage'
      ),
    permissionRequired: permissions.conversationImport,
    exact: true,
  },
  {
    path: '/conversation/:id/edit',
    loader: () =>
      import(
        '../view/conversation/form/ConversationFormPage'
      ),
    permissionRequired: permissions.conversationEdit,
    exact: true,
  },
  {
    path: '/conversation/:id',
    loader: () =>
      import(
        '../view/conversation/view/ConversationViewPage'
      ),
    permissionRequired: permissions.conversationRead,
    exact: true,
  },

  {
    path: '/conversation-participant',
    loader: () =>
      import(
        '../view/conversationParticipant/list/ConversationParticipantListPage'
      ),
    permissionRequired:
      permissions.conversationParticipantRead,
    exact: true,
  },
  {
    path: '/conversation-participant/new',
    loader: () =>
      import(
        '../view/conversationParticipant/form/ConversationParticipantFormPage'
      ),
    permissionRequired:
      permissions.conversationParticipantCreate,
    exact: true,
  },
  {
    path: '/conversation-participant/importer',
    loader: () =>
      import(
        '../view/conversationParticipant/importer/ConversationParticipantImporterPage'
      ),
    permissionRequired:
      permissions.conversationParticipantImport,
    exact: true,
  },
  {
    path: '/conversation-participant/:id/edit',
    loader: () =>
      import(
        '../view/conversationParticipant/form/ConversationParticipantFormPage'
      ),
    permissionRequired:
      permissions.conversationParticipantEdit,
    exact: true,
  },
  {
    path: '/conversation-participant/:id',
    loader: () =>
      import(
        '../view/conversationParticipant/view/ConversationParticipantViewPage'
      ),
    permissionRequired:
      permissions.conversationParticipantRead,
    exact: true,
  },

  {
    path: '/business',
    loader: () =>
      import('../view/business/list/BusinessListPage'),
    permissionRequired: permissions.businessRead,
    exact: true,
  },
  {
    path: '/business/new',
    loader: () =>
      import('../view/business/form/BusinessFormPage'),
    permissionRequired: permissions.businessCreate,
    exact: true,
  },
  {
    path: '/business/importer',
    loader: () =>
      import(
        '../view/business/importer/BusinessImporterPage'
      ),
    permissionRequired: permissions.businessImport,
    exact: true,
  },
  {
    path: '/business/:id/edit',
    loader: () =>
      import('../view/business/form/BusinessFormPage'),
    permissionRequired: permissions.businessEdit,
    exact: true,
  },
  {
    path: '/business/:id',
    loader: () =>
      import('../view/business/view/BusinessViewPage'),
    permissionRequired: permissions.businessRead,
    exact: true,
  },

  {
    path: '/business-category',
    loader: () =>
      import(
        '../view/businessCategory/list/BusinessCategoryListPage'
      ),
    permissionRequired: permissions.businessCategoryRead,
    exact: true,
  },
  {
    path: '/business-category/new',
    loader: () =>
      import(
        '../view/businessCategory/form/BusinessCategoryFormPage'
      ),
    permissionRequired: permissions.businessCategoryCreate,
    exact: true,
  },
  {
    path: '/business-category/importer',
    loader: () =>
      import(
        '../view/businessCategory/importer/BusinessCategoryImporterPage'
      ),
    permissionRequired: permissions.businessCategoryImport,
    exact: true,
  },
  {
    path: '/business-category/:id/edit',
    loader: () =>
      import(
        '../view/businessCategory/form/BusinessCategoryFormPage'
      ),
    permissionRequired: permissions.businessCategoryEdit,
    exact: true,
  },
  {
    path: '/business-category/:id',
    loader: () =>
      import(
        '../view/businessCategory/view/BusinessCategoryViewPage'
      ),
    permissionRequired: permissions.businessCategoryRead,
    exact: true,
  },

  {
    path: '/service',
    loader: () =>
      import('../view/service/list/ServiceListPage'),
    permissionRequired: permissions.serviceRead,
    exact: true,
  },
  {
    path: '/service/new',
    loader: () =>
      import('../view/service/form/ServiceFormPage'),
    permissionRequired: permissions.serviceCreate,
    exact: true,
  },
  {
    path: '/service/importer',
    loader: () =>
      import(
        '../view/service/importer/ServiceImporterPage'
      ),
    permissionRequired: permissions.serviceImport,
    exact: true,
  },
  {
    path: '/service/:id/edit',
    loader: () =>
      import('../view/service/form/ServiceFormPage'),
    permissionRequired: permissions.serviceEdit,
    exact: true,
  },
  {
    path: '/service/:id',
    loader: () =>
      import('../view/service/view/ServiceViewPage'),
    permissionRequired: permissions.serviceRead,
    exact: true,
  },

  {
    path: '/availability-timeslot',
    loader: () =>
      import(
        '../view/availabilityTimeslot/list/AvailabilityTimeslotListPage'
      ),
    permissionRequired:
      permissions.availabilityTimeslotRead,
    exact: true,
  },
  {
    path: '/availability-timeslot/new',
    loader: () =>
      import(
        '../view/availabilityTimeslot/form/AvailabilityTimeslotFormPage'
      ),
    permissionRequired:
      permissions.availabilityTimeslotCreate,
    exact: true,
  },
  {
    path: '/availability-timeslot/importer',
    loader: () =>
      import(
        '../view/availabilityTimeslot/importer/AvailabilityTimeslotImporterPage'
      ),
    permissionRequired:
      permissions.availabilityTimeslotImport,
    exact: true,
  },
  {
    path: '/availability-timeslot/:id/edit',
    loader: () =>
      import(
        '../view/availabilityTimeslot/form/AvailabilityTimeslotFormPage'
      ),
    permissionRequired:
      permissions.availabilityTimeslotEdit,
    exact: true,
  },
  {
    path: '/availability-timeslot/:id',
    loader: () =>
      import(
        '../view/availabilityTimeslot/view/AvailabilityTimeslotViewPage'
      ),
    permissionRequired:
      permissions.availabilityTimeslotRead,
    exact: true,
  },

  {
    path: '/appointment',
    loader: () =>
      import(
        '../view/appointment/list/AppointmentListPage'
      ),
    permissionRequired: permissions.appointmentRead,
    exact: true,
  },
  {
    path: '/appointment/new',
    loader: () =>
      import(
        '../view/appointment/form/AppointmentFormPage'
      ),
    permissionRequired: permissions.appointmentCreate,
    exact: true,
  },
  {
    path: '/appointment/importer',
    loader: () =>
      import(
        '../view/appointment/importer/AppointmentImporterPage'
      ),
    permissionRequired: permissions.appointmentImport,
    exact: true,
  },
  {
    path: '/appointment/:id/edit',
    loader: () =>
      import(
        '../view/appointment/form/AppointmentFormPage'
      ),
    permissionRequired: permissions.appointmentEdit,
    exact: true,
  },
  {
    path: '/appointment/:id',
    loader: () =>
      import(
        '../view/appointment/view/AppointmentViewPage'
      ),
    permissionRequired: permissions.appointmentRead,
    exact: true,
  },

  {
    path: '/brand',
    loader: () =>
      import('../view/brand/list/BrandListPage'),
    permissionRequired: permissions.brandRead,
    exact: true,
  },
  {
    path: '/brand/new',
    loader: () =>
      import('../view/brand/form/BrandFormPage'),
    permissionRequired: permissions.brandCreate,
    exact: true,
  },
  {
    path: '/brand/importer',
    loader: () =>
      import('../view/brand/importer/BrandImporterPage'),
    permissionRequired: permissions.brandImport,
    exact: true,
  },
  {
    path: '/brand/:id/edit',
    loader: () =>
      import('../view/brand/form/BrandFormPage'),
    permissionRequired: permissions.brandEdit,
    exact: true,
  },
  {
    path: '/brand/:id',
    loader: () =>
      import('../view/brand/view/BrandViewPage'),
    permissionRequired: permissions.brandRead,
    exact: true,
  },

  {
    path: '/delivery-method',
    loader: () =>
      import(
        '../view/deliveryMethod/list/DeliveryMethodListPage'
      ),
    permissionRequired: permissions.deliveryMethodRead,
    exact: true,
  },
  {
    path: '/delivery-method/new',
    loader: () =>
      import(
        '../view/deliveryMethod/form/DeliveryMethodFormPage'
      ),
    permissionRequired: permissions.deliveryMethodCreate,
    exact: true,
  },
  {
    path: '/delivery-method/importer',
    loader: () =>
      import(
        '../view/deliveryMethod/importer/DeliveryMethodImporterPage'
      ),
    permissionRequired: permissions.deliveryMethodImport,
    exact: true,
  },
  {
    path: '/delivery-method/:id/edit',
    loader: () =>
      import(
        '../view/deliveryMethod/form/DeliveryMethodFormPage'
      ),
    permissionRequired: permissions.deliveryMethodEdit,
    exact: true,
  },
  {
    path: '/delivery-method/:id',
    loader: () =>
      import(
        '../view/deliveryMethod/view/DeliveryMethodViewPage'
      ),
    permissionRequired: permissions.deliveryMethodRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('../view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('../view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('../view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('../view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('../view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('../view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('../view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('../view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('../view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('../view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('../view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('../view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
