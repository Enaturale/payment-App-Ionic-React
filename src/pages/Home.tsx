import {useState} from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList,
  IonItem, IonLabel, IonInput, IonButton, IonAlert, useIonAlert
 } from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  const [login, setLogin] = useIonAlert();
  return (
    <IonPage >
      <IonContent >
        <IonList className='page'>
          <IonItem>
            <IonLabel position='floating'>Email: </IonLabel>
            <IonInput placeholder='example@gmail.com' type='text'  />
          </IonItem>

          <IonItem>
            <IonLabel position='floating'>Password: </IonLabel>
            <IonInput placeholder='*********'  type='password' />
          </IonItem>

        </IonList>

         <div className='btnContainer'>
        <IonButton onClick={() => login('Login Complete', [{text: 'ok'}])}>Log In</IonButton>
        <IonButton color='danger'>Sign Up</IonButton>
        </div>

        <p className='password'>Forgot Password?</p>

        <div className='btnContainer2'>
          <IonButton color='danger'>Log In with Google</IonButton>
          <IonButton>Log In with Facebook</IonButton>
        </div>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
