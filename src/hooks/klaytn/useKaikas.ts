// @ts-nocheck
import { useEffect, useState } from "react"
import getConfig from 'next/config'
import { alertModalAction } from "src/store/reducers/modalReducer"
import { useDispatch } from "react-redux"
import { setCookie } from "src/modules/cookieHelper"
import { selectedAddressAction } from "src/store/reducers/klaytnReducer"

const klaytn = typeof window !== "undefined" && typeof window.klaytn !== "undefined" ? window.klaytn : null

export const useKaikas = () => {
    const [kaikas, setKaikas] = useState<any>(null)
    const dispatch = useDispatch()
    const alertChangeChain = () => dispatch(alertModalAction({ enabled: true }));

    useEffect(() => {
        if(klaytn?.networkVersion == '8217'){
            setKaikas(klaytn)
            dispatch(selectedAddressAction({selectedAddress: klaytn?.selectedAddress}))
            klaytn?.on('accountsChanged', function(accounts) {
                setKaikas({...klaytn, selectedAddress: accounts[0]})
                dispatch(selectedAddressAction({selectedAddress: klaytn?.selectedAddress}))
            })
        } else {
            alertChangeChain()
        }
    }, [typeof window, klaytn, klaytn?._kaikas.isEnabled(), klaytn?.selectedAddress])

    return kaikas
}