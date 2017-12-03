import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'
import AboutCompany from '@/components/AboutCompany'
import ArtExam from '@/components/ArtExam'
import TrainClass from '@/components/TrainClass'
import LearningProgress from '@/components/LearningProgress'
import StudyAbroad from '@/components/StudyAbroad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about-company',
      name: 'AboutCompany',
      component: AboutCompany,
      children: [
        {
          path: 'introduction',
          name: 'AboutCompanyIntroduction',
          component: AboutCompany
        },
        {
          path: 'advantage',
          name: 'AboutCompanyAdvantage',
          component: AboutCompany
        },
        {
          path: 'teacher',
          name: 'AboutCompanyTeacher',
          component: AboutCompany
        },
        {
          path: 'student',
          name: 'AboutCompanyStudent',
          component: AboutCompany
        },
        {
          path: 'classroom',
          name: 'AboutCompanyClassroom',
          component: AboutCompany
        },
        {
          path: 'contact',
          name: 'AboutCompanyContact',
          component: AboutCompany
        }
      ]
    },
    {
      path: '/art-exam',
      name: 'ArtExam',
      component: ArtExam
    },
    {
      path: '/train-class',
      name: 'TrainClass',
      component: TrainClass
    },
    {
      path: '/learning-progress',
      name: 'LearningProgress',
      component: LearningProgress
    },
    {
      path: '/study-abroad',
      name: 'StudyAbroad',
      component: StudyAbroad
    }
  ]
})
