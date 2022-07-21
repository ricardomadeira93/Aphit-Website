
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/IndexHome.vue') },
      { path: '/ContactsPage', component: () => import('src/pages/ContactsPage.vue') },
      { path: '/AboutPage', component: () => import('pages/AboutPage.vue') },
      { path: '/IndexHome', component: () => import('pages/IndexHome.vue') },
      { path: '/TestPage', component: () => import('pages/TestPage.vue') },
      { path: '/RegPage', component: () => import('pages/RegPage.vue') },
      { path: '/RegPage2', component: () => import('pages/RegPage2.vue') },
      { path: '/RegPage3', component: () => import('pages/RegPage3.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
