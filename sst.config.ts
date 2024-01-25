import type { SSTConfig } from 'sst';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { SvelteKitSite } from 'sst/constructs';

const certArn =
	'arn:aws:acm:us-east-1:360597683419:certificate/127937f8-c344-4911-8342-f4333d154006';

export default {
	config(_input) {
		return {
			name: 'personal-blog',
			region: 'us-east-1'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new SvelteKitSite(stack, 'site', {
				customDomain: {
					domainName: 'penner.me',
					isExternalDomain: true,
					cdk: {
						certificate: Certificate.fromCertificateArn(stack, 'MyCert', certArn)
					}
				}
			});
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
