import {useState} from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList,
  IonItem, IonLabel, IonInput, IonButton, IonAlert, useIonAlert
 } from '@ionic/react';

import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [login, setLogin] = useIonAlert();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function loginUser(){
    console.log(email, password);  
  }

  return (
    <IonPage>
      <IonContent>
        <IonList className='page'>
          <IonItem>
            <IonLabel position='floating'>Email: </IonLabel>
            <IonInput 
              placeholder='example@gmail.com' 
              type='text' 
              onIonChange={(e:any) =>setEmail(e.target.value)}  
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Password: </IonLabel>
            <IonInput 
              placeholder='*********'  
              type='password' 
              onIonChange={(e:any) =>setPassword(e.target.value)}  
            />
          </IonItem>
        </IonList>

         <div className='btnContainer'>
           {/* login button */}
        <IonButton 
        // () => login('Login Complete', [{text: 'ok'}])} 
       // routerLink='/welcome'
            onClick={loginUser}>
              Log In
        </IonButton>

         {/* register button */}
        <IonButton color='danger' routerLink='/signup'>Register</IonButton>
        </div>

        <p className='password'>Forgot Password?</p>

        <div className='parap'>
                <p>You don't have an account? <Link to="/signup">Register</Link></p>
                </div>

        <div className='btnContainer2'>
          <IonButton color='danger'>Log In with Google</IonButton>
          <IonButton>Log In with Facebook</IonButton>
        </div>
      </IonContent>      
    </IonPage>
  );
};

export default Home;
