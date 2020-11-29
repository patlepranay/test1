import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const LOCAL_URL = environment.localEnv;
const GLOBAL_URL = environment.globalEnv;
const URL=LOCAL_URL;



@Injectable({providedIn:"root"})
export class HomeService{
    constructor(private http:HttpClient){}


    getMessage()
    {
      return this.http
      .post(URL + "/messages", "request");
      
    }

    sendMessage(name:string,email:string,subject:string,message:string){
        const messageObj={name:name,email:email,subject:subject,message:message}
        this.http
        .post(URL + "/message/request", messageObj)
        .subscribe(responseData => {
          console.log(responseData);
        });
    }

}