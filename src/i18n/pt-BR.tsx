const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    customer: {
        name: 'Customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'Customer_exportados',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer salvo com sucesso',
        },
        update: {
          success: 'Customer salvo com sucesso',
        },
        destroy: {
          success: 'Customer deletado com sucesso',
        },
        destroyAll: {
          success: 'Customer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Customer',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          'userId': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Customer',
        },
        view: {
          title: 'Visualizar Customer',
        },
        importer: {
          title: 'Importar Customers',
          fileName: 'customer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    product: {
        name: 'Product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'Product_exportados',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product salvo com sucesso',
        },
        update: {
          success: 'Product salvo com sucesso',
        },
        destroy: {
          success: 'Product deletado com sucesso',
        },
        destroyAll: {
          success: 'Product(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Product',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Product',
        },
        view: {
          title: 'Visualizar Product',
        },
        importer: {
          title: 'Importar Products',
          fileName: 'product_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    order: {
        name: 'Order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'Order_exportados',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order salvo com sucesso',
        },
        update: {
          success: 'Order salvo com sucesso',
        },
        destroy: {
          success: 'Order deletado com sucesso',
        },
        destroyAll: {
          success: 'Order(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Order',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Order',
        },
        view: {
          title: 'Visualizar Order',
        },
        importer: {
          title: 'Importar Orders',
          fileName: 'order_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    operation: {
        name: 'Operation',
        label: 'Operations',
        menu: 'Operations',
        exporterFileName: 'Operation_exportados',
        list: {
          menu: 'Operations',
          title: 'Operations',
        },
        create: {
          success: 'Operation salvo com sucesso',
        },
        update: {
          success: 'Operation salvo com sucesso',
        },
        destroy: {
          success: 'Operation deletado com sucesso',
        },
        destroyAll: {
          success: 'Operation(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Operation',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Operation',
        },
        view: {
          title: 'Visualizar Operation',
        },
        importer: {
          title: 'Importar Operations',
          fileName: 'operation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    bank: {
        name: 'Bank',
        label: 'Banks',
        menu: 'Banks',
        exporterFileName: 'Bank_exportados',
        list: {
          menu: 'Banks',
          title: 'Banks',
        },
        create: {
          success: 'Bank salvo com sucesso',
        },
        update: {
          success: 'Bank salvo com sucesso',
        },
        destroy: {
          success: 'Bank deletado com sucesso',
        },
        destroyAll: {
          success: 'Bank(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Bank',
        },
        fields: {
          id: 'Id',
          'fintonicId': 'FintonicId',
          'name': 'Name',
          'logo': 'Logo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Bank',
        },
        view: {
          title: 'Visualizar Bank',
        },
        importer: {
          title: 'Importar Banks',
          fileName: 'bank_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    category: {
        name: 'Category',
        label: 'Categories',
        menu: 'Categories',
        exporterFileName: 'Category_exportados',
        list: {
          menu: 'Categories',
          title: 'Categories',
        },
        create: {
          success: 'Category salvo com sucesso',
        },
        update: {
          success: 'Category salvo com sucesso',
        },
        destroy: {
          success: 'Category deletado com sucesso',
        },
        destroyAll: {
          success: 'Category(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Category',
        },
        fields: {
          id: 'Id',
          'fintonicId': 'FintonicId',
          'name': 'Name',
          'shortname': 'Shortname',
          'logo': 'Logo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Category',
        },
        view: {
          title: 'Visualizar Category',
        },
        importer: {
          title: 'Importar Categories',
          fileName: 'category_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    taskList: {
        name: 'Task List',
        label: 'Task Lists',
        menu: 'Task Lists',
        exporterFileName: 'Task List_exportados',
        list: {
          menu: 'Task Lists',
          title: 'Task Lists',
        },
        create: {
          success: 'Task List salvo com sucesso',
        },
        update: {
          success: 'Task List salvo com sucesso',
        },
        destroy: {
          success: 'Task List deletado com sucesso',
        },
        destroyAll: {
          success: 'Task List(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Task List',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'userId': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Task List',
        },
        view: {
          title: 'Visualizar Task List',
        },
        importer: {
          title: 'Importar Task Lists',
          fileName: 'taskList_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    tasks: {
        name: 'Tasks',
        label: 'Tasks',
        menu: 'Tasks',
        exporterFileName: 'Tasks_exportados',
        list: {
          menu: 'Tasks',
          title: 'Tasks',
        },
        create: {
          success: 'Tasks salvo com sucesso',
        },
        update: {
          success: 'Tasks salvo com sucesso',
        },
        destroy: {
          success: 'Tasks deletado com sucesso',
        },
        destroyAll: {
          success: 'Tasks(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Tasks',
        },
        fields: {
          id: 'Id',
          'description': 'Description',
          'dueDateRange': 'DueDate',
          'dueDate': 'DueDate',
          'status': 'Status',
          'taskList': 'Task List',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Tasks',
        },
        view: {
          title: 'Visualizar Tasks',
        },
        importer: {
          title: 'Importar Tasks',
          fileName: 'tasks_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    tags: {
        name: 'Tags',
        label: 'Tags',
        menu: 'Tags',
        exporterFileName: 'Tags_exportados',
        list: {
          menu: 'Tags',
          title: 'Tags',
        },
        create: {
          success: 'Tags salvo com sucesso',
        },
        update: {
          success: 'Tags salvo com sucesso',
        },
        destroy: {
          success: 'Tags deletado com sucesso',
        },
        destroyAll: {
          success: 'Tags(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Tags',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'userId': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Tags',
        },
        view: {
          title: 'Visualizar Tags',
        },
        importer: {
          title: 'Importar Tags',
          fileName: 'tags_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    taskTags: {
        name: 'TaskTags',
        label: 'TaskTags',
        menu: 'TaskTags',
        exporterFileName: 'TaskTags_exportados',
        list: {
          menu: 'TaskTags',
          title: 'TaskTags',
        },
        create: {
          success: 'TaskTags salvo com sucesso',
        },
        update: {
          success: 'TaskTags salvo com sucesso',
        },
        destroy: {
          success: 'TaskTags deletado com sucesso',
        },
        destroyAll: {
          success: 'TaskTags(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar TaskTags',
        },
        fields: {
          id: 'Id',
          'taskId': 'TaskId',
          'tagId': 'Tag',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo TaskTags',
        },
        view: {
          title: 'Visualizar TaskTags',
        },
        importer: {
          title: 'Importar TaskTags',
          fileName: 'taskTags_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    subTasks: {
        name: 'Sub Task',
        label: 'Sub Tasks',
        menu: 'Sub Tasks',
        exporterFileName: 'Sub Task_exportados',
        list: {
          menu: 'Sub Tasks',
          title: 'Sub Tasks',
        },
        create: {
          success: 'Sub Task salvo com sucesso',
        },
        update: {
          success: 'Sub Task salvo com sucesso',
        },
        destroy: {
          success: 'Sub Task deletado com sucesso',
        },
        destroyAll: {
          success: 'Sub Task(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Sub Task',
        },
        fields: {
          id: 'Id',
          'description': 'Description',
          'status': 'Status',
          'taskId': 'Task',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Sub Task',
        },
        view: {
          title: 'Visualizar Sub Task',
        },
        importer: {
          title: 'Importar Sub Tasks',
          fileName: 'subTasks_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    media: {
        name: 'Media',
        label: 'Media',
        menu: 'Media',
        exporterFileName: 'Media_exportados',
        list: {
          menu: 'Media',
          title: 'Media',
        },
        create: {
          success: 'Media salvo com sucesso',
        },
        update: {
          success: 'Media salvo com sucesso',
        },
        destroy: {
          success: 'Media deletado com sucesso',
        },
        destroyAll: {
          success: 'Media(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Media',
        },
        fields: {
          id: 'Id',
          'file': 'File',
          'metadata': 'Metadata',
          'userId': 'User',
          'show': 'Show',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Media',
        },
        view: {
          title: 'Visualizar Media',
        },
        importer: {
          title: 'Importar Media',
          fileName: 'media_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    posts: {
        name: 'Posts',
        label: 'Posts',
        menu: 'Posts',
        exporterFileName: 'Posts_exportados',
        list: {
          menu: 'Posts',
          title: 'Posts',
        },
        create: {
          success: 'Posts salvo com sucesso',
        },
        update: {
          success: 'Posts salvo com sucesso',
        },
        destroy: {
          success: 'Posts deletado com sucesso',
        },
        destroyAll: {
          success: 'Posts(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Posts',
        },
        fields: {
          id: 'Id',
          'content': 'Content',
          'postDateRange': 'PostDate',
          'postDate': 'PostDate',
          'media': 'Media',
          'userId': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Posts',
        },
        view: {
          title: 'Visualizar Posts',
        },
        importer: {
          title: 'Importar Posts',
          fileName: 'posts_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    followers: {
        name: 'Followers',
        label: 'Followers',
        menu: 'Followers',
        exporterFileName: 'Followers_exportados',
        list: {
          menu: 'Followers',
          title: 'Followers',
        },
        create: {
          success: 'Followers salvo com sucesso',
        },
        update: {
          success: 'Followers salvo com sucesso',
        },
        destroy: {
          success: 'Followers deletado com sucesso',
        },
        destroyAll: {
          success: 'Followers(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Followers',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'followerId': 'Follower',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Followers',
        },
        view: {
          title: 'Visualizar Followers',
        },
        importer: {
          title: 'Importar Followers',
          fileName: 'followers_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    like: {
        name: 'Like',
        label: 'Likes',
        menu: 'Likes',
        exporterFileName: 'Like_exportados',
        list: {
          menu: 'Likes',
          title: 'Likes',
        },
        create: {
          success: 'Like salvo com sucesso',
        },
        update: {
          success: 'Like salvo com sucesso',
        },
        destroy: {
          success: 'Like deletado com sucesso',
        },
        destroyAll: {
          success: 'Like(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Like',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'postId': 'PostId',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Like',
        },
        view: {
          title: 'Visualizar Like',
        },
        importer: {
          title: 'Importar Likes',
          fileName: 'like_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    hashtag: {
        name: 'Hashtag',
        label: 'Hashtags',
        menu: 'Hashtags',
        exporterFileName: 'Hashtag_exportados',
        list: {
          menu: 'Hashtags',
          title: 'Hashtags',
        },
        create: {
          success: 'Hashtag salvo com sucesso',
        },
        update: {
          success: 'Hashtag salvo com sucesso',
        },
        destroy: {
          success: 'Hashtag deletado com sucesso',
        },
        destroyAll: {
          success: 'Hashtag(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Hashtag',
        },
        fields: {
          id: 'Id',
          'hashtagText': 'HashtagText',
          'usageCountRange': 'Usage Count',
          'usageCount': 'Usage Count',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Hashtag',
        },
        view: {
          title: 'Visualizar Hashtag',
        },
        importer: {
          title: 'Importar Hashtags',
          fileName: 'hashtag_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    postHashtag: {
        name: 'PostHashtag',
        label: 'PostHashtags',
        menu: 'PostHashtags',
        exporterFileName: 'PostHashtag_exportados',
        list: {
          menu: 'PostHashtags',
          title: 'PostHashtags',
        },
        create: {
          success: 'PostHashtag salvo com sucesso',
        },
        update: {
          success: 'PostHashtag salvo com sucesso',
        },
        destroy: {
          success: 'PostHashtag deletado com sucesso',
        },
        destroyAll: {
          success: 'PostHashtag(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar PostHashtag',
        },
        fields: {
          id: 'Id',
          'postId': 'Post',
          'hashtagId': 'Hashtag',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo PostHashtag',
        },
        view: {
          title: 'Visualizar PostHashtag',
        },
        importer: {
          title: 'Importar PostHashtags',
          fileName: 'postHashtag_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    artist: {
        name: 'Artist',
        label: 'Artists',
        menu: 'Artists',
        exporterFileName: 'Artist_exportados',
        list: {
          menu: 'Artists',
          title: 'Artists',
        },
        create: {
          success: 'Artist salvo com sucesso',
        },
        update: {
          success: 'Artist salvo com sucesso',
        },
        destroy: {
          success: 'Artist deletado com sucesso',
        },
        destroyAll: {
          success: 'Artist(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Artist',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'bio': 'Bio',
          'photo': 'Photo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Artist',
        },
        view: {
          title: 'Visualizar Artist',
        },
        importer: {
          title: 'Importar Artists',
          fileName: 'artist_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    album: {
        name: 'Album',
        label: 'Albums',
        menu: 'Albums',
        exporterFileName: 'Album_exportados',
        list: {
          menu: 'Albums',
          title: 'Albums',
        },
        create: {
          success: 'Album salvo com sucesso',
        },
        update: {
          success: 'Album salvo com sucesso',
        },
        destroy: {
          success: 'Album deletado com sucesso',
        },
        destroyAll: {
          success: 'Album(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Album',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'artistId': 'Artist',
          'yearRange': 'Year',
          'year': 'Year',
          'cover': 'Cover',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Album',
        },
        view: {
          title: 'Visualizar Album',
        },
        importer: {
          title: 'Importar Albums',
          fileName: 'album_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    song: {
        name: 'Song',
        label: 'Songs',
        menu: 'Songs',
        exporterFileName: 'Song_exportados',
        list: {
          menu: 'Songs',
          title: 'Songs',
        },
        create: {
          success: 'Song salvo com sucesso',
        },
        update: {
          success: 'Song salvo com sucesso',
        },
        destroy: {
          success: 'Song deletado com sucesso',
        },
        destroyAll: {
          success: 'Song(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Song',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Song',
        },
        view: {
          title: 'Visualizar Song',
        },
        importer: {
          title: 'Importar Songs',
          fileName: 'song_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    playlist: {
        name: 'Playlist',
        label: 'Playlists',
        menu: 'Playlists',
        exporterFileName: 'Playlist_exportados',
        list: {
          menu: 'Playlists',
          title: 'Playlists',
        },
        create: {
          success: 'Playlist salvo com sucesso',
        },
        update: {
          success: 'Playlist salvo com sucesso',
        },
        destroy: {
          success: 'Playlist deletado com sucesso',
        },
        destroyAll: {
          success: 'Playlist(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Playlist',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'userId': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Playlist',
        },
        view: {
          title: 'Visualizar Playlist',
        },
        importer: {
          title: 'Importar Playlists',
          fileName: 'playlist_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    playlistSong: {
        name: 'Playlist Song',
        label: 'Playlist Songs',
        menu: 'Playlist Songs',
        exporterFileName: 'Playlist Song_exportados',
        list: {
          menu: 'Playlist Songs',
          title: 'Playlist Songs',
        },
        create: {
          success: 'Playlist Song salvo com sucesso',
        },
        update: {
          success: 'Playlist Song salvo com sucesso',
        },
        destroy: {
          success: 'Playlist Song deletado com sucesso',
        },
        destroyAll: {
          success: 'Playlist Song(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Playlist Song',
        },
        fields: {
          id: 'Id',
          'playlistId': 'Playlist',
          'songId': 'Song',
          'trackOrderRange': 'TrackOrder',
          'trackOrder': 'TrackOrder',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Playlist Song',
        },
        view: {
          title: 'Visualizar Playlist Song',
        },
        importer: {
          title: 'Importar Playlist Songs',
          fileName: 'playlistSong_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    userPlaylist: {
        name: 'User Playlist',
        label: 'User Playlists',
        menu: 'User Playlists',
        exporterFileName: 'User Playlist_exportados',
        list: {
          menu: 'User Playlists',
          title: 'User Playlists',
        },
        create: {
          success: 'User Playlist salvo com sucesso',
        },
        update: {
          success: 'User Playlist salvo com sucesso',
        },
        destroy: {
          success: 'User Playlist deletado com sucesso',
        },
        destroyAll: {
          success: 'User Playlist(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar User Playlist',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'playlistId': 'Playlist',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo User Playlist',
        },
        view: {
          title: 'Visualizar User Playlist',
        },
        importer: {
          title: 'Importar User Playlists',
          fileName: 'userPlaylist_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    city: {
        name: 'City',
        label: 'Cities',
        menu: 'Cities',
        exporterFileName: 'City_exportados',
        list: {
          menu: 'Cities',
          title: 'Cities',
        },
        create: {
          success: 'City salvo com sucesso',
        },
        update: {
          success: 'City salvo com sucesso',
        },
        destroy: {
          success: 'City deletado com sucesso',
        },
        destroyAll: {
          success: 'City(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar City',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'country': 'Country',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo City',
        },
        view: {
          title: 'Visualizar City',
        },
        importer: {
          title: 'Importar Cities',
          fileName: 'city_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    country: {
        name: 'Country',
        label: 'Countries',
        menu: 'Countries',
        exporterFileName: 'Country_exportados',
        list: {
          menu: 'Countries',
          title: 'Countries',
        },
        create: {
          success: 'Country salvo com sucesso',
        },
        update: {
          success: 'Country salvo com sucesso',
        },
        destroy: {
          success: 'Country deletado com sucesso',
        },
        destroyAll: {
          success: 'Country(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Country',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Country',
        },
        view: {
          title: 'Visualizar Country',
        },
        importer: {
          title: 'Importar Countries',
          fileName: 'country_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    address: {
        name: 'Address',
        label: 'Addresses',
        menu: 'Addresses',
        exporterFileName: 'Address_exportados',
        list: {
          menu: 'Addresses',
          title: 'Addresses',
        },
        create: {
          success: 'Address salvo com sucesso',
        },
        update: {
          success: 'Address salvo com sucesso',
        },
        destroy: {
          success: 'Address deletado com sucesso',
        },
        destroyAll: {
          success: 'Address(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Address',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Address',
        },
        view: {
          title: 'Visualizar Address',
        },
        importer: {
          title: 'Importar Addresses',
          fileName: 'address_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    productCategory: {
        name: 'Product Category',
        label: 'Product Categories',
        menu: 'Product Categories',
        exporterFileName: 'Product Category_exportados',
        list: {
          menu: 'Product Categories',
          title: 'Product Categories',
        },
        create: {
          success: 'Product Category salvo com sucesso',
        },
        update: {
          success: 'Product Category salvo com sucesso',
        },
        destroy: {
          success: 'Product Category deletado com sucesso',
        },
        destroyAll: {
          success: 'Product Category(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Product Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'parentCategory': 'ParentCategory',
          'photo': 'Photo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Product Category',
        },
        view: {
          title: 'Visualizar Product Category',
        },
        importer: {
          title: 'Importar Product Categories',
          fileName: 'productCategory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    orderDetail: {
        name: 'Order Detail',
        label: 'Order Details',
        menu: 'Order Details',
        exporterFileName: 'Order Detail_exportados',
        list: {
          menu: 'Order Details',
          title: 'Order Details',
        },
        create: {
          success: 'Order Detail salvo com sucesso',
        },
        update: {
          success: 'Order Detail salvo com sucesso',
        },
        destroy: {
          success: 'Order Detail deletado com sucesso',
        },
        destroyAll: {
          success: 'Order Detail(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Order Detail',
        },
        fields: {
          id: 'Id',
          'orderId': 'Order',
          'productId': 'Product',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'unitPriceRange': 'Unit Price',
          'unitPrice': 'Unit Price',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Order Detail',
        },
        view: {
          title: 'Visualizar Order Detail',
        },
        importer: {
          title: 'Importar Order Details',
          fileName: 'orderDetail_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    paymentMethods: {
        name: 'PaymentMethods',
        label: 'PaymentMethods',
        menu: 'PaymentMethods',
        exporterFileName: 'PaymentMethods_exportados',
        list: {
          menu: 'PaymentMethods',
          title: 'PaymentMethods',
        },
        create: {
          success: 'PaymentMethods salvo com sucesso',
        },
        update: {
          success: 'PaymentMethods salvo com sucesso',
        },
        destroy: {
          success: 'PaymentMethods deletado com sucesso',
        },
        destroyAll: {
          success: 'PaymentMethods(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar PaymentMethods',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'additionalInfo': 'AdditionalInfo',
          'active': 'Active',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo PaymentMethods',
        },
        view: {
          title: 'Visualizar PaymentMethods',
        },
        importer: {
          title: 'Importar PaymentMethods',
          fileName: 'paymentMethods_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    productReview: {
        name: 'Product Review',
        label: 'Product Reviews',
        menu: 'Product Reviews',
        exporterFileName: 'Product Review_exportados',
        list: {
          menu: 'Product Reviews',
          title: 'Product Reviews',
        },
        create: {
          success: 'Product Review salvo com sucesso',
        },
        update: {
          success: 'Product Review salvo com sucesso',
        },
        destroy: {
          success: 'Product Review deletado com sucesso',
        },
        destroyAll: {
          success: 'Product Review(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Product Review',
        },
        fields: {
          id: 'Id',
          'comment': 'Comment',
          'productId': 'Product',
          'customerId': 'Customer',
          'ratingRange': 'Rating',
          'rating': 'Rating',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Product Review',
        },
        view: {
          title: 'Visualizar Product Review',
        },
        importer: {
          title: 'Importar Product Reviews',
          fileName: 'productReview_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    promotions: {
        name: 'Promotions',
        label: 'Promotions',
        menu: 'Promotions',
        exporterFileName: 'Promotions_exportados',
        list: {
          menu: 'Promotions',
          title: 'Promotions',
        },
        create: {
          success: 'Promotions salvo com sucesso',
        },
        update: {
          success: 'Promotions salvo com sucesso',
        },
        destroy: {
          success: 'Promotions deletado com sucesso',
        },
        destroyAll: {
          success: 'Promotions(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Promotions',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Promotions',
        },
        view: {
          title: 'Visualizar Promotions',
        },
        importer: {
          title: 'Importar Promotions',
          fileName: 'promotions_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    course: {
        name: 'Course',
        label: 'Courses',
        menu: 'Courses',
        exporterFileName: 'Course_exportados',
        list: {
          menu: 'Courses',
          title: 'Courses',
        },
        create: {
          success: 'Course salvo com sucesso',
        },
        update: {
          success: 'Course salvo com sucesso',
        },
        destroy: {
          success: 'Course deletado com sucesso',
        },
        destroyAll: {
          success: 'Course(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Course',
        },
        view: {
          title: 'Visualizar Course',
        },
        importer: {
          title: 'Importar Courses',
          fileName: 'course_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    teacher: {
        name: 'Teacher',
        label: 'Teachers',
        menu: 'Teachers',
        exporterFileName: 'Teacher_exportados',
        list: {
          menu: 'Teachers',
          title: 'Teachers',
        },
        create: {
          success: 'Teacher salvo com sucesso',
        },
        update: {
          success: 'Teacher salvo com sucesso',
        },
        destroy: {
          success: 'Teacher deletado com sucesso',
        },
        destroyAll: {
          success: 'Teacher(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Teacher',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'photo': 'Photo',
          'userId': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Teacher',
        },
        view: {
          title: 'Visualizar Teacher',
        },
        importer: {
          title: 'Importar Teachers',
          fileName: 'teacher_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    lesson: {
        name: 'Lesson',
        label: 'Lessons',
        menu: 'Lessons',
        exporterFileName: 'Lesson_exportados',
        list: {
          menu: 'Lessons',
          title: 'Lessons',
        },
        create: {
          success: 'Lesson salvo com sucesso',
        },
        update: {
          success: 'Lesson salvo com sucesso',
        },
        destroy: {
          success: 'Lesson deletado com sucesso',
        },
        destroyAll: {
          success: 'Lesson(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Lesson',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Lesson',
        },
        view: {
          title: 'Visualizar Lesson',
        },
        importer: {
          title: 'Importar Lessons',
          fileName: 'lesson_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    courseEnrollment: {
        name: 'Course Enrollment',
        label: 'Course Enrollments',
        menu: 'Course Enrollments',
        exporterFileName: 'Course Enrollment_exportados',
        list: {
          menu: 'Course Enrollments',
          title: 'Course Enrollments',
        },
        create: {
          success: 'Course Enrollment salvo com sucesso',
        },
        update: {
          success: 'Course Enrollment salvo com sucesso',
        },
        destroy: {
          success: 'Course Enrollment deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Enrollment(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Enrollment',
        },
        fields: {
          id: 'Id',
          'courseId': 'Course',
          'studentId': 'Student',
          'enrollmentDateRange': 'Enrollment Date',
          'enrollmentDate': 'Enrollment Date',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Course Enrollment',
        },
        view: {
          title: 'Visualizar Course Enrollment',
        },
        importer: {
          title: 'Importar Course Enrollments',
          fileName: 'courseEnrollment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    student: {
        name: 'Student',
        label: 'Students',
        menu: 'Students',
        exporterFileName: 'Student_exportados',
        list: {
          menu: 'Students',
          title: 'Students',
        },
        create: {
          success: 'Student salvo com sucesso',
        },
        update: {
          success: 'Student salvo com sucesso',
        },
        destroy: {
          success: 'Student deletado com sucesso',
        },
        destroyAll: {
          success: 'Student(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Student',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'name': 'Name',
          'photo': 'Photo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Student',
        },
        view: {
          title: 'Visualizar Student',
        },
        importer: {
          title: 'Importar Students',
          fileName: 'student_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    courseComment: {
        name: 'Course Comment',
        label: 'Course Comments',
        menu: 'Course Comments',
        exporterFileName: 'Course Comment_exportados',
        list: {
          menu: 'Course Comments',
          title: 'Course Comments',
        },
        create: {
          success: 'Course Comment salvo com sucesso',
        },
        update: {
          success: 'Course Comment salvo com sucesso',
        },
        destroy: {
          success: 'Course Comment deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Comment(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Comment',
        },
        fields: {
          id: 'Id',
          'comment': 'Comment',
          'studentId': 'Student',
          'courseId': 'Course',
          'lessonId': 'Lesson',
          'media': 'Media',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Course Comment',
        },
        view: {
          title: 'Visualizar Course Comment',
        },
        importer: {
          title: 'Importar Course Comments',
          fileName: 'courseComment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    courseTransaction: {
        name: 'Course Transaction',
        label: 'Course Transactions',
        menu: 'Course Transactions',
        exporterFileName: 'Course Transaction_exportados',
        list: {
          menu: 'Course Transactions',
          title: 'Course Transactions',
        },
        create: {
          success: 'Course Transaction salvo com sucesso',
        },
        update: {
          success: 'Course Transaction salvo com sucesso',
        },
        destroy: {
          success: 'Course Transaction deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Transaction(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Transaction',
        },
        fields: {
          id: 'Id',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'transactionDateRange': 'Transaction Date',
          'transactionDate': 'Transaction Date',
          'courseId': 'Course',
          'studentId': 'Student',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Course Transaction',
        },
        view: {
          title: 'Visualizar Course Transaction',
        },
        importer: {
          title: 'Importar Course Transactions',
          fileName: 'courseTransaction_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    courseCategory: {
        name: 'Course Category',
        label: 'Course Categories',
        menu: 'Course Categories',
        exporterFileName: 'Course Category_exportados',
        list: {
          menu: 'Course Categories',
          title: 'Course Categories',
        },
        create: {
          success: 'Course Category salvo com sucesso',
        },
        update: {
          success: 'Course Category salvo com sucesso',
        },
        destroy: {
          success: 'Course Category deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Category(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'photo': 'Photo',
          'parentCategory': 'Parent Category',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Course Category',
        },
        view: {
          title: 'Visualizar Course Category',
        },
        importer: {
          title: 'Importar Course Categories',
          fileName: 'courseCategory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    categoryCourseRelation: {
        name: 'Category Course Relation',
        label: 'Category Course Relations',
        menu: 'Category Course Relations',
        exporterFileName: 'Category Course Relation_exportados',
        list: {
          menu: 'Category Course Relations',
          title: 'Category Course Relations',
        },
        create: {
          success: 'Category Course Relation salvo com sucesso',
        },
        update: {
          success: 'Category Course Relation salvo com sucesso',
        },
        destroy: {
          success: 'Category Course Relation deletado com sucesso',
        },
        destroyAll: {
          success: 'Category Course Relation(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Category Course Relation',
        },
        fields: {
          id: 'Id',
          'courseId': 'Course',
          'category': 'Category',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Category Course Relation',
        },
        view: {
          title: 'Visualizar Category Course Relation',
        },
        importer: {
          title: 'Importar Category Course Relations',
          fileName: 'categoryCourseRelation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    courseProgress: {
        name: 'Course Progress',
        label: 'Course Progresses',
        menu: 'Course Progresses',
        exporterFileName: 'Course Progress_exportados',
        list: {
          menu: 'Course Progresses',
          title: 'Course Progresses',
        },
        create: {
          success: 'Course Progress salvo com sucesso',
        },
        update: {
          success: 'Course Progress salvo com sucesso',
        },
        destroy: {
          success: 'Course Progress deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Progress(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Progress',
        },
        fields: {
          id: 'Id',
          'studentId': 'Student',
          'courseId': 'Course',
          'progressPercentageRange': 'Progress Percentage',
          'progressPercentage': 'Progress Percentage',
          'currentLesson': 'Current Lesson',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Course Progress',
        },
        view: {
          title: 'Visualizar Course Progress',
        },
        importer: {
          title: 'Importar Course Progresses',
          fileName: 'courseProgress_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    message: {
        name: 'Message',
        label: 'Messages',
        menu: 'Messages',
        exporterFileName: 'Message_exportados',
        list: {
          menu: 'Messages',
          title: 'Messages',
        },
        create: {
          success: 'Message salvo com sucesso',
        },
        update: {
          success: 'Message salvo com sucesso',
        },
        destroy: {
          success: 'Message deletado com sucesso',
        },
        destroyAll: {
          success: 'Message(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Message',
        },
        fields: {
          id: 'Id',
          'senderId': 'Sender',
          'recipientId': 'Recipient',
          'content': 'Content',
          'media': 'Media',
          'conversationId': 'Conversation',
          'status': 'Status',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Message',
        },
        view: {
          title: 'Visualizar Message',
        },
        importer: {
          title: 'Importar Messages',
          fileName: 'message_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    conversation: {
        name: 'Conversation',
        label: 'Conversations',
        menu: 'Conversations',
        exporterFileName: 'Conversation_exportados',
        list: {
          menu: 'Conversations',
          title: 'Conversations',
        },
        create: {
          success: 'Conversation salvo com sucesso',
        },
        update: {
          success: 'Conversation salvo com sucesso',
        },
        destroy: {
          success: 'Conversation deletado com sucesso',
        },
        destroyAll: {
          success: 'Conversation(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Conversation',
        },
        fields: {
          id: 'Id',
          'type': 'Type',
          'name': 'Name',
          'avatar': 'Avatar',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Conversation',
        },
        view: {
          title: 'Visualizar Conversation',
        },
        importer: {
          title: 'Importar Conversations',
          fileName: 'conversation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    conversationParticipant: {
        name: 'Conversation Participant',
        label: 'Conversation Participants',
        menu: 'Conversation Participants',
        exporterFileName: 'Conversation Participant_exportados',
        list: {
          menu: 'Conversation Participants',
          title: 'Conversation Participants',
        },
        create: {
          success: 'Conversation Participant salvo com sucesso',
        },
        update: {
          success: 'Conversation Participant salvo com sucesso',
        },
        destroy: {
          success: 'Conversation Participant deletado com sucesso',
        },
        destroyAll: {
          success: 'Conversation Participant(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Conversation Participant',
        },
        fields: {
          id: 'Id',
          'userId': 'User',
          'conversationId': 'Conversation',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Conversation Participant',
        },
        view: {
          title: 'Visualizar Conversation Participant',
        },
        importer: {
          title: 'Importar Conversation Participants',
          fileName: 'conversationParticipant_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    business: {
        name: 'Business',
        label: 'Businesses',
        menu: 'Businesses',
        exporterFileName: 'Business_exportados',
        list: {
          menu: 'Businesses',
          title: 'Businesses',
        },
        create: {
          success: 'Business salvo com sucesso',
        },
        update: {
          success: 'Business salvo com sucesso',
        },
        destroy: {
          success: 'Business deletado com sucesso',
        },
        destroyAll: {
          success: 'Business(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Business',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Business',
        },
        view: {
          title: 'Visualizar Business',
        },
        importer: {
          title: 'Importar Businesses',
          fileName: 'business_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    businessCategory: {
        name: 'Business Category',
        label: 'Business Categories',
        menu: 'Business Categories',
        exporterFileName: 'Business Category_exportados',
        list: {
          menu: 'Business Categories',
          title: 'Business Categories',
        },
        create: {
          success: 'Business Category salvo com sucesso',
        },
        update: {
          success: 'Business Category salvo com sucesso',
        },
        destroy: {
          success: 'Business Category deletado com sucesso',
        },
        destroyAll: {
          success: 'Business Category(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Business Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'logo': 'Logo',
          'parentBusinessType': 'ParentBusinessType',
          'description': 'Description',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Business Category',
        },
        view: {
          title: 'Visualizar Business Category',
        },
        importer: {
          title: 'Importar Business Categories',
          fileName: 'businessCategory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    service: {
        name: 'Service',
        label: 'Services',
        menu: 'Services',
        exporterFileName: 'Service_exportados',
        list: {
          menu: 'Services',
          title: 'Services',
        },
        create: {
          success: 'Service salvo com sucesso',
        },
        update: {
          success: 'Service salvo com sucesso',
        },
        destroy: {
          success: 'Service deletado com sucesso',
        },
        destroyAll: {
          success: 'Service(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Service',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Service',
        },
        view: {
          title: 'Visualizar Service',
        },
        importer: {
          title: 'Importar Services',
          fileName: 'service_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    availabilityTimeslot: {
        name: 'Availability Timeslot',
        label: 'Availability Timeslots',
        menu: 'Availability Timeslots',
        exporterFileName: 'Availability Timeslot_exportados',
        list: {
          menu: 'Availability Timeslots',
          title: 'Availability Timeslots',
        },
        create: {
          success: 'Availability Timeslot salvo com sucesso',
        },
        update: {
          success: 'Availability Timeslot salvo com sucesso',
        },
        destroy: {
          success: 'Availability Timeslot deletado com sucesso',
        },
        destroyAll: {
          success: 'Availability Timeslot(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Availability Timeslot',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Availability Timeslot',
        },
        view: {
          title: 'Visualizar Availability Timeslot',
        },
        importer: {
          title: 'Importar Availability Timeslots',
          fileName: 'availabilityTimeslot_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    appointment: {
        name: 'Appointment',
        label: 'Appointments',
        menu: 'Appointments',
        exporterFileName: 'Appointment_exportados',
        list: {
          menu: 'Appointments',
          title: 'Appointments',
        },
        create: {
          success: 'Appointment salvo com sucesso',
        },
        update: {
          success: 'Appointment salvo com sucesso',
        },
        destroy: {
          success: 'Appointment deletado com sucesso',
        },
        destroyAll: {
          success: 'Appointment(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Appointment',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Appointment',
        },
        view: {
          title: 'Visualizar Appointment',
        },
        importer: {
          title: 'Importar Appointments',
          fileName: 'appointment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    brand: {
        name: 'Brand',
        label: 'Brands',
        menu: 'Brands',
        exporterFileName: 'Brand_exportados',
        list: {
          menu: 'Brands',
          title: 'Brands',
        },
        create: {
          success: 'Brand salvo com sucesso',
        },
        update: {
          success: 'Brand salvo com sucesso',
        },
        destroy: {
          success: 'Brand deletado com sucesso',
        },
        destroyAll: {
          success: 'Brand(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Brand',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'address': 'Address',
          'description': 'Description',
          'photo': 'Photo',
          'active': 'Active',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Brand',
        },
        view: {
          title: 'Visualizar Brand',
        },
        importer: {
          title: 'Importar Brands',
          fileName: 'brand_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    deliveryMethod: {
        name: 'DeliveryMethod',
        label: 'DeliveryMethods',
        menu: 'DeliveryMethods',
        exporterFileName: 'DeliveryMethod_exportados',
        list: {
          menu: 'DeliveryMethods',
          title: 'DeliveryMethods',
        },
        create: {
          success: 'DeliveryMethod salvo com sucesso',
        },
        update: {
          success: 'DeliveryMethod salvo com sucesso',
        },
        destroy: {
          success: 'DeliveryMethod deletado com sucesso',
        },
        destroyAll: {
          success: 'DeliveryMethod(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar DeliveryMethod',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'userId': 'User',
          'vehicleInfo': 'Vehicle Info',
          'additionalInfo': 'Additional Info',
          'active': 'Active',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo DeliveryMethod',
        },
        view: {
          title: 'Visualizar DeliveryMethod',
        },
        importer: {
          title: 'Importar DeliveryMethods',
          fileName: 'deliveryMethod_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    createAnAccount: 'Não possui conta? Criar uma.',
    social: {
      header: 'ou entrar com uma rede social',
      signinWithGoogle: 'Entrar com Google',
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists:
        'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;
