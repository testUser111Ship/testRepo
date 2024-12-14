#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AccountTestCdkStack } from '../lib/account_test_cdk-stack';

const app = new cdk.App();
new AccountTestCdkStack(app, 'AccountTestCdkStack', {

   env: { account: '185501288575', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});