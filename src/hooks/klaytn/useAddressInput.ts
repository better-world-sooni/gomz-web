import { useState } from "react";
import { useCaver } from "./useCaver";

export default function useAddressInput(){
    const caver = useCaver()
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const handleAddressInput = ({target: {value}}) => {
        console.log(value)
        if(!caver.utils.isAddress(value)){
            setError("Input is not a valid address.")
        } else {
            setError("")
        }
        setAddress(value)
    }

    return { address, handleAddressInput, error}
}