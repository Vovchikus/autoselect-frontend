export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Login',
                url: '#/login'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Register',
                url: '#/register'
              }
            }
          }
        ]
      }
    ]
  }
];
