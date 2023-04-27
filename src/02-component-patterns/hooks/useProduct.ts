import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs{
    product: Product;
    onChange?: (args: onChangeArgs) => void;   
    value?: number; 
};
//como el value puede ser nulo, lo inicializo en 0
export const useProduct = ( { onChange, product, value = 0 }:useProductArgs ) => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number)=>{
        console.log('is Controlled', isControlled.current);
        if (isControlled.current) {
            return onChange!({count: value, product}); // !le digo a ts que confie en mi, onChange siempre va a llegar
        }
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
      setCounter(value);
    }, [value])
    

    return{
        counter,
        increaseBy
    };
};
