import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkMovie';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCzrsbm1R-ZzC8p9H4K0XUN8GSlQ4WGBpw",
      authDomain: "checkmovies-414e0.firebaseapp.com",
      projectId: "checkmovies-414e0",
      storageBucket: "checkmovies-414e0.appspot.com",
      messagingSenderId: "863103484996",
      appId: "1:863103484996:web:7118138e8e4932efba2811",
      measurementId: "G-GK2882C9GY"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
