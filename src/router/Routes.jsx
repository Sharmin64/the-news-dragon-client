import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayouts from "../layouts/NewsLayouts";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: ()=> fetch('http://localhost:8000/news')
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader:({params})=>fetch(`http://localhost:8000/categories/${params.id}`)
      }
    ],
  },
  {
    path: 'news',
    element: <NewsLayouts></NewsLayouts>,
    children: [
      {
        path: ':id',
        element: <News></News>,
        loader: ({params})=> fetch(`http://localhost:8000/news/${params.id}`)
      }
    ]
  }
]);

export default router;
