import 'mocha';
import { expect } from 'chai';
import functions from 'firebase-functions-test';
import { addSuperAdmin } from '../../src/admin/index'

describe('Admin', () => {

    let wrapped: any;
    const testEnv = functions({
        projectId: "promote-api",
    }, '../../service-account.json');

    before(() => {
        wrapped = testEnv.wrap(addSuperAdmin);
    });

    it('should thow when the user has not been registerd', async () => {

        let body = {
            data: {
                email: "dpchowdary@gmail.com"
            }
        };

        let result = await wrapped(body);

        expect(result.message).to.be.equal('Unable to add Super Admin role to the user.')
    });
});