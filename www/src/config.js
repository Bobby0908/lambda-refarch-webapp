// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6rnjf21ob8aue2gi58ke6ub74e",     // CognitoClientID
  "api_base_url": "https://8d38xm9btg.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-demoappstack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1bt7vbls8jxrt.amplifyapp.com"                                      // AmplifyURL
};

export default config;
