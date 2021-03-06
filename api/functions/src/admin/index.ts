import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.cert(require('../../../functions/service-account.json'))
});

export const addSuperAdmin = functions.https.onCall(async (data, context) => {

    try {
        const user = await admin.auth().getUserByEmail(data.email);
        
        await admin.auth().setCustomUserClaims(user.uid, {
            superAdmin:true
        });
    
        return {
            message: `Super Admin role has been added to the user '${data.email}'.`
        }
        
    } catch (error) {
        return {
            message: `Unable to add Super Admin role to the user '${data.email}'.`,
            error
        }
    }
});