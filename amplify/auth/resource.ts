import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      // google: {
      //   clientId: secret('470953570605-und1qach8tq1m5g2393doi9okvq4l1ue.apps.googleusercontent.com'),
      //   clientSecret: secret('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')
      // },
      // signInWithApple: {
      //   clientId: secret('SIWA_CLIENT_ID'),
      //   keyId: secret('SIWA_KEY_ID'),
      //   privateKey: secret('SIWA_PRIVATE_KEY'),
      //   teamId: secret('SIWA_TEAM_ID')
      // },
       loginWithAmazon: {
         clientId: secret('amazonClientId'),
         clientSecret: secret('amazonClientSecret'),
         scopes: ['email']
       },
      // facebook: {
      //   clientId: secret('FACEBOOK_CLIENT_ID'),
      //   clientSecret: secret('FACEBOOK_CLIENT_SECRET')
      // },
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://main.d3dicbp24kdxbr.amplifyapp.com/profile'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://main.d3dicbp24kdxbr.amplifyapp.com/'],
    },
    email: true
  }
});
