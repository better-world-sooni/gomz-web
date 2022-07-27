// @ts-nocheck
import { useEffect, useState } from "react"
import getConfig from 'next/config'
import { alertModalAction } from "src/store/reducers/modalReducer"
import { useDispatch } from "react-redux"

const { publicRuntimeConfig } = getConfig()
const klaytn = typeof window !== "undefined" && typeof window.klaytn !== "undefined" ? window.klaytn : null

export const useKaikas = () => {
    const [kaikas, setKaikas] = useState<any>(null)
    const dispatch = useDispatch()
    const alertChangeChain = () => dispatch(alertModalAction({ enabled: true }));

    useEffect(() => {
        // if(klaytn){
        //     if(!publicRuntimeConfig.CONF_IS_DEVELOPMENT){
        //         if(klaytn.networkVersion == '8217'){
        //             setKaikas(klaytn)
        //             klaytn?.on('accountsChanged', function(accounts) {
        //                 setKaikas({...klaytn, selectedAddress: accounts[0]})
        //             })
        //         } else {
        //             alertChangeChain()
        //         }
        //     } else {
        //         setKaikas(klaytn)
        //         klaytn?.on('accountsChanged', function(accounts) {
        //             setKaikas({...klaytn, selectedAddress: accounts[0]})
        //         })
        //     }
        // }
        setKaikas(klaytn)
                    klaytn?.on('accountsChanged', function(accounts) {
                        setKaikas({...klaytn, selectedAddress: accounts[0]})
                    })
    }, [typeof window, klaytn, klaytn?._kaikas.isEnabled(), klaytn?.selectedAddress])
    return kaikas
}