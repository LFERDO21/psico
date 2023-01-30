// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
apiKey: "AIzaSyBC3BDkCwT8VPomC2MjzC1tFPVPs22pZmg",
  authDomain: "proyectoautentificar.firebaseapp.com",
  projectId: "proyectoautentificar",
  storageBucket: "proyectoautentificar.appspot.com",
  messagingSenderId: "600984865831",
  appId: "1:600984865831:web:7d0f06859005b5d18bd202"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
