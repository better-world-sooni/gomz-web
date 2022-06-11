// @ts-nocheck
import { useEffect, useState } from "react"

const klaytn = typeof window !== "undefined" && typeof window.klaytn !== "undefined" ? window.klaytn : null

export const useKaikas = () => {
    const [kaikas, setKaikas] = useState<any>(null)

    useEffect(() => {
        setKaikas(klaytn)
        klaytn?.on('accountsChanged', function(accounts) {
            setKaikas({...klaytn, selectedAddress: accounts[0]})
        })
    }, [typeof window, klaytn, klaytn?._kaikas.isEnabled(), klaytn?.selectedAddress])
    return kaikas
}