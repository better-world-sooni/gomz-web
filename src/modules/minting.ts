export enum MintingStep {
    Initial,
    WhitelistMint,
    PublicMint,
    Rebirth,
    Stable
}
export enum MintingState {
    Initial,
    Whitelisted,
    Invited
}
export type AddressState = {
    amountMinted: number,
    mintingState: MintingState,
    invitor: string
    inviteCount: number;
}