import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import cors from 'cors';
import { Request, Response } from 'express';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://promote-api.firebaseio.com/'
}, 'employees');

const database = admin.firestore();
database.settings({ timestampsInSnapshots: true });

const handleCors = cors({ methods: 'GET', origin: true });


export const listEmployees = functions.https.onRequest((request, response) => {
    return handleCors(request, response, () => list(request, response));
});

const list = async (request: Request, response: Response) => {

    database.collection('users').doc('prasanna')
}
