export enum MintingStep {
    Initial = 0,
    Whitelist = 1,
    Whitelist2 = 2,
    WhitelistPresale = 3,
    Public = 4,
    Rebirth = 5,
    Stable = 6
}
export type AddressState = {
    amountMinted: number,
    whitelisted: boolean,
}

export const MAX_SUPPLY = 8888;
export const POST_WHITELIST_PRESALE_SUPPLY = 4888;
export const POST_WHITELIST2_SUPPLY = 888;
export const POST_WHITELIST_SUPPLY = 88;
export const POST_INITIALIZE_SUPPLY = 8;
export const MAX_MINT = 5;
export const WHITELIST_MAX_MINT = 1;