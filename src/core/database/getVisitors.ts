export async function getVisitorCount(): Promise<number> {
    const visitorRef = firesto.collection('visitors').doc('count');
    const visitorDoc = await visitorRef.get();

    if (visitorDoc.exists) {
        return visitorDoc.data().count;
    } else {
        await visitorRef.set({ count: 0 });
        return 0;
    }
}

export async function incrementVisitorCount(): Promise<void> {
    const visitorRef = firestore.collection('visitors').doc('count');
    await visitorRef.update({ count: firestore.FieldValue.increment(1) });
}