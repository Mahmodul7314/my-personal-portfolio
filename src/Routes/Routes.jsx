import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";
import  Portfolio from "../Pages/Portfolio/Portfolio";
import Education from "../Pages/Education/Education";
import Contact from "../Pages/Contact/Contact";
// import DownloadCV from "../Pages/DownloadCV/DownloadCV";
import AboutMe from "../Pages/About/AboutMe";
const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
     children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/#aboutme",
            element:<AboutMe></AboutMe>
        },
        {
            path:"/#skills",
            element:<Skills></Skills>
        },
        {
            path:"/#portfolio",
            element:<Portfolio></Portfolio>
        },
        {
            path:"/#education",
            element:<Education></Education>
        },
        {
            path:"/#contact",
            element:<Contact></Contact>
        },
        // {
        //     path:"/https://drive.google.com/file/d/1-cLRW6NCRn5ZZcll_U-zajAG-K3LQtEH/view?usp=drive_link",
        //     element:<DownloadCV></DownloadCV>
        // },
     ]
    },
  ]);

  export default router;