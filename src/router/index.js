import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetails from '@/views/event/Details.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventRegister from '@/views/event/Register.vue'
import AboutView from '@/views/AboutView.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
import EventService from '@/services/EventService.js'
import GStore from '@/stores'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      beforeEnter: to => {
        return EventService.getEvent(to.params.id)
        .then(response => {
          GStore.event = response.data
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            return({
              name: '404Resource',
              params: { resource: 'foredrag' }
            })
          } else {
            return({ name: 'network-error' })
          }
        })
      },
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: to => {
        return {path: '/events/' + to.params.afterEvent}
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})


router.beforeEach( () => {
  NProgress.start();
})

router.afterEach( () => {
  NProgress.done()
})
export default router
