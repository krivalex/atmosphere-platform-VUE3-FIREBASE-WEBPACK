import { createRouter, createWebHistory } from 'vue-router'

const PythonTurtle = () => import('@/pages/PythonTurtle.vue')
const TestCourse = () => import('@/pages/TestCourse.vue')
const SiteTrial = () => import('@/pages/SiteTrial.vue')
const MainPresent = () => import('@/pages/MainPresent.vue')
const FirstView = () => import('@/pages/FirstView.vue')
const Result = () => import('@/pages/ResultPage.vue')
const Scratch = () => import('@/pages/ScratchPage.vue')
const Design3D = () => import('@/pages/Design3D.vue')
const Figma = () => import('@/pages/FigmaPage.vue')

const NotFound = () => import('@/pages/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'first-view',
    component: FirstView,
  },
  {
    path: '/present',
    name: 'present',
    component: MainPresent,
  },
  {
    path: '/test',
    name: 'test',
    component: TestCourse,
  },
  {
    path: '/turtle',
    name: 'turtle',
    component: PythonTurtle,
  },
  {
    path: '/site',
    name: 'site',
    component: SiteTrial,
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
  },
  {
    path: '/scratch',
    name: 'scratch',
    component: Scratch,
  },
  {
    path: '/design3D',
    name: 'design3D',
    component: Design3D,
  },
  {
    path: '/figma',
    name: 'figma',
    component: Figma,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
