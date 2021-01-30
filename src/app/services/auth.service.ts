import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
  export class AuthService {

    data = [];

    constructor(
      private http: HttpClient,
      private env: EnvService
    ) 
    
    { }

    // REGISTER AS ADMIN
    register(username: string, fullname: string, email: string, password: string, job: string, phone: string) {
      var body = {
        username: username,
        fullname: fullname,
        email: email,
        password:password,
        job:job,
        phone:phone
      } 
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/adminregister.php', JSON.stringify(body));
    }

    //LOGIN AS ADMIN
    login(username: string, password: string) {
      var body = {
        username: username,
        password: password
      } 
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/loginid.php', JSON.stringify(body));
    }

    //ACCEPT AS ADMIN
  accept(fullname:string, username:string, email:string, password:string, phone:string, job:string) {
    var body = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      phone: phone,
      job: job
    }
    console.log('form input:',body);
    return this.http.post(this.env.API_URL + '/php/adminaccept.php', JSON.stringify(body));
  }

    //REJECT AS ADMIN
  reject(fullname:string, username:string, email:string, password:string, phone:string, job:string) {
    var body = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      phone: phone,
      job: job
    }
    console.log('form input:',body);
    return this.http.post(this.env.API_URL + '/php/adminreject.php', JSON.stringify(body));
  }

  //GET ADMIN LIST
  getAdmin(fullname:string, username:string, email:string, password:string, phone:string, job:string){
    var body = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      phone: phone,
      job: job
    }
    console.log('read request admin:',body);
    return this.http.get(this.env.API_URL + '/php/getadmin.php').subscribe(data => {
      this.data.push(data);
      console.log(data);
     
      
      }, 
      error => console.error(error));
      
  }

   // DAFTAR KUBUR
   insertKubur(userid: string, name: string, dob: string, dod: string, plot: string, location:string, latitude: string, longitude: string) {
    var body = {
      userid: userid,
      name: name,
      dob: dob,
      dod: dod,
      plot: plot,
      location: location,
      latitude: latitude,
      longitude: longitude
    } 
    console.log('form input:',body);
    return this.http.post(this.env.API_URL+ '/php/registerkubur.php', JSON.stringify(body));
  }

   //CORRECTION DATA KUBUR UNTUK LAPORAN DATA PAGE
   correctionkubur(nama:string, dob:string, dod:string, plot:string, corrnama:string, corrdob:string, corrdod:string, corrplot:string) {
    var body = {
      // userid: userid,
      nama: nama,
      dob: dob,
      dod: dod,
      plot: plot,
      corrnama: corrnama,
      corrdob: corrdob,
      corrdod: corrdod,
      corrplot: corrplot,
      // lat: lat,
      // long: long
    }
    console.log('form input:',body);
    return this.http.post(this.env.API_URL + '/php/requestupdate.php', JSON.stringify(body));
  }

    // MAKLUM BALAS
    feedback(q1: string, q2: string, q3: string, q4: string, q5: string, q6: string, q7: string, q8: string, q9: string, q10: string, q11: string, q12: string) {
      var body = {
        q1:q1,
        q2:q2,               
        q3:q3,
        q4:q4,
        q5:q5,
        q6:q6,
        q7:q7,
        q8:q8,
        q9:q9,
        q10:q10,
        q11:q11,
        q12:q12,
      } 
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/feedback.php', JSON.stringify(body));
    }

     //ACCEPT DAFTAR DATA KEMATIAN
     acceptkubur(userid:string, name:string, dob:string, dod:string, plot:string, latitude:string, longitude:string) {
      var body = {
        userid: userid,
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot,
        latitude:latitude,
        longitude:longitude
      }
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/acceptkubur.php', JSON.stringify(body));
    }

    //REJECT DAFTAR DATA KEMATIAN
    rejectkubur(userid:string, name:string, dob:string, dod:string, plot:string) {
      var body = {
        userid: userid,
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot
      }
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/rejectkubur.php', JSON.stringify(body));
    }

     //ACCEPT LAPORAN DATA KEMATIAN
     acceptlaporan(id:number,name:string, dob:string, dod:string, plot:string, corrname:string, corrdob:string, corrdod:string, corrplot:string,testkubur_id:number) {
      var body = {
        
        id: id,
        nama: name,
        corrnama: corrname,
        dob: dob,
        corrdob: corrdob,
        dod: dod,
        corrdod: corrdod,
        plot: plot,
        corrplot: corrplot,
        testkubur_id: testkubur_id
      }
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/correctionaccept.php', JSON.stringify(body));
    }

    //REJECT LAPORAN DATA KEMATIAN
    rejectlaporan(name:string, dob:string, dod:string, plot:string, corrname:string, corrdob:string, corrdod:string, corrplot:string,testkubur_id:number) {
      var body = {
        // userid: id,
        nama: name,
        dob: dob,
        dod: dod,
        plot: plot,
        corrnama: corrname,
        corrdob: corrdob,
        corrdod: corrdod,
        corrplot: corrplot,
        testkubur_id: testkubur_id
      }
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/correctionreject.php', JSON.stringify(body));
    }

    replyenq(name:string, email:string, enquiry:string, status:string) {
      var body = {
        name: name,
        email:email,
        enquiry:enquiry,
        status: status
  
      }
      console.log('form input:',body);
      return this.http.post(this.env.API_URL + '/php/replied.php', JSON.stringify(body));
    
    }

      // USER SUBMIT LAPORAN DATA-BLUM
      correction(nama:string,dob:string,dod:string,plot:string,corrnama:string,corrdob:string,corrdod:string,corrplot:string,id:number) {
        var body = {
          nama: nama,
          dob: dob,
          dod: dod,
          plot:plot,
          corrnama: corrnama,
          corrdob: corrdob,
          corrdod: corrdod,
          corrplot: corrplot,
          testkubur_id: id
          // latitude:latitude,
          // longitude:longitude
        } 
        console.log('form input:',body);
        return this.http.put(this.env.API_URL + '/php/userupdate.php', JSON.stringify(body));
      }

      
      // TANAH YANG TINGGAL
      tanahtinggal(area: string, luas: string, plot: string, tanah: string) {
        var body = {
          area: area,
          luas: luas,
          plot:plot,
          tanah: tanah
        } 
        console.log('form input:',body);
        return this.http.post(this.env.API_URL + '/php/tanahtinggal.php', JSON.stringify(body));
      }

      // JANGKA MASA SEBULAN
      jangkamasa(luastanah: string, matisebulan: string, area: string, masa: string) {
        var body = {
          area: area,
          luastanah: luastanah,
          matisebulan:matisebulan,
          masa: masa
        } 
        console.log('form input:',body);
        return this.http.post(this.env.API_URL + '/php/jangkapenuh.php', JSON.stringify(body));
      }
}
