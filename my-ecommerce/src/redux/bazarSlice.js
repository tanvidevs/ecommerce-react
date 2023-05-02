// import { createSlice } from '@reduxjs/toolkit';

// const  initialState ={
//     productData:[],
//     userInfo:null,
// };

// export const bazarSlice = createSlice({
//     name:"bazar",
//     initialState,
//     reducers:{
//         addToCart:(state,action)=>{
//             const item =state.productData.find((item)=>item._id===action.payload._id);
//             if(item){
//                 item.quantity +=action.payload.quantity;
//             }else{
//                 state.productData.push(action.payload);
//             }
            
//         },

//         export const bazarSlice = createSlice({
            
//             reducers:{
//                 addToCart:(state,action)=>{
//                 }
                    
//                 },
        
//         deLeteItem:(state.action)=>{
//             state.productData=state.productData.filter(
//                 (item)=item._id !== action.payload
//             );
//         },


//         resetCart: (state)=>{
//             state.productData=[];
//         },
//     },
// });




// export const {addToCart}=bazarSlice.actions;
// export default bazarSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: 'bazar',
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload._id);
      if (item) {
        // if the item already exists in the cart, increase its quantity
        item.quantity += action.payload.quantity;
      } else {
        // if the item is not in the cart, add it
        state.productData.push(action.payload);
      }
    },
    // Delete item from cart
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(item => item._id !== action.payload);
    },
    // Reset cart to empty
    resetCart: state => {
      state.productData = [];
    },
    increamentQuantity:(state,action)=>{
        const item=state.productData.find(
            (item)=> item._id ===action.payload._id 
        );
        if(item){
            item.quantity++;
        }
    },
    decrementQuantity:(state,action)=>{
        const item=state.productData.find(
            (item)=> item._id ===action.payload._id 
        );
        if(item.quantity===1){
            item.quantity=1;

        }else{
            item.quantity--;
        }
    },
  },
});

// Export the actions and the reducer
export const { addToCart, deleteItem, resetCart,increamentQuantity,decrementQuantity } = bazarSlice.actions;
export default bazarSlice.reducer;
