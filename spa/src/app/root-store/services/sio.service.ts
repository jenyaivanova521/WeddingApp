import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

export class SioService {
    private socket;

    init(roomName) {
        this.socket = io.connect(environment.sioUrl);
        this.socket.emit('join', roomName);
    }

    getSocket() {
        return this.socket;
    }

    getNotifications() {
        let observable = new Observable(observer => {
            this.socket.on('notification', (data) => {
                observer.next(data);
            });
        })
        return observable;
    }

    getMessages() {
        let observable = new Observable(observer => {
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            // return () => {
            //     this.socket.disconnect();
            // };
        })
        return observable;
    }

}
