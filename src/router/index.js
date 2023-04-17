import { createRouter, createWebHistory } from 'vue-router'

const PythonTurtle = () => import('@/pages/PythonTurtle.vue')
const TestCourse = () => import('@/pages/TestCourse.vue')
const SiteTrial = () => import('@/pages/SiteTrial.vue')
const MainPresent = () => import('@/pages/MainPresent.vue')
const FirstView = () => import('@/pages/FirstView.vue')
const Result = () => import('@/pages/ResultPage.vue')

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
