import { IRootState } from "@/libs/store";
import { increment, decrement, reset, incrementByAmount } from "@/libs/slice";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
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
   container 
   px-4 
   md:px-8 
   flex-grow 
   flex 
   flex-col 
   justify-center
   items-center
   min-h-screen
   gap-8
  "
  >
   <h1
    className="
   text-3xl 
   font-bold
   text-center
   "
   >
    Counter using Redux Toolkit
   </h1>
   <div
    className="
    w-1/4 py-1 px-3 dark:bg-zinc-200 dark:text-zinc-800 font-semibold rounded-md border-zinc-800 border-[0.5px] shadow-md dark:shadow-zinc-700
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
     variant={"outline"}
     onClick={() => dispatch(increment())}
     type="button"
    >
     ( + )
    </Button>

    <Button
     variant={"outline"}
     onClick={() => dispatch(decrement())}
     type="button"
    >
     ( - )
    </Button>
   </div>
   <div
    className="
   w-full 
   flex
   gap-4 
   justify-center
   "
   >
    <Button variant={"outline"} onClick={() => dispatch(reset())} type="button">
     ( Reset )
    </Button>
    <Button
     variant={"outline"}
     onClick={() => dispatch(incrementByAmount(100))}
     type="button"
    >
     ( + 100 )
    </Button>
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
      className="w-1/4 py-1 px-3 dark:bg-zinc-200 dark:text-zinc-800 font-semibold rounded-md border-zinc-800 border-[0.5px] shadow-md dark:shadow-zinc-700"
      value={value}
      onChange={(e) => {
       if (!e.target.value) return setValue("");

       setValue(String(e.target.value));
      }}
     />
     <Button variant={"outline"} type="submit">
      Add ( + Your input value )
     </Button>
    </form>
   </div>
   <div
    className="
   justify-center
   "
   >
    <h1
     className="
   text-3xl 
   font-bold
   text-center
   "
    >
     Theme light, dark, system using context & custom hooks
    </h1>
    <ModeToggle />
   </div>
  </div>
 );
};

export default Counter;
