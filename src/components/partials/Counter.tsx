import { IRootState } from "../../libs/store";
import {
 increment,
 decrement,
 reset,
 incrementByAmount,
} from "../../libs/slice";
import Button from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Counter = () => {
 const counter = useSelector((state: IRootState) => state.counterSlice.count);
 const dispatch = useDispatch();
 const [value, setValue] = React.useState(`${counter}`);

 console.log("selector:", counter);
 return (
  <div
   className="
  w-full 
  flex 
  flex-col 
  font-mono 
  justify-center 
  items-center 
  min-h-screen 
  space-y-8 
  bg-zinc-200
  "
  >
   <h1
    className="
   text-3xl 
   font-bold
   "
   >
    Counter using Redux Toolkit
   </h1>
   <div
    className="
   w-1/4 bg-white 
   p-2 
   rounded-md 
   border-zinc-800 
   border-[0.5px] 
   shadow-md
   "
   >
    <p>Count: {counter}</p>
   </div>
   <div
    className="
   w-full 
   flex 
   flex-row-reverse 
   gap-4 
   justify-center
   "
   >
    <Button
     text="Increment (+)"
     onClick={() => dispatch(increment())}
     type="button"
    />
    <Button
     text="Decrement (-)"
     onClick={() => dispatch(decrement())}
     type="button"
    />
   </div>
   <div
    className="
   w-full 
   flex
   gap-4 
   justify-center
   "
   >
    <Button text="Reset (0)" onClick={() => dispatch(reset())} type="button" />
    <Button
     text="Add (100)"
     onClick={() => dispatch(incrementByAmount(100))}
     type="button"
    />
   </div>
   <div
    className="
   w-full 
   flex
   flex-col
   justify-center
   "
   >
    <h3 className="text-lg text-center">Add with your amount number</h3>
    <form
     action=""
     className="flex flex-row justify-center gap-2"
     onSubmit={(e) => {
      e.preventDefault();
      dispatch(incrementByAmount(parseInt(value)));
     }}
    >
     <input
      type="number"
      className="w-1/4 bg-white p-2 rounded-md border-zinc-800 border-[0.5px] shadow-md"
      value={value}
      onChange={(e) => {
       if (!e.target.value) return setValue("");

       setValue(String(e.target.value));
      }}
     />
     <Button text="Add" type="submit" />
    </form>
   </div>
  </div>
 );
};

export default Counter;
