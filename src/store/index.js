/* 
创建store的入口文件 
*/

import { configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";

/*configureStore中内置了thunk中间件,以后不需要手动配置applyMiddleware了 */
export default configureStore({
  reducer: {
    counter,
  },
});
