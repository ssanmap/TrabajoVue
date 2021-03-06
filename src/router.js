import vue from 'vue';
import Router from 'vue-router';


import Home from "@/views/Home";
import Cursos from "@/views/Cursos";
import CourseDetail from "@/views/CourseDetail";
import DetailCourse from "@/views/DetailCourse";
import NotFound from "@/views/NotFound";

vue.use(Router)

export default new Router({
    mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/cursos",
      name: "cursos",
      component: Cursos
    }
    ,

    {
      path: "/404",
      name: "notfound",
      component: NotFound
    },  
    { path: '*',
     redirect: '/404'
     },  
    

    {
      path: "/curso/:id",
      name: "course-detail",
      component: CourseDetail,
      props:{
        image:''
      }
    }

    ,

    {
      path: "/cursosd/:id",
      name: "detail-course",
      component: DetailCourse,
      
    }
  ]

})