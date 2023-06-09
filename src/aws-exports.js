/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://uxd6fwyhvbezzgec3ym2d257ni.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_appsync_apiKey": "da2-l64zswxw5vhdhd5g5ujh6ztoee",
    "aws_cognito_identity_pool_id": "us-east-1:ec30ad60-0fad-4211-9786-aef59394b272",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_WWHze8FU3",
    "aws_user_pools_web_client_id": "29ru31maot1r9f73od6q0cm2fv",
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_cloud_logic_custom": [
        {
            "name": "sendEmailFunction",
            "endpoint": "https://2z4s9l513f.execute-api.us-east-1.amazonaws.com/prod", // API Gateway endpoint
            "region": "us-east-1", 
            "service": "execute-api",
            "custom_header": async () => { 
              return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
            }
        }
    ]
};


export default awsmobile;
