import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

// Sends email to user after signup
export const welcomeEmail = functions.auth.user().onCreate(user => {

    const msg = {
        to: user.email,
        from: 'gallelf123@gmail.com',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: 'Welcome to my awesome app!',
            name: user.displayName,
        },
    };

    return sgMail.send(msg);

});

// Emails the author when a new comment is added to a post
export const newComment = functions.firestore.document('tasks/{taskId}').onCreate( async (change, context) => {
// export const newComment = functions.firestore.document('posts/{postId}/comments/{commentId}').onCreate( async (change, context) => {

    // Read the post document
    const postSnap = await db.collection('tasks').doc(context.params.tasksId).get();
    // const postSnap = await db.collection('posts').doc(context.params.postId).get();

    // Raw Data
    const post = postSnap.data();
    const comment = change.data();

    // Email
    const msg = {
      to: 'ilthizzam@gmail.com',
      // to: post.authorEmail,
      from: "gallelf123@gmail.com",
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        subject: `New Comment on ${post.title}`,
        name: post.displayName,
        text: `${comment.user} said... ${comment.text}`
      }
    };

    // Send it
    return sgMail.send(msg);

});

