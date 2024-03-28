import { createAsyncThunk } from "@reduxjs/toolkit";



export const getProducts= createAsyncThunk(

    "getProducts",

   ()=>{

    //browser native api=>fetch

    /*
   promise is the js way of doing async stuff or avoiding callback hell
  
    doingATaskWhichTakes2Mins()


     let s= await doingATaskWhichTakes2MIns().then(data=>console.log(data)).error(err=>console.log(err))

     let d= await doingBTaskWhichTakes1Min()

  

    */
  let products= fetch(process.env.REACT_APP_API_URL+"/getProducts").then(res=>res.json());
      return products;
   }
);



