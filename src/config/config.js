const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwrtieProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwrtieDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwrtieCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwrtieBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default config