import React, { useReducer } from "react";

const fnChangeStateWeb41 = (state, action) => {
  // => Xu ly toan bo logic thay doi state ban dau => state moi cap nhat ui.
  // =>  Ban dau khong duoc goi toi, chi khi nao dung dispatch thi moi goi toi.
  // => state, action co san. 
  //    + state: gia tri state web41 ban dau
  //    + action: gia tri nhan duoc cua dispatch gui len

  console.log("state ban dau", state);
  console.log("action nhan tu dispatch", action);

  console.log(action.type);
  console.log(action.payload);
  console.log({...state});

  switch (action.type) {
    case 'UPDATE_COUNT':
      return {
        ...state, //Sao chep state ban dau: initialState
        count: state.count + action.payload, //Cap nhat lai cai state count.
        // state.count => gia tri ban dau count: 10
        // action.payload => gia tri minh gui len trong dispatch: 1
      }; 

    // case "ABCXYZ": 
    //  return;  
    default:
      return state;
  }
};

const ComponentUseReducer = () => {
  const initialState = {
    count: 10,
    name: "123"
  };
  const [web41, dispatch] = useReducer(fnChangeStateWeb41, initialState);
  // fnChangeStateWeb41: nhan gia tri state ban dau + gia tri tu dispatch gui len. => UPDATE STATE
  // dispatch: gui di tu ui 1 hanh dong + gia tri state can thay doi

  // console.log(web41);
  // Event handle count
  const handleChange = () => {
    dispatch({
      type: "UPDATE_COUNT",
      payload: 1,
    });
    // type, payload: la key object 
    // => type: dinh nghia hanh dong gui
    // => payload: gia tri kem theo hanh dong cua type 
    // Dispatch xong => gia tri + hanh dong => gui len reducer => fnChangeStateWeb41
  };

  return (
    <>
      <h1>{web41.count}</h1>
      <button onClick={handleChange}>Change ++</button>
    </>
  );
};

export default ComponentUseReducer;
