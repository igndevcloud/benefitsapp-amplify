import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret('googleClientId'),
        clientSecret: secret('googleClientSecret')
      },
      // signInWithApple: {
      //   clientId: secret('SIWA_CLIENT_ID'),
      //   keyId: secret('SIWA_KEY_ID'),
      //   privateKey: secret('SIWA_PRIVATE_KEY'),
      //   teamId: secret('SIWA_TEAM_ID')
      // },
      // loginWithAmazon: {
      //   clientId: secret('LOGINWITHAMAZON_CLIENT_ID'),
      //   clientSecret: secret('LOGINWITHAMAZON_CLIENT_SECRET')
      // },
      // facebook: {
      //   clientId: secret('FACEBOOK_CLIENT_ID'),
      //   clientSecret: secret('FACEBOOK_CLIENT_SECRET')
      // },
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://mywebsite.com/profile'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://mywebsite.com'],
    }
  }
});

//Google client id - 470953570605-und1qach8tq1m5g2393doi9okvq4l1ue.apps.googleusercontent.com
//Google client secret - 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
