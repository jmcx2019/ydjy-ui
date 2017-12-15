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
          name: 'AboutCompanyIntroduction'
        },
        {
          path: 'advantage',
          name: 'AboutCompanyAdvantage'
        },
        {
          path: 'teacher',
          name: 'AboutCompanyTeacher'
        },
        {
          path: 'student',
          name: 'AboutCompanyStudent'
        },
        {
          path: 'classroom',
          name: 'AboutCompanyClassroom'
        },
        {
          path: 'contact',
          name: 'AboutCompanyContact'
        }
      ]
    },
    {
      path: '/art-exam',
      name: 'ArtExam',
      component: ArtExam,
      children: [
        {
          path: 'media',
          name: 'ArtExamMedia',
          children: [
            {
              path: 'introduction',
              name: 'ArtExamMediaIntroduction'
            },
            {
              path: 'advantage',
              name: 'ArtExamMediaAdvantage'
            },
            {
              path: 'admission-score',
              name: 'ArtExamMediaAdmissionScore'
            },
            {
              path: 'broadcast',
              name: 'ArtExamMediaBroadcast'
            },
            {
              path: 'editor',
              name: 'ArtExamMediaEditor'
            },
            {
              path: 'performance',
              name: 'ArtExamMediaPerformance'
            },
            {
              path: 'photography',
              name: 'ArtExamMediaPhotography'
            },
            {
              path: 'university',
              name: 'ArtExamMediaUniversity'
            }
          ]
        },
        {
          path: 'art',
          name: 'ArtExamArt',
          children: [
            {
              path: 'introduction',
              name: 'ArtExamArtIntroduction'
            },
            {
              path: 'advantage',
              name: 'ArtExamArtAdvantage'
            },
            {
              path: 'subject',
              name: 'ArtExamArtSubject'
            },
            {
              path: 'university',
              name: 'ArtExamArtUniversity'
            }
          ]
        },
        {
          path: 'middle',
          name: 'ArtExamMiddle',
          children: [
            {
              path: 'introduction',
              name: 'ArtExamMiddleIntroduction'
            },
            {
              path: 'advantage',
              name: 'ArtExamMiddleAdvantage'
            },
            {
              path: 'subject',
              name: 'ArtExamMiddleSubject'
            }
          ]
        }
      ]
    },
    {
      path: '/train-class',
      name: 'TrainClass',
      component: TrainClass,
      children: [
        {
          path: 'media',
          name: 'TrainClassMedia'
        },
        {
          path: 'art',
          name: 'TrainClassArt'
        }
      ]
    },
    {
      path: '/learning-progress',
      name: 'LearningProgress',
      component: LearningProgress
    },
    {
      path: '/study-abroad',
      name: 'StudyAbroad',
      component: StudyAbroad,
      children: [
        {
          path: 'introduction',
          name: 'StudyAbroadIntroduction'
        },
        {
          path: 'advantage',
          name: 'StudyAbroadAdvantage'
        },
        {
          path: 'country',
          name: 'StudyAbroadCountry'
        },
        {
          path: 'art',
          name: 'StudyAbroadArt'
        },
        {
          path: 'exchange',
          name: 'StudyAbroadExchange'
        },
        {
          path: 'training',
          name: 'StudyAbroadTraining'
        }
      ]
    }
  ]
})
