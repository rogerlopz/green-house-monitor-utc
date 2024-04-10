import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const index = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/luminosity/:sensorId',
      name: 'luminosity',
      component: () => import('../views/LuminosityView.vue')
    },
    {
      path: '/barometric-pressure/:sensorId',
      name: 'barometric-pressure',
      component: () => import('../views/BarometricPressureView.vue')
    },
    {
      path: '/co2-levels/:sensorId',
      name: 'co2-levels',
      component: () => import('../views/CO2LevelsVIew.vue')
    },
    {
      path: '/soil-temperature/:sensorId',
      name: 'soil-temperature',
      component: () => import('../views/BarometricPressureView.vue')
    },
    {
      path: '/soil-moisture/:sensorId',
      name: 'soil-moisture',
      component: () => import('../views/BarometricPressureView.vue')
    }
  ]
})

export default index
