import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {

  constructor(public http: HttpClient) { }

  /*postReg3(dataRegistro) {
    console.log(dataRegistro);
    let headers = new Headers();
    headers.append("Accept", "*");
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    let credentials = {
      name: dataRegistro.name,
      email: dataRegistro.email,
    };
    const url =
      "https://script.google.com/macros/s/AKfycbzgekKtENxcQYx2A2sVdNg28DbksXr6ZPhPV2PBV61ydhiHXfA/exec";

    // return this.http.post(url, JSON.stringify(credentials));
    /*  return this.http.post(url, JSON.stringify(name), {
      headers: headers,
    });
  }*/

  getTarifa() {
    let headers = new Headers();
    headers.append("Accept", "*");
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    return this.http.get("https://script.google.com/macros/s/AKfycbxVQ6FeaxxomgEOujAaTkVikHcW0vGSYXoALzB_wqNlcgefvwo/exec",
    );
  }


  postReg(dataRegistro) {
    let headers = new Headers();
    headers.append("Accept", "*");
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    var formData: any = new FormData();
    formData.append("nombres", dataRegistro.nombres);
    formData.append("apellidos", dataRegistro.apellidos);
    formData.append("telefono", dataRegistro.telefono);
    formData.append("email", dataRegistro.email);
    formData.append("horario", dataRegistro.horario);
    formData.append("alumno", dataRegistro.alumno);
    formData.append("nota", dataRegistro.nota);
    formData.append("lodp", dataRegistro.checkbox);
    formData.append("key", '1590-*-ac');

    return this.http.post(
      //  "https://script.google.com/macros/s/AKfycbyp9HMrWpm6G7OgiGq0Hxeckbid4N9qsE1G9v9D2_hr7vQJw-Ju/exec",
      "https://script.google.com/macros/s/AKfycbxVQ6FeaxxomgEOujAaTkVikHcW0vGSYXoALzB_wqNlcgefvwo/exec",
      formData,
    );
  }

}
