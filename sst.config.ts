import type { SSTConfig } from 'sst';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';
import { SvelteKitSite } from 'sst/constructs';
import { RemovalPolicy } from 'aws-cdk-lib/core';

export default {
	config(_input) {
		return {
			name: 'personal-blog',
			region: 'us-east-1'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const certificate = new Certificate(this, 'Certificate', {
				domainName: '*.penner.me',
				subjectAlternativeNames: ['penner.me'],
				validation: CertificateValidation.fromDns()
			});
			if (stack.stage === 'prod') {
				certificate.applyRemovalPolicy(RemovalPolicy.RETAIN);
			}

			const site = new SvelteKitSite(stack, 'site', {
				customDomain: {
					domainName: 'penner.me',
					isExternalDomain: true,
					cdk: {
						certificate
					}
				}
			});

			stack.addOutputs({
				url: site.url
			});
		});

		app.setDefaultRemovalPolicy('destroy');
	}
} satisfies SSTConfig;
