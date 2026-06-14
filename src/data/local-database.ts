
/**
 * DATA PROVIDER ACUPLADO
 */

export interface DatabaseService {
    getFakePosts(): Promise<Array<{id: number, title: string, body: string}>>;
}

export class LocalDatabaseService implements DatabaseService {
    async getFakePosts() {
        return [
            { id: 1, title: 'Avistamiento de Jaguar', body: 'Se reportó un jaguar cerca del río.' },
            { id: 2, title: 'Nuevas Orquídeas', body: 'Han florecido las especies raras en el jardín botánico.' }
        ];
    }
}

export class JsonDatabaseService implements DatabaseService  {
    async getFakePosts() {
        return [
            { id: 1, title: 'JSON Post 1', body: 'Contenido desde JSON' }
        ];
    }
}
