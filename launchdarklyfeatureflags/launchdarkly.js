import LDClient from 'launchdarkly-react-native-client-sdk';


let client = new LDClient();
let config = {
    mobileKey: 'mobile key'
};
let user = {key: 'fake@example.com'};
await client.configure(config, user);