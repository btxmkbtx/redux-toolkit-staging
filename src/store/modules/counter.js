import { createSlice } from "@reduxjs/toolkit";

/* RTK把一个个reducer定义为状态切片的概念，创建一个reducer就是创建一个State Slice(状态切片) */
const counter = createSlice({
  /* name:命名空间。
    dispatch呼叫action时，name值会作为action type的前缀自动追加上去，
    以此避免action type的命名冲突。
    */
  name: "np_counter",
  /* 状态切片初始值 */
  initialState: {
    count: 0,
  },
  /* reducers有两个作用:
        1. 定义reducer更新状态的函数
        2. 定义dispatch中使用的action函数
    可见RTK把过去要分开写的reducer与action内部整合到了一起
  */
  reducers: {
    //需求上如果没有负载参数，那么可以省略第二个参数action
    add(state) {
      console.log(state);
      console.log("修改前的count:" + state.count);
      /*因为内置了immutable，所以内部并没有直接修改原始数据，
      只是看起来像在修改原始数据而已，基于数据不可变的思想依然保留着 */
      state.count++;
      //这里发现状态的修改不再是异步得了
      console.log("修改后的count:" + state.count);
    },
    //有负载的情况下action中参数物理名默认为payload
    sub(state, action) {
      console.log("sub的payload:" + action.payload);
      state.count = state.count - action.payload;
    },
  },
});

// 导出action函数，每一个更新状态的reducer函数都需要从action中解构导出，为了在组件中dispatch使用
export const { add, sub } = counter.actions;

/*定义异步action
异步action的概念没有发生改变
异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
*/
export const subAsync = (payload, time) => {
  console.log("异步action执行前payload:" + payload);
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(sub(payload));
    }, time);
  };
};

// 导出reducer用于创建store
export default counter.reducer;
