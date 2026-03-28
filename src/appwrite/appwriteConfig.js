import config from '../config/config.js'
import { Client, Databases, Storage, Query, ID } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwrtieProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.bucket);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwrtieDatabaseId,
                config.appwrtieCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwrtieDatabaseId,
                config.appwrtieCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.updateDocument(
                config.appwrtieDatabaseId,
                config.appwrtieCollectionId,
                slug
            )
            return true;
        }
        catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwrtieDatabaseId,
                config.appwrtieCollectionId,
                slug
            )
        }
        catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(queries = [Query.equal('status', 'active'), Query.limit(10)]) {
        try {
            return await this.databases.listDocuments(
                config.appwrtieDatabaseId,
                config.appwrtieCollectionId,
                queries
            )
        }
        catch (error) {
            throw error;
            return false;
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwrtieBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    // file delete service
    async deleteFile(fileId) {
        try {
            await this.bucket.createFile(
                config.appwrtieBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    // file preview service
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwrtieBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;