const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'All In',
  },
  api: {
    menu: 'API',
  },
  entities: {
    customer: {
      name: 'customer',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'exportacion_customer',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer guardado con éxito',
      },
      update: {
        success: 'Customer guardado con éxito',
      },
      destroy: {
        success: 'Customer eliminado con éxito',
      },
      destroyAll: {
        success: 'Customer(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Customer',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        birthdateRange: 'Birthdate',
        birthdate: 'Birthdate',
        gender: 'Gender',
        userId: 'User',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {
        gender: {
          male: 'Male',
          female: 'Female',
          other: 'Other',
        },
      },
      placeholders: {
        userId: 'User',
      },
      hints: {
        userId: 'User',
      },
      new: {
        title: 'Nuevo Customer',
      },
      view: {
        title: 'Ver Customer',
      },
      importer: {
        title: 'Importar Customers',
        fileName: 'customer_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    product: {
      name: 'product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'exportacion_product',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product guardado con éxito',
      },
      update: {
        success: 'Product guardado con éxito',
      },
      destroy: {
        success: 'Product eliminado con éxito',
      },
      destroyAll: {
        success: 'Product(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Product',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        unitPriceRange: 'Unit Price',
        unitPrice: 'Unit Price',
        photos: 'Photos',
        category: 'Category',
        stockRange: 'Stock',
        stock: 'Stock',
        brandId: 'Brand',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        category: 'Category',
        stock: 'Stock',
      },
      hints: {
        category: 'Category',
        stock: 'Stock',
        active: 'Active',
      },
      new: {
        title: 'Nuevo Product',
      },
      view: {
        title: 'Ver Product',
      },
      importer: {
        title: 'Importar Products',
        fileName: 'product_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    order: {
      name: 'order',
      label: 'Orders',
      menu: 'Orders',
      exporterFileName: 'exportacion_order',
      list: {
        menu: 'Orders',
        title: 'Orders',
      },
      create: {
        success: 'Order guardado con éxito',
      },
      update: {
        success: 'Order guardado con éxito',
      },
      destroy: {
        success: 'Order eliminado con éxito',
      },
      destroyAll: {
        success: 'Order(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Order',
      },
      fields: {
        id: 'Id',
        customer: 'Customer',
        status: 'Status',
        attachments: 'Attachments',
        shippingPriceRange: 'Shipping Price',
        shippingPrice: 'Shipping Price',
        totalRange: 'Total',
        total: 'Total',
        deliver: 'Deliver',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {
        status: {
          requested: 'Requested',
          processing: 'Processing',
          delivering: 'Delivering',
          delivered: 'Delivered',
          canceled: 'Canceled',
          stuck: 'Stuck',
        },
      },
      placeholders: {
        status: 'Status',
        shippingPrice: 'Shipping Price',
        total: 'Total',
        deliver: 'Deliver',
      },
      hints: {
        status: 'Status',
        shippingPrice: 'Shipping Price',
        total: 'Total',
        deliver: 'Deliver',
      },
      new: {
        title: 'Nuevo Order',
      },
      view: {
        title: 'Ver Order',
      },
      importer: {
        title: 'Importar Orders',
        fileName: 'order_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    operation: {
      name: 'operation',
      label: 'Operations',
      menu: 'Operations',
      exporterFileName: 'exportacion_operation',
      list: {
        menu: 'Operations',
        title: 'Operations',
      },
      create: {
        success: 'Operation guardado con éxito',
      },
      update: {
        success: 'Operation guardado con éxito',
        started: 'Operation started',
      },
      destroy: {
        success: 'Operation eliminado con éxito',
      },
      destroyAll: {
        success: 'Operation(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Operation',
      },
      fields: {
        id: 'Id',
        fintonicId: 'FintonicId',
        description: 'Description',
        reference: 'Reference',
        note: 'Note',
        userDescription: 'UserDescription',
        quantityRange: 'Quantity',
        quantity: 'Quantity',
        valueDateRange: 'ValueDate',
        valueDate: 'ValueDate',
        operationDateRange: 'OperationDate',
        operationDate: 'OperationDate',
        cleanNote: 'CleanNote',
        cleanUserDescription: 'CleanUserDescription',
        primaryDisplay: 'PrimaryDisplay',
        secondaryDisplay: 'SecondaryDisplay',
        categoryId: 'CategoryId',
        bankId: 'BankId',
        receipt: 'Receipt',
        userId: 'User',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        fintonicId: 'Fintonic Id',
        description: 'Description',
        reference: 'Reference',
        note: 'Note',
        userDescription: 'User Description',
        quantity: 'Quantity',
        valueDate: 'Value Date',
        operationDate: 'Operation Date',
        cleanNote: 'Clean Note',
        cleanUserDescription: 'Clean User Description',
        primaryDisplay: 'Primary Display',
        secondaryDisplay: 'Secondary Display',
        categoryId: 'Category',
        bankId: 'Bank',
        userId: 'User',
      },
      hints: {
        fintonicId: 'Id',
        description: 'Description',
        reference: 'Reference',
        note: 'Note',
        userDescription: 'User Description',
        quantity: 'Quantity',
        valueDate: 'Value Date',
        operationDate: 'Operation Date',
        cleanNote: 'Clean Note',
        cleanUserDescription: 'Clean User Description',
        primaryDisplay: 'Primary Display',
        secondaryDisplay: 'Secondary Display',
        categoryId: 'Category',
        bankId: 'Bank',
        receipt: 'Receipt',
        userId: 'User',
      },
      new: {
        title: 'Nuevo Operation',
      },
      view: {
        title: 'Ver Operation',
      },
      importer: {
        title: 'Importar Operations',
        fileName: 'operation_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    bank: {
      name: 'bank',
      label: 'Banks',
      menu: 'Banks',
      exporterFileName: 'exportacion_bank',
      list: {
        menu: 'Banks',
        title: 'Banks',
      },
      create: {
        success: 'Bank guardado con éxito',
      },
      update: {
        success: 'Bank guardado con éxito',
      },
      destroy: {
        success: 'Bank eliminado con éxito',
      },
      destroyAll: {
        success: 'Bank(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Bank',
      },
      fields: {
        id: 'Id',
        fintonicId: 'FintonicId',
        name: 'Name',
        logo: 'Logo',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        fintonicId: 'Fintonic Id',
        name: 'Name',
      },
      hints: {
        fintonicId: 'Id',
        name: 'Name',
        logo: 'Logo',
      },
      new: {
        title: 'Nuevo Bank',
      },
      view: {
        title: 'Ver Bank',
      },
      importer: {
        title: 'Importar Banks',
        fileName: 'bank_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    category: {
      name: 'category',
      label: 'Categories',
      menu: 'Categories',
      exporterFileName: 'exportacion_category',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category guardado con éxito',
      },
      update: {
        success: 'Category guardado con éxito',
      },
      destroy: {
        success: 'Category eliminado con éxito',
      },
      destroyAll: {
        success: 'Category(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Category',
      },
      fields: {
        id: 'Id',
        fintonicId: 'FintonicId',
        name: 'Name',
        shortname: 'Shortname',
        logo: 'Logo',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        fintonicId: 'Fintonic Id',
        name: 'Name',
        shortname: 'Short Name',
      },
      hints: {
        fintonicId: 'Fintonic Id',
        name: 'Name',
        shortname: 'Short Name',
        logo: 'Logo',
      },
      new: {
        title: 'Nuevo Category',
      },
      view: {
        title: 'Ver Category',
      },
      importer: {
        title: 'Importar Categories',
        fileName: 'category_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    taskList: {
      name: 'taskList',
      label: 'Task Lists',
      menu: 'Task Lists',
      exporterFileName: 'exportacion_taskList',
      list: {
        menu: 'Task Lists',
        title: 'Task Lists',
      },
      create: {
        success: 'Task List guardado con éxito',
      },
      update: {
        success: 'Task List guardado con éxito',
      },
      destroy: {
        success: 'Task List eliminado con éxito',
      },
      destroyAll: {
        success: 'Task List(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Task List',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        userId: 'User',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        userId: 'User',
      },
      hints: {
        name: 'Name',
        userId: 'User',
      },
      new: {
        title: 'Nuevo Task List',
      },
      view: {
        title: 'Ver Task List',
      },
      importer: {
        title: 'Importar Task Lists',
        fileName: 'taskList_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    tasks: {
      name: 'tasks',
      label: 'Tasks',
      menu: 'Tasks',
      exporterFileName: 'exportacion_tasks',
      list: {
        menu: 'Tasks',
        title: 'Tasks',
      },
      create: {
        success: 'Tasks guardado con éxito',
      },
      update: {
        success: 'Tasks guardado con éxito',
      },
      destroy: {
        success: 'Tasks eliminado con éxito',
      },
      destroyAll: {
        success: 'Tasks(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Tasks',
      },
      fields: {
        id: 'Id',
        description: 'Description',
        dueDateRange: 'DueDate',
        dueDate: 'DueDate',
        status: 'Status',
        taskList: 'Task List',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {
        status: {
          open: 'Open',
          in_progress: 'In_progress',
          stuck: 'Stuck',
          closed: 'Closed',
        },
      },
      placeholders: {
        description: 'Task',
        dueDate: 'Due Date',
        status: 'Status',
        taskList: 'Task List',
      },
      hints: {
        description: 'Task',
        dueDate: 'Due Date',
        status: 'Status',
        taskList: 'Task List',
      },
      new: {
        title: 'Nuevo Tasks',
      },
      view: {
        title: 'Ver Tasks',
      },
      importer: {
        title: 'Importar Tasks',
        fileName: 'tasks_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    tags: {
      name: 'tags',
      label: 'Tags',
      menu: 'Tags',
      exporterFileName: 'exportacion_tags',
      list: {
        menu: 'Tags',
        title: 'Tags',
      },
      create: {
        success: 'Tags guardado con éxito',
      },
      update: {
        success: 'Tags guardado con éxito',
      },
      destroy: {
        success: 'Tags eliminado con éxito',
      },
      destroyAll: {
        success: 'Tags(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Tags',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        userId: 'User',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Tag',
        userId: 'User',
      },
      hints: {
        name: 'Tag',
        userId: 'User',
      },
      new: {
        title: 'Nuevo Tags',
      },
      view: {
        title: 'Ver Tags',
      },
      importer: {
        title: 'Importar Tags',
        fileName: 'tags_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    taskTags: {
      name: 'taskTags',
      label: 'TaskTags',
      menu: 'TaskTags',
      exporterFileName: 'exportacion_taskTags',
      list: {
        menu: 'TaskTags',
        title: 'TaskTags',
      },
      create: {
        success: 'TaskTags guardado con éxito',
      },
      update: {
        success: 'TaskTags guardado con éxito',
      },
      destroy: {
        success: 'TaskTags eliminado con éxito',
      },
      destroyAll: {
        success: 'TaskTags(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar TaskTags',
      },
      fields: {
        id: 'Id',
        taskId: 'TaskId',
        tagId: 'Tag',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        taskId: 'Task',
        tagId: 'Tag',
      },
      hints: {
        taskId: 'Task',
        tagId: 'Tag',
      },
      new: {
        title: 'Nuevo TaskTags',
      },
      view: {
        title: 'Ver TaskTags',
      },
      importer: {
        title: 'Importar TaskTags',
        fileName: 'taskTags_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    subTasks: {
      name: 'subTasks',
      label: 'Sub Tasks',
      menu: 'Sub Tasks',
      exporterFileName: 'exportacion_subTasks',
      list: {
        menu: 'Sub Tasks',
        title: 'Sub Tasks',
      },
      create: {
        success: 'Sub Task guardado con éxito',
      },
      update: {
        success: 'Sub Task guardado con éxito',
      },
      destroy: {
        success: 'Sub Task eliminado con éxito',
      },
      destroyAll: {
        success: 'Sub Task(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Sub Task',
      },
      fields: {
        id: 'Id',
        description: 'Description',
        status: 'Status',
        taskId: 'Task',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {
        status: {
          open: 'Open',
          in_progress: 'In_progress',
          stuck: 'Stuck',
          closed: 'Closed',
        },
      },
      placeholders: {
        description: 'Description',
        status: 'Status',
        taskId: 'Task',
      },
      hints: {
        description: 'Description',
        status: 'Status',
        taskId: 'Task',
      },
      new: {
        title: 'Nuevo Sub Task',
      },
      view: {
        title: 'Ver Sub Task',
      },
      importer: {
        title: 'Importar Sub Tasks',
        fileName: 'subTasks_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    media: {
      name: 'media',
      label: 'Media',
      menu: 'Media',
      exporterFileName: 'exportacion_media',
      list: {
        menu: 'Media',
        title: 'Media',
      },
      create: {
        success: 'Media guardado con éxito',
      },
      update: {
        success: 'Media guardado con éxito',
      },
      destroy: {
        success: 'Media eliminado con éxito',
      },
      destroyAll: {
        success: 'Media(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Media',
      },
      fields: {
        id: 'Id',
        file: 'File',
        metadata: 'Metadata',
        userId: 'User',
        show: 'Show',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        metadata: 'metadata',
        userId: 'User',
      },
      hints: {
        file: 'File',
        metadata: 'metadata',
        userId: 'User',
        show: 'Show',
      },
      new: {
        title: 'Nuevo Media',
      },
      view: {
        title: 'Ver Media',
      },
      importer: {
        title: 'Importar Media',
        fileName: 'media_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    posts: {
      name: 'posts',
      label: 'Posts',
      menu: 'Posts',
      exporterFileName: 'exportacion_posts',
      list: {
        menu: 'Posts',
        title: 'Posts',
      },
      create: {
        success: 'Posts guardado con éxito',
      },
      update: {
        success: 'Posts guardado con éxito',
      },
      destroy: {
        success: 'Posts eliminado con éxito',
      },
      destroyAll: {
        success: 'Posts(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Posts',
      },
      fields: {
        id: 'Id',
        content: 'Content',
        postDateRange: 'PostDate',
        postDate: 'PostDate',
        media: 'Media',
        userId: 'User',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        content: 'content',
        postDate: 'Post Date',
        userId: 'User',
      },
      hints: {
        content: 'content',
        postDate: 'Date',
        media: 'media',
        userId: 'User',
      },
      new: {
        title: 'Nuevo Posts',
      },
      view: {
        title: 'Ver Posts',
      },
      importer: {
        title: 'Importar Posts',
        fileName: 'posts_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    followers: {
      name: 'followers',
      label: 'Followers',
      menu: 'Followers',
      exporterFileName: 'exportacion_followers',
      list: {
        menu: 'Followers',
        title: 'Followers',
      },
      create: {
        success: 'Followers guardado con éxito',
      },
      update: {
        success: 'Followers guardado con éxito',
      },
      destroy: {
        success: 'Followers eliminado con éxito',
      },
      destroyAll: {
        success: 'Followers(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Followers',
      },
      fields: {
        id: 'Id',
        userId: 'User',
        followerId: 'Follower',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        userId: 'User',
        followerId: 'Follower',
      },
      hints: {
        userId: 'User',
        followerId: 'Follower',
      },
      new: {
        title: 'Nuevo Followers',
      },
      view: {
        title: 'Ver Followers',
      },
      importer: {
        title: 'Importar Followers',
        fileName: 'followers_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    like: {
      name: 'like',
      label: 'Likes',
      menu: 'Likes',
      exporterFileName: 'exportacion_like',
      list: {
        menu: 'Likes',
        title: 'Likes',
      },
      create: {
        success: 'Like guardado con éxito',
      },
      update: {
        success: 'Like guardado con éxito',
      },
      destroy: {
        success: 'Like eliminado con éxito',
      },
      destroyAll: {
        success: 'Like(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Like',
      },
      fields: {
        id: 'Id',
        userId: 'User',
        postId: 'PostId',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        userId: 'User',
        postId: 'Post',
      },
      hints: {
        userId: 'User',
        postId: 'Post',
      },
      new: {
        title: 'Nuevo Like',
      },
      view: {
        title: 'Ver Like',
      },
      importer: {
        title: 'Importar Likes',
        fileName: 'like_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    hashtag: {
      name: 'hashtag',
      label: 'Hashtags',
      menu: 'Hashtags',
      exporterFileName: 'exportacion_hashtag',
      list: {
        menu: 'Hashtags',
        title: 'Hashtags',
      },
      create: {
        success: 'Hashtag guardado con éxito',
      },
      update: {
        success: 'Hashtag guardado con éxito',
      },
      destroy: {
        success: 'Hashtag eliminado con éxito',
      },
      destroyAll: {
        success: 'Hashtag(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Hashtag',
      },
      fields: {
        id: 'Id',
        hashtagText: 'HashtagText',
        usageCountRange: 'Usage Count',
        usageCount: 'Usage Count',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        hashtagText: 'Hashtag',
        usageCount: 'Usage Count',
      },
      hints: {
        hashtagText: 'Hashtag',
        usageCount: 'Usage Count',
      },
      new: {
        title: 'Nuevo Hashtag',
      },
      view: {
        title: 'Ver Hashtag',
      },
      importer: {
        title: 'Importar Hashtags',
        fileName: 'hashtag_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    postHashtag: {
      name: 'postHashtag',
      label: 'PostHashtags',
      menu: 'PostHashtags',
      exporterFileName: 'exportacion_postHashtag',
      list: {
        menu: 'PostHashtags',
        title: 'PostHashtags',
      },
      create: {
        success: 'PostHashtag guardado con éxito',
      },
      update: {
        success: 'PostHashtag guardado con éxito',
      },
      destroy: {
        success: 'PostHashtag eliminado con éxito',
      },
      destroyAll: {
        success: 'PostHashtag(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar PostHashtag',
      },
      fields: {
        id: 'Id',
        postId: 'Post',
        hashtagId: 'Hashtag',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        postId: 'Post',
        hashtagId: 'Hashtag',
      },
      hints: {
        postId: 'Post',
        hashtagId: 'Hashtag',
      },
      new: {
        title: 'Nuevo PostHashtag',
      },
      view: {
        title: 'Ver PostHashtag',
      },
      importer: {
        title: 'Importar PostHashtags',
        fileName: 'postHashtag_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    artist: {
      name: 'artist',
      label: 'Artists',
      menu: 'Artists',
      exporterFileName: 'exportacion_artist',
      list: {
        menu: 'Artists',
        title: 'Artists',
      },
      create: {
        success: 'Artist guardado con éxito',
      },
      update: {
        success: 'Artist guardado con éxito',
      },
      destroy: {
        success: 'Artist eliminado con éxito',
      },
      destroyAll: {
        success: 'Artist(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Artist',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        bio: 'Bio',
        photo: 'Photo',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        bio: 'Bio',
      },
      hints: {
        name: 'Name',
        bio: 'Bio',
        photo: 'Photo',
      },
      new: {
        title: 'Nuevo Artist',
      },
      view: {
        title: 'Ver Artist',
      },
      importer: {
        title: 'Importar Artists',
        fileName: 'artist_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    album: {
      name: 'album',
      label: 'Albums',
      menu: 'Albums',
      exporterFileName: 'exportacion_album',
      list: {
        menu: 'Albums',
        title: 'Albums',
      },
      create: {
        success: 'Album guardado con éxito',
      },
      update: {
        success: 'Album guardado con éxito',
      },
      destroy: {
        success: 'Album eliminado con éxito',
      },
      destroyAll: {
        success: 'Album(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Album',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        artistId: 'Artist',
        yearRange: 'Year',
        year: 'Year',
        cover: 'Cover',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        title: 'Title',
        artistId: 'Artist',
      },
      hints: {
        title: 'Title',
        artistId: 'Artist',
        cover: 'Cover',
      },
      new: {
        title: 'Nuevo Album',
      },
      view: {
        title: 'Ver Album',
      },
      importer: {
        title: 'Importar Albums',
        fileName: 'album_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    song: {
      name: 'song',
      label: 'Songs',
      menu: 'Songs',
      exporterFileName: 'exportacion_song',
      list: {
        menu: 'Songs',
        title: 'Songs',
      },
      create: {
        success: 'Song guardado con éxito',
      },
      update: {
        success: 'Song guardado con éxito',
      },
      destroy: {
        success: 'Song eliminado con éxito',
      },
      destroyAll: {
        success: 'Song(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Song',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        artistId: 'Artist',
        albumId: 'Album',
        duration: 'Duration',
        genre: 'Genre',
        externalUrl: 'External Url',
        media: 'Media',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        title: 'Title',
        artistId: 'Artist',
        albumId: 'Album',
        duration: 'Duration',
        externalUrl: 'Url',
      },
      hints: {
        title: 'Title',
        artistId: 'Artist',
        albumId: 'Album',
        duration: 'Duration',
        externalUrl: 'Url',
        media: 'Media',
      },
      new: {
        title: 'Nuevo Song',
      },
      view: {
        title: 'Ver Song',
      },
      importer: {
        title: 'Importar Songs',
        fileName: 'song_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    playlist: {
      name: 'playlist',
      label: 'Playlists',
      menu: 'Playlists',
      exporterFileName: 'exportacion_playlist',
      list: {
        menu: 'Playlists',
        title: 'Playlists',
      },
      create: {
        success: 'Playlist guardado con éxito',
      },
      update: {
        success: 'Playlist guardado con éxito',
      },
      destroy: {
        success: 'Playlist eliminado con éxito',
      },
      destroyAll: {
        success: 'Playlist(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Playlist',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        userId: 'User',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        description: 'Description',
        userId: 'User',
      },
      hints: {
        name: 'Name',
        description: 'Description',
        userId: 'User',
      },
      new: {
        title: 'Nuevo Playlist',
      },
      view: {
        title: 'Ver Playlist',
      },
      importer: {
        title: 'Importar Playlists',
        fileName: 'playlist_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    playlistSong: {
      name: 'playlistSong',
      label: 'Playlist Songs',
      menu: 'Playlist Songs',
      exporterFileName: 'exportacion_playlistSong',
      list: {
        menu: 'Playlist Songs',
        title: 'Playlist Songs',
      },
      create: {
        success: 'Playlist Song guardado con éxito',
      },
      update: {
        success: 'Playlist Song guardado con éxito',
      },
      destroy: {
        success: 'Playlist Song eliminado con éxito',
      },
      destroyAll: {
        success: 'Playlist Song(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Playlist Song',
      },
      fields: {
        id: 'Id',
        playlistId: 'Playlist',
        songId: 'Song',
        trackOrderRange: 'TrackOrder',
        trackOrder: 'TrackOrder',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        playlistId: 'Playlist',
        songId: 'Song',
        trackOrder: 'Order',
      },
      hints: {
        playlistId: 'Playlist',
        songId: 'Song',
        trackOrder: 'Order',
      },
      new: {
        title: 'Nuevo Playlist Song',
      },
      view: {
        title: 'Ver Playlist Song',
      },
      importer: {
        title: 'Importar Playlist Songs',
        fileName: 'playlistSong_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    userPlaylist: {
      name: 'userPlaylist',
      label: 'User Playlists',
      menu: 'User Playlists',
      exporterFileName: 'exportacion_userPlaylist',
      list: {
        menu: 'User Playlists',
        title: 'User Playlists',
      },
      create: {
        success: 'User Playlist guardado con éxito',
      },
      update: {
        success: 'User Playlist guardado con éxito',
      },
      destroy: {
        success: 'User Playlist eliminado con éxito',
      },
      destroyAll: {
        success: 'User Playlist(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar User Playlist',
      },
      fields: {
        id: 'Id',
        userId: 'User',
        playlistId: 'Playlist',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        userId: 'User',
        playlistId: 'Playlist',
      },
      hints: {
        userId: 'User',
        playlistId: 'Playlist',
      },
      new: {
        title: 'Nuevo User Playlist',
      },
      view: {
        title: 'Ver User Playlist',
      },
      importer: {
        title: 'Importar User Playlists',
        fileName: 'userPlaylist_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    city: {
      name: 'city',
      label: 'Cities',
      menu: 'Cities',
      exporterFileName: 'exportacion_city',
      list: {
        menu: 'Cities',
        title: 'Cities',
      },
      create: {
        success: 'City guardado con éxito',
      },
      update: {
        success: 'City guardado con éxito',
      },
      destroy: {
        success: 'City eliminado con éxito',
      },
      destroyAll: {
        success: 'City(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar City',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        country: 'Country',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        country: 'Country',
      },
      hints: {
        country: 'Country',
      },
      new: {
        title: 'Nuevo City',
      },
      view: {
        title: 'Ver City',
      },
      importer: {
        title: 'Importar Cities',
        fileName: 'city_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    country: {
      name: 'country',
      label: 'Countries',
      menu: 'Countries',
      exporterFileName: 'exportacion_country',
      list: {
        menu: 'Countries',
        title: 'Countries',
      },
      create: {
        success: 'Country guardado con éxito',
      },
      update: {
        success: 'Country guardado con éxito',
      },
      destroy: {
        success: 'Country eliminado con éxito',
      },
      destroyAll: {
        success: 'Country(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Country',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
      },
      hints: {
        name: 'Name',
      },
      new: {
        title: 'Nuevo Country',
      },
      view: {
        title: 'Ver Country',
      },
      importer: {
        title: 'Importar Countries',
        fileName: 'country_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    address: {
      name: 'address',
      label: 'Addresses',
      menu: 'Addresses',
      exporterFileName: 'exportacion_address',
      list: {
        menu: 'Addresses',
        title: 'Addresses',
      },
      create: {
        success: 'Address guardado con éxito',
      },
      update: {
        success: 'Address guardado con éxito',
      },
      destroy: {
        success: 'Address eliminado con éxito',
      },
      destroyAll: {
        success: 'Address(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Address',
      },
      fields: {
        id: 'Id',
        customer: 'Customer',
        addressName: 'AddressName',
        firstLine: 'FirstLine',
        secondLine: 'SecondLine',
        zipCode: 'ZipCode',
        city: 'City',
        phone: 'Phone',
        business: 'Business',
        coordinates: 'Coordinates',
        urlMap: 'UrlMap',
        preferred: 'Preferred',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        customer: 'Customer',
        addressName: 'Name',
        firstLine: 'First Line',
        secondLine: 'Second Line',
        zipCode: 'Zip Code',
        city: 'City',
        phone: 'Phone',
        business: 'Business',
        coordinates: 'Coordinates',
        urlMap: 'Url',
      },
      hints: {
        customer: 'Customer',
        addressName: 'Name',
        firstLine: 'First Line',
        secondLine: 'Second Line',
        zipCode: 'Zip Code',
        city: 'City',
        phone: 'Phone',
        business: 'Business',
        coordinates: 'Coordinates',
        urlMap: 'Url',
        preferred: 'Preferred',
      },
      new: {
        title: 'Nuevo Address',
      },
      view: {
        title: 'Ver Address',
      },
      importer: {
        title: 'Importar Addresses',
        fileName: 'address_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    productCategory: {
      name: 'productCategory',
      label: 'Product Categories',
      menu: 'Product Categories',
      exporterFileName: 'exportacion_productCategory',
      list: {
        menu: 'Product Categories',
        title: 'Product Categories',
      },
      create: {
        success: 'Product Category guardado con éxito',
      },
      update: {
        success: 'Product Category guardado con éxito',
      },
      destroy: {
        success: 'Product Category eliminado con éxito',
      },
      destroyAll: {
        success: 'Product Category(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Product Category',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        parentCategory: 'ParentCategory',
        photo: 'Photo',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        parentCategory: 'Parent Category',
      },
      hints: {
        name: 'Name',
        parentCategory: 'Parent Category',
        photo: 'Photo',
      },
      new: {
        title: 'Nuevo Product Category',
      },
      view: {
        title: 'Ver Product Category',
      },
      importer: {
        title: 'Importar Product Categories',
        fileName: 'productCategory_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    orderDetail: {
      name: 'orderDetail',
      label: 'Order Details',
      menu: 'Order Details',
      exporterFileName: 'exportacion_orderDetail',
      list: {
        menu: 'Order Details',
        title: 'Order Details',
      },
      create: {
        success: 'Order Detail guardado con éxito',
      },
      update: {
        success: 'Order Detail guardado con éxito',
      },
      destroy: {
        success: 'Order Detail eliminado con éxito',
      },
      destroyAll: {
        success: 'Order Detail(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Order Detail',
      },
      fields: {
        id: 'Id',
        orderId: 'Order',
        productId: 'Product',
        quantityRange: 'Quantity',
        quantity: 'Quantity',
        unitPriceRange: 'Unit Price',
        unitPrice: 'Unit Price',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        orderId: 'Order',
        productId: 'Product',
        quantity: 'Quantity',
        unitPrice: 'Unit Price',
      },
      hints: {
        orderId: 'Order',
        productId: 'Product',
        quantity: 'Quantity',
        unitPrice: 'Unit Price',
      },
      new: {
        title: 'Nuevo Order Detail',
      },
      view: {
        title: 'Ver Order Detail',
      },
      importer: {
        title: 'Importar Order Details',
        fileName: 'orderDetail_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    paymentMethods: {
      name: 'paymentMethods',
      label: 'PaymentMethods',
      menu: 'PaymentMethods',
      exporterFileName: 'exportacion_paymentMethods',
      list: {
        menu: 'PaymentMethods',
        title: 'PaymentMethods',
      },
      create: {
        success: 'PaymentMethods guardado con éxito',
      },
      update: {
        success: 'PaymentMethods guardado con éxito',
      },
      destroy: {
        success: 'PaymentMethods eliminado con éxito',
      },
      destroyAll: {
        success: 'PaymentMethods(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar PaymentMethods',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        additionalInfo: 'AdditionalInfo',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
      },
      hints: {
        name: 'Name',
        active: 'Active',
      },
      new: {
        title: 'Nuevo PaymentMethods',
      },
      view: {
        title: 'Ver PaymentMethods',
      },
      importer: {
        title: 'Importar PaymentMethods',
        fileName: 'paymentMethods_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    productReview: {
      name: 'productReview',
      label: 'Product Reviews',
      menu: 'Product Reviews',
      exporterFileName: 'exportacion_productReview',
      list: {
        menu: 'Product Reviews',
        title: 'Product Reviews',
      },
      create: {
        success: 'Product Review guardado con éxito',
      },
      update: {
        success: 'Product Review guardado con éxito',
      },
      destroy: {
        success: 'Product Review eliminado con éxito',
      },
      destroyAll: {
        success: 'Product Review(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Product Review',
      },
      fields: {
        id: 'Id',
        comment: 'Comment',
        productId: 'Product',
        customerId: 'Customer',
        ratingRange: 'Rating',
        rating: 'Rating',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        comment: 'Comment',
        productId: 'Product',
        customerId: 'Customer',
      },
      hints: {
        comment: 'Comment',
        productId: 'Product',
        customerId: 'Customer',
      },
      new: {
        title: 'Nuevo Product Review',
      },
      view: {
        title: 'Ver Product Review',
      },
      importer: {
        title: 'Importar Product Reviews',
        fileName: 'productReview_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    promotions: {
      name: 'promotions',
      label: 'Promotions',
      menu: 'Promotions',
      exporterFileName: 'exportacion_promotions',
      list: {
        menu: 'Promotions',
        title: 'Promotions',
      },
      create: {
        success: 'Promotions guardado con éxito',
      },
      update: {
        success: 'Promotions guardado con éxito',
      },
      destroy: {
        success: 'Promotions eliminado con éxito',
      },
      destroyAll: {
        success: 'Promotions(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Promotions',
      },
      fields: {
        id: 'Id',
        code: 'Code',
        discountRange: 'Discount',
        discount: 'Discount',
        startDateRange: 'Start Date',
        startDate: 'Start Date',
        endDateRange: 'End Date',
        endDate: 'End Date',
        productId: 'Product',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        code: 'Code',
        discount: 'Discount',
        startDate: 'Start Date',
        endDate: 'End Date',
        productId: 'Product',
      },
      hints: {
        code: 'Code',
        discount: 'Discount',
        startDate: 'Start Date',
        endDate: 'End Date',
        productId: 'Product',
      },
      new: {
        title: 'Nuevo Promotions',
      },
      view: {
        title: 'Ver Promotions',
      },
      importer: {
        title: 'Importar Promotions',
        fileName: 'promotions_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    course: {
      name: 'course',
      label: 'Courses',
      menu: 'Courses',
      exporterFileName: 'exportacion_course',
      list: {
        menu: 'Courses',
        title: 'Courses',
      },
      create: {
        success: 'Course guardado con éxito',
      },
      update: {
        success: 'Course guardado con éxito',
      },
      destroy: {
        success: 'Course eliminado con éxito',
      },
      destroyAll: {
        success: 'Course(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Course',
      },
      fields: {
        id: 'Id',
        teacherId: 'Teacher',
        title: 'Title',
        description: 'Description',
        priceRange: 'Price',
        price: 'Price',
        hoursDurationRange: 'Hours Duration',
        hoursDuration: 'Hours Duration',
        startDateRange: 'Start Date',
        startDate: 'Start Date',
        endDateRange: 'End Date',
        endDate: 'End Date',
        level: 'Level',
        additionalInfo: 'Additional Info',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        teacherId: 'Teacher',
        title: 'Title',
        description: 'Description',
        price: 'Price',
        hoursDuration: 'Hours Duration',
        startDate: 'Start Date',
        endDate: 'End Date',
        level: 'Level',
        additionalInfo: 'Additional Info',
      },
      hints: {
        teacherId: 'Teacher',
        title: 'Title',
        description: 'Description',
        price: 'Price',
        hoursDuration: 'Hours Duration',
        startDate: 'Start Date',
        endDate: 'End Date',
        level: 'Level',
        additionalInfo: 'Additional Info',
        active: 'Active',
      },
      new: {
        title: 'Nuevo Course',
      },
      view: {
        title: 'Ver Course',
      },
      importer: {
        title: 'Importar Courses',
        fileName: 'course_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    teacher: {
      name: 'teacher',
      label: 'Teachers',
      menu: 'Teachers',
      exporterFileName: 'exportacion_teacher',
      list: {
        menu: 'Teachers',
        title: 'Teachers',
      },
      create: {
        success: 'Teacher guardado con éxito',
      },
      update: {
        success: 'Teacher guardado con éxito',
      },
      destroy: {
        success: 'Teacher eliminado con éxito',
      },
      destroyAll: {
        success: 'Teacher(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Teacher',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        photo: 'Photo',
        userId: 'User',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        userId: 'User',
      },
      hints: {
        name: 'Name',
        photo: 'Photo',
        userId: 'User',
      },
      new: {
        title: 'Nuevo Teacher',
      },
      view: {
        title: 'Ver Teacher',
      },
      importer: {
        title: 'Importar Teachers',
        fileName: 'teacher_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    lesson: {
      name: 'lesson',
      label: 'Lessons',
      menu: 'Lessons',
      exporterFileName: 'exportacion_lesson',
      list: {
        menu: 'Lessons',
        title: 'Lessons',
      },
      create: {
        success: 'Lesson guardado con éxito',
      },
      update: {
        success: 'Lesson guardado con éxito',
      },
      destroy: {
        success: 'Lesson eliminado con éxito',
      },
      destroyAll: {
        success: 'Lesson(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Lesson',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        externalUrl: 'External Url',
        media: 'Media',
        hoursDurationRange: 'Hours Duration',
        hoursDuration: 'Hours Duration',
        courseId: 'CourseId',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        title: 'Title',
        description: 'Description',
        externalUrl: 'External Url',
        courseId: 'Course',
      },
      hints: {
        title: 'Title',
        description: 'Description',
        externalUrl: 'External Url',
        media: 'Media',
        courseId: 'Course',
        active: 'Active',
      },
      new: {
        title: 'Nuevo Lesson',
      },
      view: {
        title: 'Ver Lesson',
      },
      importer: {
        title: 'Importar Lessons',
        fileName: 'lesson_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    courseEnrollment: {
      name: 'courseEnrollment',
      label: 'Course Enrollments',
      menu: 'Course Enrollments',
      exporterFileName: 'exportacion_courseEnrollment',
      list: {
        menu: 'Course Enrollments',
        title: 'Course Enrollments',
      },
      create: {
        success: 'Course Enrollment guardado con éxito',
      },
      update: {
        success: 'Course Enrollment guardado con éxito',
      },
      destroy: {
        success: 'Course Enrollment eliminado con éxito',
      },
      destroyAll: {
        success: 'Course Enrollment(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Course Enrollment',
      },
      fields: {
        id: 'Id',
        courseId: 'Course',
        studentId: 'Student',
        enrollmentDateRange: 'Enrollment Date',
        enrollmentDate: 'Enrollment Date',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        courseId: 'Course',
        studentId: 'Student',
        enrollmentDate: 'Enrollment Date',
      },
      hints: {
        courseId: 'Course',
        studentId: 'Student',
        enrollmentDate: 'Enrollment Date',
      },
      new: {
        title: 'Nuevo Course Enrollment',
      },
      view: {
        title: 'Ver Course Enrollment',
      },
      importer: {
        title: 'Importar Course Enrollments',
        fileName: 'courseEnrollment_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    student: {
      name: 'student',
      label: 'Students',
      menu: 'Students',
      exporterFileName: 'exportacion_student',
      list: {
        menu: 'Students',
        title: 'Students',
      },
      create: {
        success: 'Student guardado con éxito',
      },
      update: {
        success: 'Student guardado con éxito',
      },
      destroy: {
        success: 'Student eliminado con éxito',
      },
      destroyAll: {
        success: 'Student(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Student',
      },
      fields: {
        id: 'Id',
        userId: 'User',
        name: 'Name',
        photo: 'Photo',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
      },
      hints: {
        name: 'Name',
        photo: 'Photo',
      },
      new: {
        title: 'Nuevo Student',
      },
      view: {
        title: 'Ver Student',
      },
      importer: {
        title: 'Importar Students',
        fileName: 'student_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    courseComment: {
      name: 'courseComment',
      label: 'Course Comments',
      menu: 'Course Comments',
      exporterFileName: 'exportacion_courseComment',
      list: {
        menu: 'Course Comments',
        title: 'Course Comments',
      },
      create: {
        success: 'Course Comment guardado con éxito',
      },
      update: {
        success: 'Course Comment guardado con éxito',
      },
      destroy: {
        success: 'Course Comment eliminado con éxito',
      },
      destroyAll: {
        success: 'Course Comment(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Course Comment',
      },
      fields: {
        id: 'Id',
        comment: 'Comment',
        studentId: 'Student',
        courseId: 'Course',
        lessonId: 'Lesson',
        media: 'Media',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        comment: 'Comment',
        studentId: 'Student',
        courseId: 'Course',
        lessonId: 'Lesson',
      },
      hints: {
        comment: 'Comment',
        studentId: 'Student',
        courseId: 'Course',
        lessonId: 'Lesson',
        media: 'Media',
      },
      new: {
        title: 'Nuevo Course Comment',
      },
      view: {
        title: 'Ver Course Comment',
      },
      importer: {
        title: 'Importar Course Comments',
        fileName: 'courseComment_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    courseTransaction: {
      name: 'courseTransaction',
      label: 'Course Transactions',
      menu: 'Course Transactions',
      exporterFileName: 'exportacion_courseTransaction',
      list: {
        menu: 'Course Transactions',
        title: 'Course Transactions',
      },
      create: {
        success: 'Course Transaction guardado con éxito',
      },
      update: {
        success: 'Course Transaction guardado con éxito',
      },
      destroy: {
        success: 'Course Transaction eliminado con éxito',
      },
      destroyAll: {
        success:
          'Course Transaction(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Course Transaction',
      },
      fields: {
        id: 'Id',
        amountRange: 'Amount',
        amount: 'Amount',
        transactionDateRange: 'Transaction Date',
        transactionDate: 'Transaction Date',
        courseId: 'Course',
        studentId: 'Student',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        amount: 'Amount',
        transactionDate: 'Transaction Date',
        courseId: 'Course',
        studentId: 'Student',
      },
      hints: {
        amount: 'Amount',
        transactionDate: 'Transaction Date',
        courseId: 'Course',
        studentId: 'Student',
      },
      new: {
        title: 'Nuevo Course Transaction',
      },
      view: {
        title: 'Ver Course Transaction',
      },
      importer: {
        title: 'Importar Course Transactions',
        fileName: 'courseTransaction_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    courseCategory: {
      name: 'courseCategory',
      label: 'Course Categories',
      menu: 'Course Categories',
      exporterFileName: 'exportacion_courseCategory',
      list: {
        menu: 'Course Categories',
        title: 'Course Categories',
      },
      create: {
        success: 'Course Category guardado con éxito',
      },
      update: {
        success: 'Course Category guardado con éxito',
      },
      destroy: {
        success: 'Course Category eliminado con éxito',
      },
      destroyAll: {
        success: 'Course Category(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Course Category',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        photo: 'Photo',
        parentCategory: 'Parent Category',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        parentCategory: 'Parent Category',
      },
      hints: {
        name: 'Name',
        photo: 'Photo',
        parentCategory: 'Parent Category',
      },
      new: {
        title: 'Nuevo Course Category',
      },
      view: {
        title: 'Ver Course Category',
      },
      importer: {
        title: 'Importar Course Categories',
        fileName: 'courseCategory_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    categoryCourseRelation: {
      name: 'categoryCourseRelation',
      label: 'Category Course Relations',
      menu: 'Category Course Relations',
      exporterFileName:
        'exportacion_categoryCourseRelation',
      list: {
        menu: 'Category Course Relations',
        title: 'Category Course Relations',
      },
      create: {
        success:
          'Category Course Relation guardado con éxito',
      },
      update: {
        success:
          'Category Course Relation guardado con éxito',
      },
      destroy: {
        success:
          'Category Course Relation eliminado con éxito',
      },
      destroyAll: {
        success:
          'Category Course Relation(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Category Course Relation',
      },
      fields: {
        id: 'Id',
        courseId: 'Course',
        category: 'Category',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        courseId: 'Course',
        category: 'Category',
      },
      hints: {
        courseId: 'Course',
        category: 'Category',
      },
      new: {
        title: 'Nuevo Category Course Relation',
      },
      view: {
        title: 'Ver Category Course Relation',
      },
      importer: {
        title: 'Importar Category Course Relations',
        fileName: 'categoryCourseRelation_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    courseProgress: {
      name: 'courseProgress',
      label: 'Course Progresses',
      menu: 'Course Progresses',
      exporterFileName: 'exportacion_courseProgress',
      list: {
        menu: 'Course Progresses',
        title: 'Course Progresses',
      },
      create: {
        success: 'Course Progress guardado con éxito',
      },
      update: {
        success: 'Course Progress guardado con éxito',
      },
      destroy: {
        success: 'Course Progress eliminado con éxito',
      },
      destroyAll: {
        success: 'Course Progress(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Course Progress',
      },
      fields: {
        id: 'Id',
        studentId: 'Student',
        courseId: 'Course',
        progressPercentageRange: 'Progress Percentage',
        progressPercentage: 'Progress Percentage',
        currentLesson: 'Current Lesson',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        studentId: 'Student',
        courseId: 'Course',
        progressPercentage: 'Progress Percentage',
        currentLesson: 'Current Lesson',
      },
      hints: {
        studentId: 'Student',
        courseId: 'Course',
        progressPercentage: 'Progress Percentage',
        currentLesson: 'Current Lesson',
      },
      new: {
        title: 'Nuevo Course Progress',
      },
      view: {
        title: 'Ver Course Progress',
      },
      importer: {
        title: 'Importar Course Progresses',
        fileName: 'courseProgress_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    message: {
      name: 'message',
      label: 'Messages',
      menu: 'Messages',
      exporterFileName: 'exportacion_message',
      list: {
        menu: 'Messages',
        title: 'Messages',
      },
      create: {
        success: 'Message guardado con éxito',
      },
      update: {
        success: 'Message guardado con éxito',
      },
      destroy: {
        success: 'Message eliminado con éxito',
      },
      destroyAll: {
        success: 'Message(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Message',
      },
      fields: {
        id: 'Id',
        senderId: 'Sender',
        recipientId: 'Recipient',
        content: 'Content',
        media: 'Media',
        conversationId: 'Conversation',
        status: 'Status',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {
        status: {
          sending: 'Sending',
          sent: 'Sent',
          seen: 'Seen',
        },
      },
      placeholders: {
        senderId: 'Sender',
        recipientId: 'Recipient',
        content: 'content',
        conversationId: 'Conversation',
        status: 'Status',
      },
      hints: {
        senderId: 'Sender',
        recipientId: 'Recipient',
        content: 'content',
        media: 'Media',
        conversationId: 'Conversation',
        status: 'Status',
      },
      new: {
        title: 'Nuevo Message',
      },
      view: {
        title: 'Ver Message',
      },
      importer: {
        title: 'Importar Messages',
        fileName: 'message_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    conversation: {
      name: 'conversation',
      label: 'Conversations',
      menu: 'Conversations',
      exporterFileName: 'exportacion_conversation',
      list: {
        menu: 'Conversations',
        title: 'Conversations',
      },
      create: {
        success: 'Conversation guardado con éxito',
      },
      update: {
        success: 'Conversation guardado con éxito',
      },
      destroy: {
        success: 'Conversation eliminado con éxito',
      },
      destroyAll: {
        success: 'Conversation(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Conversation',
      },
      fields: {
        id: 'Id',
        type: 'Type',
        name: 'Name',
        avatar: 'Avatar',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {
        type: {
          individual: 'Individual',
          group: 'Group',
        },
      },
      placeholders: {
        type: 'Type',
        name: 'Name',
      },
      hints: {
        type: 'Type',
        name: 'Name',
        avatar: 'Avatar',
      },
      new: {
        title: 'Nuevo Conversation',
      },
      view: {
        title: 'Ver Conversation',
      },
      importer: {
        title: 'Importar Conversations',
        fileName: 'conversation_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    conversationParticipant: {
      name: 'conversationParticipant',
      label: 'Conversation Participants',
      menu: 'Conversation Participants',
      exporterFileName:
        'exportacion_conversationParticipant',
      list: {
        menu: 'Conversation Participants',
        title: 'Conversation Participants',
      },
      create: {
        success:
          'Conversation Participant guardado con éxito',
      },
      update: {
        success:
          'Conversation Participant guardado con éxito',
      },
      destroy: {
        success:
          'Conversation Participant eliminado con éxito',
      },
      destroyAll: {
        success:
          'Conversation Participant(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Conversation Participant',
      },
      fields: {
        id: 'Id',
        userId: 'User',
        conversationId: 'Conversation',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        userId: 'User',
        conversationId: 'Conversation',
      },
      hints: {
        userId: 'User',
        conversationId: 'Conversation',
      },
      new: {
        title: 'Nuevo Conversation Participant',
      },
      view: {
        title: 'Ver Conversation Participant',
      },
      importer: {
        title: 'Importar Conversation Participants',
        fileName: 'conversationParticipant_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    business: {
      name: 'business',
      label: 'Businesses',
      menu: 'Businesses',
      exporterFileName: 'exportacion_business',
      list: {
        menu: 'Businesses',
        title: 'Businesses',
      },
      create: {
        success: 'Business guardado con éxito',
      },
      update: {
        success: 'Business guardado con éxito',
      },
      destroy: {
        success: 'Business eliminado con éxito',
      },
      destroyAll: {
        success: 'Business(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Business',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        logo: 'Logo',
        category: 'Category',
        address: 'Address',
        owner: 'Owner',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        description: 'Description',
        category: 'Category',
        address: 'Address',
        owner: 'Owner',
      },
      hints: {
        name: 'Name',
        description: 'Description',
        logo: 'Logo',
        category: 'Category',
        address: 'Address',
        owner: 'Owner',
        active: 'Active',
      },
      new: {
        title: 'Nuevo Business',
      },
      view: {
        title: 'Ver Business',
      },
      importer: {
        title: 'Importar Businesses',
        fileName: 'business_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    businessCategory: {
      name: 'businessCategory',
      label: 'Business Categories',
      menu: 'Business Categories',
      exporterFileName: 'exportacion_businessCategory',
      list: {
        menu: 'Business Categories',
        title: 'Business Categories',
      },
      create: {
        success: 'Business Category guardado con éxito',
      },
      update: {
        success: 'Business Category guardado con éxito',
      },
      destroy: {
        success: 'Business Category eliminado con éxito',
      },
      destroyAll: {
        success: 'Business Category(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Business Category',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        logo: 'Logo',
        parentBusinessType: 'ParentBusinessType',
        description: 'Description',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        parentBusinessType: 'Parent Business Type',
        description: 'Description',
      },
      hints: {
        name: 'Name',
        logo: 'Logo',
        parentBusinessType: 'Parent Business Type',
        description: 'Description',
      },
      new: {
        title: 'Nuevo Business Category',
      },
      view: {
        title: 'Ver Business Category',
      },
      importer: {
        title: 'Importar Business Categories',
        fileName: 'businessCategory_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    service: {
      name: 'service',
      label: 'Services',
      menu: 'Services',
      exporterFileName: 'exportacion_service',
      list: {
        menu: 'Services',
        title: 'Services',
      },
      create: {
        success: 'Service guardado con éxito',
      },
      update: {
        success: 'Service guardado con éxito',
      },
      destroy: {
        success: 'Service eliminado con éxito',
      },
      destroyAll: {
        success: 'Service(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Service',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        photo: 'Photo',
        description: 'Description',
        hoursDurationRange: 'Hours Duration',
        hoursDuration: 'Hours Duration',
        priceRange: 'Price',
        price: 'Price',
        businessId: 'Business',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        description: 'Description',
        hoursDuration: 'Hours Duration',
        price: 'Price',
        businessId: 'Business',
      },
      hints: {
        name: 'Name',
        photo: 'Photo',
        description: 'Description',
        hoursDuration: 'Hours Duration',
        price: 'Price',
        businessId: 'Business',
        active: 'Active',
      },
      new: {
        title: 'Nuevo Service',
      },
      view: {
        title: 'Ver Service',
      },
      importer: {
        title: 'Importar Services',
        fileName: 'service_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    availabilityTimeslot: {
      name: 'availabilityTimeslot',
      label: 'Availability Timeslots',
      menu: 'Availability Timeslots',
      exporterFileName: 'exportacion_availabilityTimeslot',
      list: {
        menu: 'Availability Timeslots',
        title: 'Availability Timeslots',
      },
      create: {
        success: 'Availability Timeslot guardado con éxito',
      },
      update: {
        success: 'Availability Timeslot guardado con éxito',
      },
      destroy: {
        success:
          'Availability Timeslot eliminado con éxito',
      },
      destroyAll: {
        success:
          'Availability Timeslot(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Availability Timeslot',
      },
      fields: {
        id: 'Id',
        businessId: 'Business',
        dayOfTheWeek: 'DayOfTheWeek',
        startTimeRange: 'Start Time',
        startTime: 'Start Time',
        endTimeRange: 'End Time',
        endTime: 'End Time',
        capacityRange: 'Capacity',
        capacity: 'Capacity',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        businessId: 'Business',
        dayOfTheWeek: 'Day Of The Week',
        startTime: 'Start Time',
        endTime: 'End Time',
        capacity: 'Capacity',
      },
      hints: {
        businessId: 'Business',
        dayOfTheWeek: 'Day Of The Week',
        startTime: 'Start Time',
        endTime: 'End Time',
        capacity: 'Capacity',
      },
      new: {
        title: 'Nuevo Availability Timeslot',
      },
      view: {
        title: 'Ver Availability Timeslot',
      },
      importer: {
        title: 'Importar Availability Timeslots',
        fileName: 'availabilityTimeslot_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    appointment: {
      name: 'appointment',
      label: 'Appointments',
      menu: 'Appointments',
      exporterFileName: 'exportacion_appointment',
      list: {
        menu: 'Appointments',
        title: 'Appointments',
      },
      create: {
        success: 'Appointment guardado con éxito',
      },
      update: {
        success: 'Appointment guardado con éxito',
      },
      destroy: {
        success: 'Appointment eliminado con éxito',
      },
      destroyAll: {
        success: 'Appointment(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Appointment',
      },
      fields: {
        id: 'Id',
        customer: 'Customer',
        serviceId: 'Service',
        timeslotId: 'Timeslot',
        appointmentDateRange: 'Appointment Date',
        appointmentDate: 'Appointment Date',
        appointmentStatus: 'Appointment Status',
        paymentStatus: 'Payment Status',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {
        appointmentStatus: {
          pending: 'Pending',
          confirmed: 'Confirmed',
          canceled: 'Canceled',
          absent: 'Absent',
        },
        paymentStatus: {
          paid: 'Paid',
          payment_pending: 'Payment_pending',
          pay_there: 'Pay_there',
        },
      },
      placeholders: {
        customer: 'Customer',
        serviceId: 'Service',
        timeslotId: 'Timeslot',
        appointmentDate: 'Appointment Date',
        appointmentStatus: 'Appointment Status',
        paymentStatus: 'Payment Status',
      },
      hints: {
        customer: 'Customer',
        serviceId: 'Service',
        timeslotId: 'Timeslot',
        appointmentDate: 'Appointment Date',
        appointmentStatus: 'Appointment Status',
        paymentStatus: 'Payment Status',
      },
      new: {
        title: 'Nuevo Appointment',
      },
      view: {
        title: 'Ver Appointment',
      },
      importer: {
        title: 'Importar Appointments',
        fileName: 'appointment_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    brand: {
      name: 'brand',
      label: 'Brands',
      menu: 'Brands',
      exporterFileName: 'exportacion_brand',
      list: {
        menu: 'Brands',
        title: 'Brands',
      },
      create: {
        success: 'Brand guardado con éxito',
      },
      update: {
        success: 'Brand guardado con éxito',
      },
      destroy: {
        success: 'Brand eliminado con éxito',
      },
      destroyAll: {
        success: 'Brand(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar Brand',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        address: 'Address',
        description: 'Description',
        photo: 'Photo',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        address: 'Address',
        description: 'Description',
      },
      hints: {
        name: 'Name',
        address: 'Address',
        description: 'Description',
        active: 'Active',
      },
      new: {
        title: 'Nuevo Brand',
      },
      view: {
        title: 'Ver Brand',
      },
      importer: {
        title: 'Importar Brands',
        fileName: 'brand_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },

    deliveryMethod: {
      name: 'deliveryMethod',
      label: 'DeliveryMethods',
      menu: 'DeliveryMethods',
      exporterFileName: 'exportacion_deliveryMethod',
      list: {
        menu: 'DeliveryMethods',
        title: 'DeliveryMethods',
      },
      create: {
        success: 'DeliveryMethod guardado con éxito',
      },
      update: {
        success: 'DeliveryMethod guardado con éxito',
      },
      destroy: {
        success: 'DeliveryMethod eliminado con éxito',
      },
      destroyAll: {
        success: 'DeliveryMethod(s) eliminado con éxito',
      },
      edit: {
        title: 'Editar DeliveryMethod',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        userId: 'User',
        vehicleInfo: 'Vehicle Info',
        additionalInfo: 'Additional Info',
        active: 'Active',
        createdAt: 'Creado el',
        updatedAt: 'Actualizado el',
        createdAtRange: 'Creado el',
      },
      enumerators: {},
      placeholders: {
        name: 'Name',
        userId: 'User',
        vehicleInfo: 'Vehicle Info',
        additionalInfo: 'Additional Info',
      },
      hints: {
        name: 'Name',
        userId: 'User',
        vehicleInfo: 'Vehicle Info',
        additionalInfo: 'Additional Info',
        active: 'Active',
      },
      new: {
        title: 'Nuevo DeliveryMethod',
      },
      view: {
        title: 'Ver DeliveryMethod',
      },
      importer: {
        title: 'Importar DeliveryMethods',
        fileName: 'deliveryMethod_import_template',
        hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    createAnAccount: '¿No tienes una cuenta? Crea uno.',
    social: {
      header: 'o inicia sesión con las redes sociales',
      signinWithGoogle: 'Inicia sesión con Google',
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url: 'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint: 'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Oscuro',
      light: 'Claro',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max: '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max: 'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size: 'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint: 'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    items_per_page: '/ página',
    jump_to: 'Ir',
    jump_to_confirm: 'confirmar',
    page: '',

    prev_page: 'Pagina anterior',
    next_page: 'Siguiente página',
    prev_5: '5 páginas anteriores',
    next_5: '5 páginas siguientes',
    prev_3: '3 páginas anteriores',
    next_3: 'Siguientes 3 páginas',
  },
};

export default es;
