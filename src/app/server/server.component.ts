import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    allowCreateServer: boolean = false;
    providedServerName = '';
    createServerMessage: string = 'No Server was Created.';
    serverStatus: number = 200;
    serverMessage: string = 'Success';    
    getServerStatus() {
        return this.serverStatus;
    }
    onCreateServer() {
        this.createServerMessage = 'Server is created! Name is ' + this.providedServerName;
    }
    onUpdatingName(event: Event) {
        this.providedServerName = (<HTMLInputElement>event.target).value;
    }
   /*Constructor method is the method that is executed at the time of component creation */
    constructor(){
    setTimeout(()=>{
        this.allowCreateServer = true;
    } ,2000);
    console.log("After settimeout" + JSON.stringify(this));
    }

}