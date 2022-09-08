export interface TestAccount {
    alias: string;
    account: string;
    privateKey: string;
}
const accounts: TestAccount[] = [
    {
        alias: 'account-1',
        account: 'account address',
        privateKey: 'pk'
    },
    {
        alias: 'account-2',
        account: 'account address',
        privateKey: 'pk'
    },
    {
        alias: 'account-3',
        account: 'account address',
        privateKey: 'pk'
    },
];

export default accounts;