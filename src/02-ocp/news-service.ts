
/**
 * VIOLACIÓN AL PRINCIPIO DE ABIERTO/CERRADO (OCP)
 * 
 * En este módulo de noticias de la reserva, el servicio depende directamente
 * de la librería externa 'axios'. Si quisiéramos usar 'fetch' u otra librería,
 * tendríamos que modificar este código interno.
 */

import axios from 'axios';

export interface HTTPClientService {
    get(url: string): Promise<any>
}

export class AxiosHTTPClientService implements HTTPClientService {
    async get(url: string): Promise<any> {
        return (await axios.get(url)).data;
    }
}

export class NewsService {

    // VIOLACIÓN: Dependencia rígida de axios.get()
    // Si la API cambia o queremos cambiar de cliente HTTP, este código debe "abrirse" para modificación.
    async getLatestNews() {
        console.log('Obteniendo noticias de la reserva biológica...');

        const httpService = new AxiosHTTPClientService();

        return httpService.get('https://jsonplaceholder.typicode.com/posts');
    }

}

export class PhotosService {

    async getGallery() {
        const httpService = new AxiosHTTPClientService();

        return httpService.get('https://jsonplaceholder.typicode.com/photos');
    }

}
