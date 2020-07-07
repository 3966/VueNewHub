import Vue from "vue";
import Router from "vue-router";
import defaultPage from "@/layout/default.vue";
import dashBoard from "@/components/dashboard.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "default",
      component: defaultPage,
      children: [
        {
          path: "/",
          name: "dashboard",
          component: dashBoard
        },
        {
          path: "/accessPrivilege",
          name: "PriviLege",
          component: () => import("@/components/privilege.vue")
        },
        {
          path: "/masterSetup",
          name: "masterSetup",
          component: () => import("@/components/master-setup.vue"),
          redirect(to) {
            return {
              name: "database"
            };
          },
          children: [
            {
              path: "/masterSetup/database",
              name: "database",
              component: () => import("@/components/master-setup/database.vue")
            },
            {
              path: "/masterSetup/profile",
              name: "profile",
              component: () => import("@/components/master-setup/profile.vue")
            },
            {
              path: "/masterSetup/email",
              name: "email",
              component: () => import("@/components/master-setup/email.vue")
            },
            {
              path: "/masterSetup/event",
              name: "event",
              component: () => import("@/components/master-setup/event.vue")
            },
            {
              path: "/masterSetup/survey",
              name: "survey",
              component: () => import("@/components/master-setup/survey.vue")
            },
            {
              path: "/masterSetup/campaign",
              name: "campaign",
              component: () => import("@/components/master-setup/campaign.vue")
            }
          ]
          // redirect:'/masterSetup/database',
        }
      ]
    },
    {
      path: "/login",
      name: "blank",
      component:()=> import ("@/layout/blank.vue"),
      children: [
        {
          path: "/",
          name: "login",
          component: () => import ("@/page/login.vue")
        },
        {
          path: "register",
          name: "register",
          component: () => import ("@/page/register.vue")
        }  
      ]
    }
  ]
});
