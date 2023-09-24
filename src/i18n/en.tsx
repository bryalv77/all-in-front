const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    customer: {
        name: 'customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'customer_export',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer successfully saved',
        },
        update: {
          success: 'Customer successfully saved',
        },
        destroy: {
          success: 'Customer successfully deleted',
        },
        destroyAll: {
          success: 'Customer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Customer',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          'userId': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'male': 'Male',
            'female': 'Female',
            'other': 'Other',
          },
        },
        placeholders: {
          'userId': 'User',
        },
        hints: {
          'userId': 'User',
        },
        new: {
          title: 'New Customer',
        },
        view: {
          title: 'View Customer',
        },
        importer: {
          title: 'Import Customers',
          fileName: 'customer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'product_export',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product successfully saved',
        },
        update: {
          success: 'Product successfully saved',
        },
        destroy: {
          success: 'Product successfully deleted',
        },
        destroyAll: {
          success: 'Product(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'unitPriceRange': 'Unit Price',
          'unitPrice': 'Unit Price',
          'photos': 'Photos',
          'category': 'Category',
          'stockRange': 'Stock',
          'stock': 'Stock',
          'brandId': 'Brand',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'category': 'Category',
          'stock': 'Stock',
        },
        hints: {
          'category': 'Category',
          'stock': 'Stock',
          'active': 'Active',
        },
        new: {
          title: 'New Product',
        },
        view: {
          title: 'View Product',
        },
        importer: {
          title: 'Import Products',
          fileName: 'product_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'order_export',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order successfully saved',
        },
        update: {
          success: 'Order successfully saved',
        },
        destroy: {
          success: 'Order successfully deleted',
        },
        destroyAll: {
          success: 'Order(s) successfully deleted',
        },
        edit: {
          title: 'Edit Order',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'status': 'Status',
          'attachments': 'Attachments',
          'shippingPriceRange': 'Shipping Price',
          'shippingPrice': 'Shipping Price',
          'totalRange': 'Total',
          'total': 'Total',
          'deliver': 'Deliver',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'requested': 'Requested',
            'processing': 'Processing',
            'delivering': 'Delivering',
            'delivered': 'Delivered',
            'canceled': 'Canceled',
            'stuck': 'Stuck',
          },
        },
        placeholders: {
          'status': 'Status',
          'shippingPrice': 'Shipping Price',
          'total': 'Total',
          'deliver': 'Deliver',
        },
        hints: {
          'status': 'Status',
          'shippingPrice': 'Shipping Price',
          'total': 'Total',
          'deliver': 'Deliver',
        },
        new: {
          title: 'New Order',
        },
        view: {
          title: 'View Order',
        },
        importer: {
          title: 'Import Orders',
          fileName: 'order_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    operation: {
        name: 'operation',
        label: 'Operations',
        menu: 'Operations',
        exporterFileName: 'operation_export',
        list: {
          menu: 'Operations',
          title: 'Operations',
        },
        create: {
          success: 'Operation successfully saved',
        },
        update: {
          success: 'Operation successfully saved',
        },
        destroy: {
          success: 'Operation successfully deleted',
        },
        destroyAll: {
          success: 'Operation(s) successfully deleted',
        },
        edit: {
          title: 'Edit Operation',
        },
        fields: {
          id: 'Id',
          'fintonicId': 'FintonicId',
          'description': 'Description',
          'reference': 'Reference',
          'note': 'Note',
          'userDescription': 'UserDescription',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'valueDateRange': 'ValueDate',
          'valueDate': 'ValueDate',
          'operationDateRange': 'OperationDate',
          'operationDate': 'OperationDate',
          'cleanNote': 'CleanNote',
          'cleanUserDescription': 'CleanUserDescription',
          'primaryDisplay': 'PrimaryDisplay',
          'secondaryDisplay': 'SecondaryDisplay',
          'categoryId': 'CategoryId',
          'bankId': 'BankId',
          'receipt': 'Receipt',
          'userId': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'fintonicId': 'Fintonic Id',
          'description': 'Description',
          'reference': 'Reference',
          'note': 'Note',
          'userDescription': 'User Description',
          'quantity': 'Quantity',
          'valueDate': 'Value Date',
          'operationDate': 'Operation Date',
          'cleanNote': 'Clean Note',
          'cleanUserDescription': 'Clean User Description',
          'primaryDisplay': 'Primary Display',
          'secondaryDisplay': 'Secondary Display',
          'categoryId': 'Category',
          'bankId': 'Bank',
          'userId': 'User',
        },
        hints: {
          'fintonicId': 'Id',
          'description': 'Description',
          'reference': 'Reference',
          'note': 'Note',
          'userDescription': 'User Description',
          'quantity': 'Quantity',
          'valueDate': 'Value Date',
          'operationDate': 'Operation Date',
          'cleanNote': 'Clean Note',
          'cleanUserDescription': 'Clean User Description',
          'primaryDisplay': 'Primary Display',
          'secondaryDisplay': 'Secondary Display',
          'categoryId': 'Category',
          'bankId': 'Bank',
          'receipt': 'Receipt',
          'userId': 'User',
        },
        new: {
          title: 'New Operation',
        },
        view: {
          title: 'View Operation',
        },
        importer: {
          title: 'Import Operations',
          fileName: 'operation_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    bank: {
        name: 'bank',
        label: 'Banks',
        menu: 'Banks',
        exporterFileName: 'bank_export',
        list: {
          menu: 'Banks',
          title: 'Banks',
        },
        create: {
          success: 'Bank successfully saved',
        },
        update: {
          success: 'Bank successfully saved',
        },
        destroy: {
          success: 'Bank successfully deleted',
        },
        destroyAll: {
          success: 'Bank(s) successfully deleted',
        },
        edit: {
          title: 'Edit Bank',
        },
        fields: {
          id: 'Id',
          'fintonicId': 'FintonicId',
          'name': 'Name',
          'logo': 'Logo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'fintonicId': 'Fintonic Id',
          'name': 'Name',
        },
        hints: {
          'fintonicId': 'Id',
          'name': 'Name',
          'logo': 'Logo',
        },
        new: {
          title: 'New Bank',
        },
        view: {
          title: 'View Bank',
        },
        importer: {
          title: 'Import Banks',
          fileName: 'bank_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    category: {
        name: 'category',
        label: 'Categories',
        menu: 'Categories',
        exporterFileName: 'category_export',
        list: {
          menu: 'Categories',
          title: 'Categories',
        },
        create: {
          success: 'Category successfully saved',
        },
        update: {
          success: 'Category successfully saved',
        },
        destroy: {
          success: 'Category successfully deleted',
        },
        destroyAll: {
          success: 'Category(s) successfully deleted',
        },
        edit: {
          title: 'Edit Category',
        },
        fields: {
          id: 'Id',
          'fintonicId': 'FintonicId',
          'name': 'Name',
          'shortname': 'Shortname',
          'logo': 'Logo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'fintonicId': 'Fintonic Id',
          'name': 'Name',
          'shortname': 'Short Name',
        },
        hints: {
          'fintonicId': 'Fintonic Id',
          'name': 'Name',
          'shortname': 'Short Name',
          'logo': 'Logo',
        },
        new: {
          title: 'New Category',
        },
        view: {
          title: 'View Category',
        },
        importer: {
          title: 'Import Categories',
          fileName: 'category_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    taskList: {
        name: 'taskList',
        label: 'Task Lists',
        menu: 'Task Lists',
        exporterFileName: 'taskList_export',
        list: {
          menu: 'Task Lists',
          title: 'Task Lists',
        },
        create: {
          success: 'Task List successfully saved',
        },
        update: {
          success: 'Task List successfully saved',
        },
        destroy: {
          success: 'Task List successfully deleted',
        },
        destroyAll: {
          success: 'Task List(s) successfully deleted',
        },
        edit: {
          title: 'Edit Task List',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'userId': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'userId': 'User',
        },
        hints: {
          'name': 'Name',
          'userId': 'User',
        },
        new: {
          title: 'New Task List',
        },
        view: {
          title: 'View Task List',
        },
        importer: {
          title: 'Import Task Lists',
          fileName: 'taskList_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    tasks: {
        name: 'tasks',
        label: 'Tasks',
        menu: 'Tasks',
        exporterFileName: 'tasks_export',
        list: {
          menu: 'Tasks',
          title: 'Tasks',
        },
        create: {
          success: 'Tasks successfully saved',
        },
        update: {
          success: 'Tasks successfully saved',
        },
        destroy: {
          success: 'Tasks successfully deleted',
        },
        destroyAll: {
          success: 'Tasks(s) successfully deleted',
        },
        edit: {
          title: 'Edit Tasks',
        },
        fields: {
          id: 'Id',
          'description': 'Description',
          'dueDateRange': 'DueDate',
          'dueDate': 'DueDate',
          'status': 'Status',
          'taskList': 'Task List',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'open': 'Open',
            'in_progress': 'In_progress',
            'stuck': 'Stuck',
            'closed': 'Closed',
          },
        },
        placeholders: {
          'description': 'Task',
          'dueDate': 'Due Date',
          'status': 'Status',
          'taskList': 'Task List',
        },
        hints: {
          'description': 'Task',
          'dueDate': 'Due Date',
          'status': 'Status',
          'taskList': 'Task List',
        },
        new: {
          title: 'New Tasks',
        },
        view: {
          title: 'View Tasks',
        },
        importer: {
          title: 'Import Tasks',
          fileName: 'tasks_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    tags: {
        name: 'tags',
        label: 'Tags',
        menu: 'Tags',
        exporterFileName: 'tags_export',
        list: {
          menu: 'Tags',
          title: 'Tags',
        },
        create: {
          success: 'Tags successfully saved',
        },
        update: {
          success: 'Tags successfully saved',
        },
        destroy: {
          success: 'Tags successfully deleted',
        },
        destroyAll: {
          success: 'Tags(s) successfully deleted',
        },
        edit: {
          title: 'Edit Tags',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'userId': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Tag',
          'userId': 'User',
        },
        hints: {
          'name': 'Tag',
          'userId': 'User',
        },
        new: {
          title: 'New Tags',
        },
        view: {
          title: 'View Tags',
        },
        importer: {
          title: 'Import Tags',
          fileName: 'tags_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    taskTags: {
        name: 'taskTags',
        label: 'TaskTags',
        menu: 'TaskTags',
        exporterFileName: 'taskTags_export',
        list: {
          menu: 'TaskTags',
          title: 'TaskTags',
        },
        create: {
          success: 'TaskTags successfully saved',
        },
        update: {
          success: 'TaskTags successfully saved',
        },
        destroy: {
          success: 'TaskTags successfully deleted',
        },
        destroyAll: {
          success: 'TaskTags(s) successfully deleted',
        },
        edit: {
          title: 'Edit TaskTags',
        },
        fields: {
          id: 'Id',
          'taskId': 'TaskId',
          'tagId': 'Tag',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'taskId': 'Task',
          'tagId': 'Tag',
        },
        hints: {
          'taskId': 'Task',
          'tagId': 'Tag',
        },
        new: {
          title: 'New TaskTags',
        },
        view: {
          title: 'View TaskTags',
        },
        importer: {
          title: 'Import TaskTags',
          fileName: 'taskTags_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    subTasks: {
        name: 'subTasks',
        label: 'Sub Tasks',
        menu: 'Sub Tasks',
        exporterFileName: 'subTasks_export',
        list: {
          menu: 'Sub Tasks',
          title: 'Sub Tasks',
        },
        create: {
          success: 'Sub Task successfully saved',
        },
        update: {
          success: 'Sub Task successfully saved',
        },
        destroy: {
          success: 'Sub Task successfully deleted',
        },
        destroyAll: {
          success: 'Sub Task(s) successfully deleted',
        },
        edit: {
          title: 'Edit Sub Task',
        },
        fields: {
          id: 'Id',
          'description': 'Description',
          'status': 'Status',
          'taskId': 'Task',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'open': 'Open',
            'in_progress': 'In_progress',
            'stuck': 'Stuck',
            'closed': 'Closed',
          },
        },
        placeholders: {
          'description': 'Description',
          'status': 'Status',
          'taskId': 'Task',
        },
        hints: {
          'description': 'Description',
          'status': 'Status',
          'taskId': 'Task',
        },
        new: {
          title: 'New Sub Task',
        },
        view: {
          title: 'View Sub Task',
        },
        importer: {
          title: 'Import Sub Tasks',
          fileName: 'subTasks_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    media: {
        name: 'media',
        label: 'Media',
        menu: 'Media',
        exporterFileName: 'media_export',
        list: {
          menu: 'Media',
          title: 'Media',
        },
        create: {
          success: 'Media successfully saved',
        },
        update: {
          success: 'Media successfully saved',
        },
        destroy: {
          success: 'Media successfully deleted',
        },
        destroyAll: {
          success: 'Media(s) successfully deleted',
        },
        edit: {
          title: 'Edit Media',
        },
        fields: {
          id: 'Id',
          'file': 'File',
          'metadata': 'Metadata',
          'userId': 'User',
          'show': 'Show',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'metadata': 'metadata',
          'userId': 'User',
        },
        hints: {
          'file': 'File',
          'metadata': 'metadata',
          'userId': 'User',
          'show': 'Show',
        },
        new: {
          title: 'New Media',
        },
        view: {
          title: 'View Media',
        },
        importer: {
          title: 'Import Media',
          fileName: 'media_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    posts: {
        name: 'posts',
        label: 'Posts',
        menu: 'Posts',
        exporterFileName: 'posts_export',
        list: {
          menu: 'Posts',
          title: 'Posts',
        },
        create: {
          success: 'Posts successfully saved',
        },
        update: {
          success: 'Posts successfully saved',
        },
        destroy: {
          success: 'Posts successfully deleted',
        },
        destroyAll: {
          success: 'Posts(s) successfully deleted',
        },
        edit: {
          title: 'Edit Posts',
        },
        fields: {
          id: 'Id',
          'content': 'Content',
          'postDateRange': 'PostDate',
          'postDate': 'PostDate',
          'media': 'Media',
          'userId': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'content': 'content',
          'postDate': 'Post Date',
          'userId': 'User',
        },
        hints: {
          'content': 'content',
          'postDate': 'Date',
          'media': 'media',
          'userId': 'User',
        },
        new: {
          title: 'New Posts',
        },
        view: {
          title: 'View Posts',
        },
        importer: {
          title: 'Import Posts',
          fileName: 'posts_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    followers: {
        name: 'followers',
        label: 'Followers',
        menu: 'Followers',
        exporterFileName: 'followers_export',
        list: {
          menu: 'Followers',
          title: 'Followers',
        },
        create: {
          success: 'Followers successfully saved',
        },
        update: {
          success: 'Followers successfully saved',
        },
        destroy: {
          success: 'Followers successfully deleted',
        },
        destroyAll: {
          success: 'Followers(s) successfully deleted',
        },
        edit: {
          title: 'Edit Followers',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'followerId': 'Follower',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'userId': 'User',
          'followerId': 'Follower',
        },
        hints: {
          'userId': 'User',
          'followerId': 'Follower',
        },
        new: {
          title: 'New Followers',
        },
        view: {
          title: 'View Followers',
        },
        importer: {
          title: 'Import Followers',
          fileName: 'followers_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    like: {
        name: 'like',
        label: 'Likes',
        menu: 'Likes',
        exporterFileName: 'like_export',
        list: {
          menu: 'Likes',
          title: 'Likes',
        },
        create: {
          success: 'Like successfully saved',
        },
        update: {
          success: 'Like successfully saved',
        },
        destroy: {
          success: 'Like successfully deleted',
        },
        destroyAll: {
          success: 'Like(s) successfully deleted',
        },
        edit: {
          title: 'Edit Like',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'postId': 'PostId',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'userId': 'User',
          'postId': 'Post',
        },
        hints: {
          'userId': 'User',
          'postId': 'Post',
        },
        new: {
          title: 'New Like',
        },
        view: {
          title: 'View Like',
        },
        importer: {
          title: 'Import Likes',
          fileName: 'like_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    hashtag: {
        name: 'hashtag',
        label: 'Hashtags',
        menu: 'Hashtags',
        exporterFileName: 'hashtag_export',
        list: {
          menu: 'Hashtags',
          title: 'Hashtags',
        },
        create: {
          success: 'Hashtag successfully saved',
        },
        update: {
          success: 'Hashtag successfully saved',
        },
        destroy: {
          success: 'Hashtag successfully deleted',
        },
        destroyAll: {
          success: 'Hashtag(s) successfully deleted',
        },
        edit: {
          title: 'Edit Hashtag',
        },
        fields: {
          id: 'Id',
          'hashtagText': 'HashtagText',
          'usageCountRange': 'Usage Count',
          'usageCount': 'Usage Count',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'hashtagText': 'Hashtag',
          'usageCount': 'Usage Count',
        },
        hints: {
          'hashtagText': 'Hashtag',
          'usageCount': 'Usage Count',
        },
        new: {
          title: 'New Hashtag',
        },
        view: {
          title: 'View Hashtag',
        },
        importer: {
          title: 'Import Hashtags',
          fileName: 'hashtag_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    postHashtag: {
        name: 'postHashtag',
        label: 'PostHashtags',
        menu: 'PostHashtags',
        exporterFileName: 'postHashtag_export',
        list: {
          menu: 'PostHashtags',
          title: 'PostHashtags',
        },
        create: {
          success: 'PostHashtag successfully saved',
        },
        update: {
          success: 'PostHashtag successfully saved',
        },
        destroy: {
          success: 'PostHashtag successfully deleted',
        },
        destroyAll: {
          success: 'PostHashtag(s) successfully deleted',
        },
        edit: {
          title: 'Edit PostHashtag',
        },
        fields: {
          id: 'Id',
          'postId': 'Post',
          'hashtagId': 'Hashtag',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'postId': 'Post',
          'hashtagId': 'Hashtag',
        },
        hints: {
          'postId': 'Post',
          'hashtagId': 'Hashtag',
        },
        new: {
          title: 'New PostHashtag',
        },
        view: {
          title: 'View PostHashtag',
        },
        importer: {
          title: 'Import PostHashtags',
          fileName: 'postHashtag_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    artist: {
        name: 'artist',
        label: 'Artists',
        menu: 'Artists',
        exporterFileName: 'artist_export',
        list: {
          menu: 'Artists',
          title: 'Artists',
        },
        create: {
          success: 'Artist successfully saved',
        },
        update: {
          success: 'Artist successfully saved',
        },
        destroy: {
          success: 'Artist successfully deleted',
        },
        destroyAll: {
          success: 'Artist(s) successfully deleted',
        },
        edit: {
          title: 'Edit Artist',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'bio': 'Bio',
          'photo': 'Photo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'bio': 'Bio',
        },
        hints: {
          'name': 'Name',
          'bio': 'Bio',
          'photo': 'Photo',
        },
        new: {
          title: 'New Artist',
        },
        view: {
          title: 'View Artist',
        },
        importer: {
          title: 'Import Artists',
          fileName: 'artist_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    album: {
        name: 'album',
        label: 'Albums',
        menu: 'Albums',
        exporterFileName: 'album_export',
        list: {
          menu: 'Albums',
          title: 'Albums',
        },
        create: {
          success: 'Album successfully saved',
        },
        update: {
          success: 'Album successfully saved',
        },
        destroy: {
          success: 'Album successfully deleted',
        },
        destroyAll: {
          success: 'Album(s) successfully deleted',
        },
        edit: {
          title: 'Edit Album',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'artistId': 'Artist',
          'yearRange': 'Year',
          'year': 'Year',
          'cover': 'Cover',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'title': 'Title',
          'artistId': 'Artist',
        },
        hints: {
          'title': 'Title',
          'artistId': 'Artist',
          'cover': 'Cover',
        },
        new: {
          title: 'New Album',
        },
        view: {
          title: 'View Album',
        },
        importer: {
          title: 'Import Albums',
          fileName: 'album_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    song: {
        name: 'song',
        label: 'Songs',
        menu: 'Songs',
        exporterFileName: 'song_export',
        list: {
          menu: 'Songs',
          title: 'Songs',
        },
        create: {
          success: 'Song successfully saved',
        },
        update: {
          success: 'Song successfully saved',
        },
        destroy: {
          success: 'Song successfully deleted',
        },
        destroyAll: {
          success: 'Song(s) successfully deleted',
        },
        edit: {
          title: 'Edit Song',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'artistId': 'Artist',
          'albumId': 'Album',
          'duration': 'Duration',
          'genre': 'Genre',
          'externalUrl': 'External Url',
          'media': 'Media',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'title': 'Title',
          'artistId': 'Artist',
          'albumId': 'Album',
          'duration': 'Duration',
          'externalUrl': 'Url',
        },
        hints: {
          'title': 'Title',
          'artistId': 'Artist',
          'albumId': 'Album',
          'duration': 'Duration',
          'externalUrl': 'Url',
          'media': 'Media',
        },
        new: {
          title: 'New Song',
        },
        view: {
          title: 'View Song',
        },
        importer: {
          title: 'Import Songs',
          fileName: 'song_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    playlist: {
        name: 'playlist',
        label: 'Playlists',
        menu: 'Playlists',
        exporterFileName: 'playlist_export',
        list: {
          menu: 'Playlists',
          title: 'Playlists',
        },
        create: {
          success: 'Playlist successfully saved',
        },
        update: {
          success: 'Playlist successfully saved',
        },
        destroy: {
          success: 'Playlist successfully deleted',
        },
        destroyAll: {
          success: 'Playlist(s) successfully deleted',
        },
        edit: {
          title: 'Edit Playlist',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'userId': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'description': 'Description',
          'userId': 'User',
        },
        hints: {
          'name': 'Name',
          'description': 'Description',
          'userId': 'User',
        },
        new: {
          title: 'New Playlist',
        },
        view: {
          title: 'View Playlist',
        },
        importer: {
          title: 'Import Playlists',
          fileName: 'playlist_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    playlistSong: {
        name: 'playlistSong',
        label: 'Playlist Songs',
        menu: 'Playlist Songs',
        exporterFileName: 'playlistSong_export',
        list: {
          menu: 'Playlist Songs',
          title: 'Playlist Songs',
        },
        create: {
          success: 'Playlist Song successfully saved',
        },
        update: {
          success: 'Playlist Song successfully saved',
        },
        destroy: {
          success: 'Playlist Song successfully deleted',
        },
        destroyAll: {
          success: 'Playlist Song(s) successfully deleted',
        },
        edit: {
          title: 'Edit Playlist Song',
        },
        fields: {
          id: 'Id',
          'playlistId': 'Playlist',
          'songId': 'Song',
          'trackOrderRange': 'TrackOrder',
          'trackOrder': 'TrackOrder',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'playlistId': 'Playlist',
          'songId': 'Song',
          'trackOrder': 'Order',
        },
        hints: {
          'playlistId': 'Playlist',
          'songId': 'Song',
          'trackOrder': 'Order',
        },
        new: {
          title: 'New Playlist Song',
        },
        view: {
          title: 'View Playlist Song',
        },
        importer: {
          title: 'Import Playlist Songs',
          fileName: 'playlistSong_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    userPlaylist: {
        name: 'userPlaylist',
        label: 'User Playlists',
        menu: 'User Playlists',
        exporterFileName: 'userPlaylist_export',
        list: {
          menu: 'User Playlists',
          title: 'User Playlists',
        },
        create: {
          success: 'User Playlist successfully saved',
        },
        update: {
          success: 'User Playlist successfully saved',
        },
        destroy: {
          success: 'User Playlist successfully deleted',
        },
        destroyAll: {
          success: 'User Playlist(s) successfully deleted',
        },
        edit: {
          title: 'Edit User Playlist',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'playlistId': 'Playlist',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'userId': 'User',
          'playlistId': 'Playlist',
        },
        hints: {
          'userId': 'User',
          'playlistId': 'Playlist',
        },
        new: {
          title: 'New User Playlist',
        },
        view: {
          title: 'View User Playlist',
        },
        importer: {
          title: 'Import User Playlists',
          fileName: 'userPlaylist_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    city: {
        name: 'city',
        label: 'Cities',
        menu: 'Cities',
        exporterFileName: 'city_export',
        list: {
          menu: 'Cities',
          title: 'Cities',
        },
        create: {
          success: 'City successfully saved',
        },
        update: {
          success: 'City successfully saved',
        },
        destroy: {
          success: 'City successfully deleted',
        },
        destroyAll: {
          success: 'City(s) successfully deleted',
        },
        edit: {
          title: 'Edit City',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'country': 'Country',
        },
        hints: {
          'country': 'Country',
        },
        new: {
          title: 'New City',
        },
        view: {
          title: 'View City',
        },
        importer: {
          title: 'Import Cities',
          fileName: 'city_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    country: {
        name: 'country',
        label: 'Countries',
        menu: 'Countries',
        exporterFileName: 'country_export',
        list: {
          menu: 'Countries',
          title: 'Countries',
        },
        create: {
          success: 'Country successfully saved',
        },
        update: {
          success: 'Country successfully saved',
        },
        destroy: {
          success: 'Country successfully deleted',
        },
        destroyAll: {
          success: 'Country(s) successfully deleted',
        },
        edit: {
          title: 'Edit Country',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
        },
        hints: {
          'name': 'Name',
        },
        new: {
          title: 'New Country',
        },
        view: {
          title: 'View Country',
        },
        importer: {
          title: 'Import Countries',
          fileName: 'country_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    address: {
        name: 'address',
        label: 'Addresses',
        menu: 'Addresses',
        exporterFileName: 'address_export',
        list: {
          menu: 'Addresses',
          title: 'Addresses',
        },
        create: {
          success: 'Address successfully saved',
        },
        update: {
          success: 'Address successfully saved',
        },
        destroy: {
          success: 'Address successfully deleted',
        },
        destroyAll: {
          success: 'Address(s) successfully deleted',
        },
        edit: {
          title: 'Edit Address',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'addressName': 'AddressName',
          'firstLine': 'FirstLine',
          'secondLine': 'SecondLine',
          'zipCode': 'ZipCode',
          'city': 'City',
          'phone': 'Phone',
          'business': 'Business',
          'coordinates': 'Coordinates',
          'urlMap': 'UrlMap',
          'preferred': 'Preferred',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'customer': 'Customer',
          'addressName': 'Name',
          'firstLine': 'First Line',
          'secondLine': 'Second Line',
          'zipCode': 'Zip Code',
          'city': 'City',
          'phone': 'Phone',
          'business': 'Business',
          'coordinates': 'Coordinates',
          'urlMap': 'Url',
        },
        hints: {
          'customer': 'Customer',
          'addressName': 'Name',
          'firstLine': 'First Line',
          'secondLine': 'Second Line',
          'zipCode': 'Zip Code',
          'city': 'City',
          'phone': 'Phone',
          'business': 'Business',
          'coordinates': 'Coordinates',
          'urlMap': 'Url',
          'preferred': 'Preferred',
        },
        new: {
          title: 'New Address',
        },
        view: {
          title: 'View Address',
        },
        importer: {
          title: 'Import Addresses',
          fileName: 'address_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    productCategory: {
        name: 'productCategory',
        label: 'Product Categories',
        menu: 'Product Categories',
        exporterFileName: 'productCategory_export',
        list: {
          menu: 'Product Categories',
          title: 'Product Categories',
        },
        create: {
          success: 'Product Category successfully saved',
        },
        update: {
          success: 'Product Category successfully saved',
        },
        destroy: {
          success: 'Product Category successfully deleted',
        },
        destroyAll: {
          success: 'Product Category(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'parentCategory': 'ParentCategory',
          'photo': 'Photo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'parentCategory': 'Parent Category',
        },
        hints: {
          'name': 'Name',
          'parentCategory': 'Parent Category',
          'photo': 'Photo',
        },
        new: {
          title: 'New Product Category',
        },
        view: {
          title: 'View Product Category',
        },
        importer: {
          title: 'Import Product Categories',
          fileName: 'productCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    orderDetail: {
        name: 'orderDetail',
        label: 'Order Details',
        menu: 'Order Details',
        exporterFileName: 'orderDetail_export',
        list: {
          menu: 'Order Details',
          title: 'Order Details',
        },
        create: {
          success: 'Order Detail successfully saved',
        },
        update: {
          success: 'Order Detail successfully saved',
        },
        destroy: {
          success: 'Order Detail successfully deleted',
        },
        destroyAll: {
          success: 'Order Detail(s) successfully deleted',
        },
        edit: {
          title: 'Edit Order Detail',
        },
        fields: {
          id: 'Id',
          'orderId': 'Order',
          'productId': 'Product',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'unitPriceRange': 'Unit Price',
          'unitPrice': 'Unit Price',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'orderId': 'Order',
          'productId': 'Product',
          'quantity': 'Quantity',
          'unitPrice': 'Unit Price',
        },
        hints: {
          'orderId': 'Order',
          'productId': 'Product',
          'quantity': 'Quantity',
          'unitPrice': 'Unit Price',
        },
        new: {
          title: 'New Order Detail',
        },
        view: {
          title: 'View Order Detail',
        },
        importer: {
          title: 'Import Order Details',
          fileName: 'orderDetail_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    paymentMethods: {
        name: 'paymentMethods',
        label: 'PaymentMethods',
        menu: 'PaymentMethods',
        exporterFileName: 'paymentMethods_export',
        list: {
          menu: 'PaymentMethods',
          title: 'PaymentMethods',
        },
        create: {
          success: 'PaymentMethods successfully saved',
        },
        update: {
          success: 'PaymentMethods successfully saved',
        },
        destroy: {
          success: 'PaymentMethods successfully deleted',
        },
        destroyAll: {
          success: 'PaymentMethods(s) successfully deleted',
        },
        edit: {
          title: 'Edit PaymentMethods',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'additionalInfo': 'AdditionalInfo',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
        },
        hints: {
          'name': 'Name',
          'active': 'Active',
        },
        new: {
          title: 'New PaymentMethods',
        },
        view: {
          title: 'View PaymentMethods',
        },
        importer: {
          title: 'Import PaymentMethods',
          fileName: 'paymentMethods_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    productReview: {
        name: 'productReview',
        label: 'Product Reviews',
        menu: 'Product Reviews',
        exporterFileName: 'productReview_export',
        list: {
          menu: 'Product Reviews',
          title: 'Product Reviews',
        },
        create: {
          success: 'Product Review successfully saved',
        },
        update: {
          success: 'Product Review successfully saved',
        },
        destroy: {
          success: 'Product Review successfully deleted',
        },
        destroyAll: {
          success: 'Product Review(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product Review',
        },
        fields: {
          id: 'Id',
          'comment': 'Comment',
          'productId': 'Product',
          'customerId': 'Customer',
          'ratingRange': 'Rating',
          'rating': 'Rating',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'comment': 'Comment',
          'productId': 'Product',
          'customerId': 'Customer',
        },
        hints: {
          'comment': 'Comment',
          'productId': 'Product',
          'customerId': 'Customer',
        },
        new: {
          title: 'New Product Review',
        },
        view: {
          title: 'View Product Review',
        },
        importer: {
          title: 'Import Product Reviews',
          fileName: 'productReview_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    promotions: {
        name: 'promotions',
        label: 'Promotions',
        menu: 'Promotions',
        exporterFileName: 'promotions_export',
        list: {
          menu: 'Promotions',
          title: 'Promotions',
        },
        create: {
          success: 'Promotions successfully saved',
        },
        update: {
          success: 'Promotions successfully saved',
        },
        destroy: {
          success: 'Promotions successfully deleted',
        },
        destroyAll: {
          success: 'Promotions(s) successfully deleted',
        },
        edit: {
          title: 'Edit Promotions',
        },
        fields: {
          id: 'Id',
          'code': 'Code',
          'discountRange': 'Discount',
          'discount': 'Discount',
          'startDateRange': 'Start Date',
          'startDate': 'Start Date',
          'endDateRange': 'End Date',
          'endDate': 'End Date',
          'productId': 'Product',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'code': 'Code',
          'discount': 'Discount',
          'startDate': 'Start Date',
          'endDate': 'End Date',
          'productId': 'Product',
        },
        hints: {
          'code': 'Code',
          'discount': 'Discount',
          'startDate': 'Start Date',
          'endDate': 'End Date',
          'productId': 'Product',
        },
        new: {
          title: 'New Promotions',
        },
        view: {
          title: 'View Promotions',
        },
        importer: {
          title: 'Import Promotions',
          fileName: 'promotions_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    course: {
        name: 'course',
        label: 'Courses',
        menu: 'Courses',
        exporterFileName: 'course_export',
        list: {
          menu: 'Courses',
          title: 'Courses',
        },
        create: {
          success: 'Course successfully saved',
        },
        update: {
          success: 'Course successfully saved',
        },
        destroy: {
          success: 'Course successfully deleted',
        },
        destroyAll: {
          success: 'Course(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course',
        },
        fields: {
          id: 'Id',
          'teacherId': 'Teacher',
          'title': 'Title',
          'description': 'Description',
          'priceRange': 'Price',
          'price': 'Price',
          'hoursDurationRange': 'Hours Duration',
          'hoursDuration': 'Hours Duration',
          'startDateRange': 'Start Date',
          'startDate': 'Start Date',
          'endDateRange': 'End Date',
          'endDate': 'End Date',
          'level': 'Level',
          'additionalInfo': 'Additional Info',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'teacherId': 'Teacher',
          'title': 'Title',
          'description': 'Description',
          'price': 'Price',
          'hoursDuration': 'Hours Duration',
          'startDate': 'Start Date',
          'endDate': 'End Date',
          'level': 'Level',
          'additionalInfo': 'Additional Info',
        },
        hints: {
          'teacherId': 'Teacher',
          'title': 'Title',
          'description': 'Description',
          'price': 'Price',
          'hoursDuration': 'Hours Duration',
          'startDate': 'Start Date',
          'endDate': 'End Date',
          'level': 'Level',
          'additionalInfo': 'Additional Info',
          'active': 'Active',
        },
        new: {
          title: 'New Course',
        },
        view: {
          title: 'View Course',
        },
        importer: {
          title: 'Import Courses',
          fileName: 'course_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    teacher: {
        name: 'teacher',
        label: 'Teachers',
        menu: 'Teachers',
        exporterFileName: 'teacher_export',
        list: {
          menu: 'Teachers',
          title: 'Teachers',
        },
        create: {
          success: 'Teacher successfully saved',
        },
        update: {
          success: 'Teacher successfully saved',
        },
        destroy: {
          success: 'Teacher successfully deleted',
        },
        destroyAll: {
          success: 'Teacher(s) successfully deleted',
        },
        edit: {
          title: 'Edit Teacher',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'photo': 'Photo',
          'userId': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'userId': 'User',
        },
        hints: {
          'name': 'Name',
          'photo': 'Photo',
          'userId': 'User',
        },
        new: {
          title: 'New Teacher',
        },
        view: {
          title: 'View Teacher',
        },
        importer: {
          title: 'Import Teachers',
          fileName: 'teacher_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    lesson: {
        name: 'lesson',
        label: 'Lessons',
        menu: 'Lessons',
        exporterFileName: 'lesson_export',
        list: {
          menu: 'Lessons',
          title: 'Lessons',
        },
        create: {
          success: 'Lesson successfully saved',
        },
        update: {
          success: 'Lesson successfully saved',
        },
        destroy: {
          success: 'Lesson successfully deleted',
        },
        destroyAll: {
          success: 'Lesson(s) successfully deleted',
        },
        edit: {
          title: 'Edit Lesson',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'description': 'Description',
          'externalUrl': 'External Url',
          'media': 'Media',
          'hoursDurationRange': 'Hours Duration',
          'hoursDuration': 'Hours Duration',
          'courseId': 'CourseId',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'title': 'Title',
          'description': 'Description',
          'externalUrl': 'External Url',
          'courseId': 'Course',
        },
        hints: {
          'title': 'Title',
          'description': 'Description',
          'externalUrl': 'External Url',
          'media': 'Media',
          'courseId': 'Course',
          'active': 'Active',
        },
        new: {
          title: 'New Lesson',
        },
        view: {
          title: 'View Lesson',
        },
        importer: {
          title: 'Import Lessons',
          fileName: 'lesson_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    courseEnrollment: {
        name: 'courseEnrollment',
        label: 'Course Enrollments',
        menu: 'Course Enrollments',
        exporterFileName: 'courseEnrollment_export',
        list: {
          menu: 'Course Enrollments',
          title: 'Course Enrollments',
        },
        create: {
          success: 'Course Enrollment successfully saved',
        },
        update: {
          success: 'Course Enrollment successfully saved',
        },
        destroy: {
          success: 'Course Enrollment successfully deleted',
        },
        destroyAll: {
          success: 'Course Enrollment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course Enrollment',
        },
        fields: {
          id: 'Id',
          'courseId': 'Course',
          'studentId': 'Student',
          'enrollmentDateRange': 'Enrollment Date',
          'enrollmentDate': 'Enrollment Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'courseId': 'Course',
          'studentId': 'Student',
          'enrollmentDate': 'Enrollment Date',
        },
        hints: {
          'courseId': 'Course',
          'studentId': 'Student',
          'enrollmentDate': 'Enrollment Date',
        },
        new: {
          title: 'New Course Enrollment',
        },
        view: {
          title: 'View Course Enrollment',
        },
        importer: {
          title: 'Import Course Enrollments',
          fileName: 'courseEnrollment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    student: {
        name: 'student',
        label: 'Students',
        menu: 'Students',
        exporterFileName: 'student_export',
        list: {
          menu: 'Students',
          title: 'Students',
        },
        create: {
          success: 'Student successfully saved',
        },
        update: {
          success: 'Student successfully saved',
        },
        destroy: {
          success: 'Student successfully deleted',
        },
        destroyAll: {
          success: 'Student(s) successfully deleted',
        },
        edit: {
          title: 'Edit Student',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'name': 'Name',
          'photo': 'Photo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
        },
        hints: {
          'name': 'Name',
          'photo': 'Photo',
        },
        new: {
          title: 'New Student',
        },
        view: {
          title: 'View Student',
        },
        importer: {
          title: 'Import Students',
          fileName: 'student_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    courseComment: {
        name: 'courseComment',
        label: 'Course Comments',
        menu: 'Course Comments',
        exporterFileName: 'courseComment_export',
        list: {
          menu: 'Course Comments',
          title: 'Course Comments',
        },
        create: {
          success: 'Course Comment successfully saved',
        },
        update: {
          success: 'Course Comment successfully saved',
        },
        destroy: {
          success: 'Course Comment successfully deleted',
        },
        destroyAll: {
          success: 'Course Comment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course Comment',
        },
        fields: {
          id: 'Id',
          'comment': 'Comment',
          'studentId': 'Student',
          'courseId': 'Course',
          'lessonId': 'Lesson',
          'media': 'Media',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'comment': 'Comment',
          'studentId': 'Student',
          'courseId': 'Course',
          'lessonId': 'Lesson',
        },
        hints: {
          'comment': 'Comment',
          'studentId': 'Student',
          'courseId': 'Course',
          'lessonId': 'Lesson',
          'media': 'Media',
        },
        new: {
          title: 'New Course Comment',
        },
        view: {
          title: 'View Course Comment',
        },
        importer: {
          title: 'Import Course Comments',
          fileName: 'courseComment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    courseTransaction: {
        name: 'courseTransaction',
        label: 'Course Transactions',
        menu: 'Course Transactions',
        exporterFileName: 'courseTransaction_export',
        list: {
          menu: 'Course Transactions',
          title: 'Course Transactions',
        },
        create: {
          success: 'Course Transaction successfully saved',
        },
        update: {
          success: 'Course Transaction successfully saved',
        },
        destroy: {
          success: 'Course Transaction successfully deleted',
        },
        destroyAll: {
          success: 'Course Transaction(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course Transaction',
        },
        fields: {
          id: 'Id',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'transactionDateRange': 'Transaction Date',
          'transactionDate': 'Transaction Date',
          'courseId': 'Course',
          'studentId': 'Student',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'amount': 'Amount',
          'transactionDate': 'Transaction Date',
          'courseId': 'Course',
          'studentId': 'Student',
        },
        hints: {
          'amount': 'Amount',
          'transactionDate': 'Transaction Date',
          'courseId': 'Course',
          'studentId': 'Student',
        },
        new: {
          title: 'New Course Transaction',
        },
        view: {
          title: 'View Course Transaction',
        },
        importer: {
          title: 'Import Course Transactions',
          fileName: 'courseTransaction_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    courseCategory: {
        name: 'courseCategory',
        label: 'Course Categories',
        menu: 'Course Categories',
        exporterFileName: 'courseCategory_export',
        list: {
          menu: 'Course Categories',
          title: 'Course Categories',
        },
        create: {
          success: 'Course Category successfully saved',
        },
        update: {
          success: 'Course Category successfully saved',
        },
        destroy: {
          success: 'Course Category successfully deleted',
        },
        destroyAll: {
          success: 'Course Category(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'photo': 'Photo',
          'parentCategory': 'Parent Category',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'parentCategory': 'Parent Category',
        },
        hints: {
          'name': 'Name',
          'photo': 'Photo',
          'parentCategory': 'Parent Category',
        },
        new: {
          title: 'New Course Category',
        },
        view: {
          title: 'View Course Category',
        },
        importer: {
          title: 'Import Course Categories',
          fileName: 'courseCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    categoryCourseRelation: {
        name: 'categoryCourseRelation',
        label: 'Category Course Relations',
        menu: 'Category Course Relations',
        exporterFileName: 'categoryCourseRelation_export',
        list: {
          menu: 'Category Course Relations',
          title: 'Category Course Relations',
        },
        create: {
          success: 'Category Course Relation successfully saved',
        },
        update: {
          success: 'Category Course Relation successfully saved',
        },
        destroy: {
          success: 'Category Course Relation successfully deleted',
        },
        destroyAll: {
          success: 'Category Course Relation(s) successfully deleted',
        },
        edit: {
          title: 'Edit Category Course Relation',
        },
        fields: {
          id: 'Id',
          'courseId': 'Course',
          'category': 'Category',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'courseId': 'Course',
          'category': 'Category',
        },
        hints: {
          'courseId': 'Course',
          'category': 'Category',
        },
        new: {
          title: 'New Category Course Relation',
        },
        view: {
          title: 'View Category Course Relation',
        },
        importer: {
          title: 'Import Category Course Relations',
          fileName: 'categoryCourseRelation_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    courseProgress: {
        name: 'courseProgress',
        label: 'Course Progresses',
        menu: 'Course Progresses',
        exporterFileName: 'courseProgress_export',
        list: {
          menu: 'Course Progresses',
          title: 'Course Progresses',
        },
        create: {
          success: 'Course Progress successfully saved',
        },
        update: {
          success: 'Course Progress successfully saved',
        },
        destroy: {
          success: 'Course Progress successfully deleted',
        },
        destroyAll: {
          success: 'Course Progress(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course Progress',
        },
        fields: {
          id: 'Id',
          'studentId': 'Student',
          'courseId': 'Course',
          'progressPercentageRange': 'Progress Percentage',
          'progressPercentage': 'Progress Percentage',
          'currentLesson': 'Current Lesson',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'studentId': 'Student',
          'courseId': 'Course',
          'progressPercentage': 'Progress Percentage',
          'currentLesson': 'Current Lesson',
        },
        hints: {
          'studentId': 'Student',
          'courseId': 'Course',
          'progressPercentage': 'Progress Percentage',
          'currentLesson': 'Current Lesson',
        },
        new: {
          title: 'New Course Progress',
        },
        view: {
          title: 'View Course Progress',
        },
        importer: {
          title: 'Import Course Progresses',
          fileName: 'courseProgress_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    message: {
        name: 'message',
        label: 'Messages',
        menu: 'Messages',
        exporterFileName: 'message_export',
        list: {
          menu: 'Messages',
          title: 'Messages',
        },
        create: {
          success: 'Message successfully saved',
        },
        update: {
          success: 'Message successfully saved',
        },
        destroy: {
          success: 'Message successfully deleted',
        },
        destroyAll: {
          success: 'Message(s) successfully deleted',
        },
        edit: {
          title: 'Edit Message',
        },
        fields: {
          id: 'Id',
          'senderId': 'Sender',
          'recipientId': 'Recipient',
          'content': 'Content',
          'media': 'Media',
          'conversationId': 'Conversation',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'sending': 'Sending',
            'sent': 'Sent',
            'seen': 'Seen',
          },
        },
        placeholders: {
          'senderId': 'Sender',
          'recipientId': 'Recipient',
          'content': 'content',
          'conversationId': 'Conversation',
          'status': 'Status',
        },
        hints: {
          'senderId': 'Sender',
          'recipientId': 'Recipient',
          'content': 'content',
          'media': 'Media',
          'conversationId': 'Conversation',
          'status': 'Status',
        },
        new: {
          title: 'New Message',
        },
        view: {
          title: 'View Message',
        },
        importer: {
          title: 'Import Messages',
          fileName: 'message_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    conversation: {
        name: 'conversation',
        label: 'Conversations',
        menu: 'Conversations',
        exporterFileName: 'conversation_export',
        list: {
          menu: 'Conversations',
          title: 'Conversations',
        },
        create: {
          success: 'Conversation successfully saved',
        },
        update: {
          success: 'Conversation successfully saved',
        },
        destroy: {
          success: 'Conversation successfully deleted',
        },
        destroyAll: {
          success: 'Conversation(s) successfully deleted',
        },
        edit: {
          title: 'Edit Conversation',
        },
        fields: {
          id: 'Id',
          'type': 'Type',
          'name': 'Name',
          'avatar': 'Avatar',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'individual': 'Individual',
            'group': 'Group',
          },
        },
        placeholders: {
          'type': 'Type',
          'name': 'Name',
        },
        hints: {
          'type': 'Type',
          'name': 'Name',
          'avatar': 'Avatar',
        },
        new: {
          title: 'New Conversation',
        },
        view: {
          title: 'View Conversation',
        },
        importer: {
          title: 'Import Conversations',
          fileName: 'conversation_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    conversationParticipant: {
        name: 'conversationParticipant',
        label: 'Conversation Participants',
        menu: 'Conversation Participants',
        exporterFileName: 'conversationParticipant_export',
        list: {
          menu: 'Conversation Participants',
          title: 'Conversation Participants',
        },
        create: {
          success: 'Conversation Participant successfully saved',
        },
        update: {
          success: 'Conversation Participant successfully saved',
        },
        destroy: {
          success: 'Conversation Participant successfully deleted',
        },
        destroyAll: {
          success: 'Conversation Participant(s) successfully deleted',
        },
        edit: {
          title: 'Edit Conversation Participant',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'conversationId': 'Conversation',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'userId': 'User',
          'conversationId': 'Conversation',
        },
        hints: {
          'userId': 'User',
          'conversationId': 'Conversation',
        },
        new: {
          title: 'New Conversation Participant',
        },
        view: {
          title: 'View Conversation Participant',
        },
        importer: {
          title: 'Import Conversation Participants',
          fileName: 'conversationParticipant_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    business: {
        name: 'business',
        label: 'Businesses',
        menu: 'Businesses',
        exporterFileName: 'business_export',
        list: {
          menu: 'Businesses',
          title: 'Businesses',
        },
        create: {
          success: 'Business successfully saved',
        },
        update: {
          success: 'Business successfully saved',
        },
        destroy: {
          success: 'Business successfully deleted',
        },
        destroyAll: {
          success: 'Business(s) successfully deleted',
        },
        edit: {
          title: 'Edit Business',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'logo': 'Logo',
          'category': 'Category',
          'address': 'Address',
          'owner': 'Owner',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'description': 'Description',
          'category': 'Category',
          'address': 'Address',
          'owner': 'Owner',
        },
        hints: {
          'name': 'Name',
          'description': 'Description',
          'logo': 'Logo',
          'category': 'Category',
          'address': 'Address',
          'owner': 'Owner',
          'active': 'Active',
        },
        new: {
          title: 'New Business',
        },
        view: {
          title: 'View Business',
        },
        importer: {
          title: 'Import Businesses',
          fileName: 'business_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    businessCategory: {
        name: 'businessCategory',
        label: 'Business Categories',
        menu: 'Business Categories',
        exporterFileName: 'businessCategory_export',
        list: {
          menu: 'Business Categories',
          title: 'Business Categories',
        },
        create: {
          success: 'Business Category successfully saved',
        },
        update: {
          success: 'Business Category successfully saved',
        },
        destroy: {
          success: 'Business Category successfully deleted',
        },
        destroyAll: {
          success: 'Business Category(s) successfully deleted',
        },
        edit: {
          title: 'Edit Business Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'logo': 'Logo',
          'parentBusinessType': 'ParentBusinessType',
          'description': 'Description',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'parentBusinessType': 'Parent Business Type',
          'description': 'Description',
        },
        hints: {
          'name': 'Name',
          'logo': 'Logo',
          'parentBusinessType': 'Parent Business Type',
          'description': 'Description',
        },
        new: {
          title: 'New Business Category',
        },
        view: {
          title: 'View Business Category',
        },
        importer: {
          title: 'Import Business Categories',
          fileName: 'businessCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    service: {
        name: 'service',
        label: 'Services',
        menu: 'Services',
        exporterFileName: 'service_export',
        list: {
          menu: 'Services',
          title: 'Services',
        },
        create: {
          success: 'Service successfully saved',
        },
        update: {
          success: 'Service successfully saved',
        },
        destroy: {
          success: 'Service successfully deleted',
        },
        destroyAll: {
          success: 'Service(s) successfully deleted',
        },
        edit: {
          title: 'Edit Service',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'photo': 'Photo',
          'description': 'Description',
          'hoursDurationRange': 'Hours Duration',
          'hoursDuration': 'Hours Duration',
          'priceRange': 'Price',
          'price': 'Price',
          'businessId': 'Business',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'description': 'Description',
          'hoursDuration': 'Hours Duration',
          'price': 'Price',
          'businessId': 'Business',
        },
        hints: {
          'name': 'Name',
          'photo': 'Photo',
          'description': 'Description',
          'hoursDuration': 'Hours Duration',
          'price': 'Price',
          'businessId': 'Business',
          'active': 'Active',
        },
        new: {
          title: 'New Service',
        },
        view: {
          title: 'View Service',
        },
        importer: {
          title: 'Import Services',
          fileName: 'service_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    availabilityTimeslot: {
        name: 'availabilityTimeslot',
        label: 'Availability Timeslots',
        menu: 'Availability Timeslots',
        exporterFileName: 'availabilityTimeslot_export',
        list: {
          menu: 'Availability Timeslots',
          title: 'Availability Timeslots',
        },
        create: {
          success: 'Availability Timeslot successfully saved',
        },
        update: {
          success: 'Availability Timeslot successfully saved',
        },
        destroy: {
          success: 'Availability Timeslot successfully deleted',
        },
        destroyAll: {
          success: 'Availability Timeslot(s) successfully deleted',
        },
        edit: {
          title: 'Edit Availability Timeslot',
        },
        fields: {
          id: 'Id',
          'businessId': 'Business',
          'dayOfTheWeek': 'DayOfTheWeek',
          'startTimeRange': 'Start Time',
          'startTime': 'Start Time',
          'endTimeRange': 'End Time',
          'endTime': 'End Time',
          'capacityRange': 'Capacity',
          'capacity': 'Capacity',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'businessId': 'Business',
          'dayOfTheWeek': 'Day Of The Week',
          'startTime': 'Start Time',
          'endTime': 'End Time',
          'capacity': 'Capacity',
        },
        hints: {
          'businessId': 'Business',
          'dayOfTheWeek': 'Day Of The Week',
          'startTime': 'Start Time',
          'endTime': 'End Time',
          'capacity': 'Capacity',
        },
        new: {
          title: 'New Availability Timeslot',
        },
        view: {
          title: 'View Availability Timeslot',
        },
        importer: {
          title: 'Import Availability Timeslots',
          fileName: 'availabilityTimeslot_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    appointment: {
        name: 'appointment',
        label: 'Appointments',
        menu: 'Appointments',
        exporterFileName: 'appointment_export',
        list: {
          menu: 'Appointments',
          title: 'Appointments',
        },
        create: {
          success: 'Appointment successfully saved',
        },
        update: {
          success: 'Appointment successfully saved',
        },
        destroy: {
          success: 'Appointment successfully deleted',
        },
        destroyAll: {
          success: 'Appointment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Appointment',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'serviceId': 'Service',
          'timeslotId': 'Timeslot',
          'appointmentDateRange': 'Appointment Date',
          'appointmentDate': 'Appointment Date',
          'appointmentStatus': 'Appointment Status',
          'paymentStatus': 'Payment Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'appointmentStatus': {
            'pending': 'Pending',
            'confirmed': 'Confirmed',
            'canceled': 'Canceled',
            'absent': 'Absent',
          },
          'paymentStatus': {
            'paid': 'Paid',
            'payment_pending': 'Payment_pending',
            'pay_there': 'Pay_there',
          },
        },
        placeholders: {
          'customer': 'Customer',
          'serviceId': 'Service',
          'timeslotId': 'Timeslot',
          'appointmentDate': 'Appointment Date',
          'appointmentStatus': 'Appointment Status',
          'paymentStatus': 'Payment Status',
        },
        hints: {
          'customer': 'Customer',
          'serviceId': 'Service',
          'timeslotId': 'Timeslot',
          'appointmentDate': 'Appointment Date',
          'appointmentStatus': 'Appointment Status',
          'paymentStatus': 'Payment Status',
        },
        new: {
          title: 'New Appointment',
        },
        view: {
          title: 'View Appointment',
        },
        importer: {
          title: 'Import Appointments',
          fileName: 'appointment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    brand: {
        name: 'brand',
        label: 'Brands',
        menu: 'Brands',
        exporterFileName: 'brand_export',
        list: {
          menu: 'Brands',
          title: 'Brands',
        },
        create: {
          success: 'Brand successfully saved',
        },
        update: {
          success: 'Brand successfully saved',
        },
        destroy: {
          success: 'Brand successfully deleted',
        },
        destroyAll: {
          success: 'Brand(s) successfully deleted',
        },
        edit: {
          title: 'Edit Brand',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'address': 'Address',
          'description': 'Description',
          'photo': 'Photo',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'address': 'Address',
          'description': 'Description',
        },
        hints: {
          'name': 'Name',
          'address': 'Address',
          'description': 'Description',
          'active': 'Active',
        },
        new: {
          title: 'New Brand',
        },
        view: {
          title: 'View Brand',
        },
        importer: {
          title: 'Import Brands',
          fileName: 'brand_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    deliveryMethod: {
        name: 'deliveryMethod',
        label: 'DeliveryMethods',
        menu: 'DeliveryMethods',
        exporterFileName: 'deliveryMethod_export',
        list: {
          menu: 'DeliveryMethods',
          title: 'DeliveryMethods',
        },
        create: {
          success: 'DeliveryMethod successfully saved',
        },
        update: {
          success: 'DeliveryMethod successfully saved',
        },
        destroy: {
          success: 'DeliveryMethod successfully deleted',
        },
        destroyAll: {
          success: 'DeliveryMethod(s) successfully deleted',
        },
        edit: {
          title: 'Edit DeliveryMethod',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'userId': 'User',
          'vehicleInfo': 'Vehicle Info',
          'additionalInfo': 'Additional Info',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Name',
          'userId': 'User',
          'vehicleInfo': 'Vehicle Info',
          'additionalInfo': 'Additional Info',
        },
        hints: {
          'name': 'Name',
          'userId': 'User',
          'vehicleInfo': 'Vehicle Info',
          'additionalInfo': 'Additional Info',
          'active': 'Active',
        },
        new: {
          title: 'New DeliveryMethod',
        },
        view: {
          title: 'View DeliveryMethod',
        },
        importer: {
          title: 'Import DeliveryMethods',
          fileName: 'deliveryMethod_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    createAnAccount: `Don't have an account? Create one.`,
    social: {
      header: 'or sign in with Social Media',
      signinWithGoogle: 'Sign in with Google',
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;
