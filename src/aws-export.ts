const awsconfig = {
  aws_project_region: 'us-east-2',  // Replace with your own region
  aws_cognito_region: 'us-east-2',
  aws_user_pools_id: 'us-east-2_Be5Plq3DE',            // Add your own user-pool-id
  aws_user_pools_web_client_id: '6ri4adcqet1aj1t94fovklorsc', // Add your own client-id
  oauth: {
    domain: 'benefitsapp-applicant.auth.us-east-2.amazoncognito.com/',    // Add your own domain-url
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin'
    ],
    redirectSignIn: 'https://d1yjoyh4fh2a9u.cloudfront.net',    // Add your own redirect sign-in url
    redirectSignOut: 'https://d1yjoyh4fh2a9u.cloudfront.net',   // Add your own redirect sign-out url
    responseType: 'code'
  }
};

export default awsconfig;
