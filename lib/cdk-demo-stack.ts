import * as cdk from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'MainVpc', {
      // number of Availability Zones (AZs) to use
      maxAzs: 2,

      // define a single subnet configuration per AZ
      subnetConfiguration: [
        {
          // subnet mask 255.255.255.0
          cidrMask: 24,
          // name for each of these subnets
          name: 'public-subnet',
          // subnet type to be used
          subnetType: SubnetType.PUBLIC,
        },
      ],
    });
  }
}
