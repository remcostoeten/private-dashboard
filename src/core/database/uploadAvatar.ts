// functions/src/uploadAvatar.ts

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { Storage } from '@google-cloud/storage'

// Initialize Firebase app
admin.initializeApp()

// Get Firebase Storage bucket from environment variable
const bucket = admin.storage().bucket(process.env.FIREBASE_STORAGE_BUCKET)

export const uploadAvatar = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'You must be authenticated to upload an avatar.',
    )
  }

  const file = data.file
  const userId = context.auth.uid
  const userName = data.userName

  if (!file || !userId || !userName) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Missing required data: file, userId, or userName.',
    )
  }

  const fileName = `${userId}/${userName}.jpg`
  const fileData = await file.arrayBuffer()

  await bucket.upload(fileName, fileData, {
    contentType: file.type,
    metadata: {
      cacheControl: 'public,max-age=31536000',
    },
  })

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`

  // Update user document with the new avatar URL
  await admin
    .firestore()
    .collection('users')
    .doc(userId)
    .update({ avatarUrl: publicUrl })

  return { publicUrl }
})
