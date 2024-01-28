import type { SSTConfig } from 'sst';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';
import { SvelteKitSite } from 'sst/constructs';

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
	}
} satisfies SSTConfig;
