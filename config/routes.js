export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/login',
        component: '../layouts/LoginLayout',
        routes: [
          {
            name: 'login',
            path: '/login',
            component: './Login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect:'recommend'
              },
              {
                path: '/recommend',
                name: 'recommend',
                icon: 'AppstoreAddOutlined',
                component: '@/pages/recommend',
              },
              {
                path: '/obligatory',
                name: 'obligatory',
                icon: 'FieldBinaryOutlined',
                component: '@/pages/obligatory',
              },
              {
                path: '/programme',
                name: 'programme',
                icon: 'CodeOutlined',
                component: '@/pages/programme',
              },
              {
                path: '/management',
                name: 'management',
                icon: 'UserAddOutlined',
                component: '@/pages/management',
              },
              {
                path: '/welfare',
                name: 'welfare',
                icon: 'GiftOutlined',
                component: '@/pages/welfare',
              },
              {
                path: '/account/center',
                component: '@/pages/account/center',
              },
              {
                path: '/account/settings',
                component: '@/pages/account/settings',
              },
              {
                path: '/addResource',
                component: '@/pages/addResource',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
