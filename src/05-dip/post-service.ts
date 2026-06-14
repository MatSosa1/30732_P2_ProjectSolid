
/**
 * VIOLACIÓN AL PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS (DIP)
 * 
 * El servicio de publicaciones depende de una implementación concreta
 * en lugar de una abstracción.
 */

import { DatabaseService } from '../data/local-database';

export class PostService {
    private posts: any[] = [];

    constructor(private dbService: DatabaseService) {};

    async getPosts() {
        this.posts = await this.dbService.getFakePosts();

        return this.posts;
    }
}
