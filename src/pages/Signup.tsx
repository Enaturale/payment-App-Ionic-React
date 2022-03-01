import {useState} from 'react';
import {IonContent, IonHeader, IonPage, IonButton, IonText, IonList, IonItem, IonLabel, IonInput} from '@ionic/react';
import './Signup.css';
import { Link } from 'react-router-dom';
const Signup: React.FC =() =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();

    function registerUser(){
        console.log(email, password, cpassword);  
      }

    return(
        <IonPage>
            <IonContent>
                <div className='payeeContain'>
                    <IonLabel className='payee'>
                    PAYEE
                </IonLabel>

                </div>
                
               <IonList className='form'>                 

                   <IonItem>
                       <IonInput  
                        type= "text" 
                        placeholder='Username'
                        />
                   </IonItem>

                   <IonItem>
                       <IonInput 
                        type = "email"  
                        placeholder='Email'
                        onIonChange={(e:any) =>setEmail(e.target.value)}  
                        />
                   </IonItem>

                   <IonItem>
                       <IonInput 
                        type="number" 
                        required 
                        placeholder='Account Number'                        
                        />
                   </IonItem>

                   <IonItem>
                       <IonInput type="text" required placeholder='Bank Name'/>
                   </IonItem>

                   <IonItem>
                       <IonInput 
                        type='password' 
                        placeholder='Password'
                        onIonChange={(e:any) =>setPassword(e.target.value)}  
                        />
                   </IonItem>

                   <IonItem>
                       <IonInput 
                        type='password' 
                        placeholder='Confirm Password'
                        onIonChange={(e:any) =>setCPassword(e.target.value)}  
                        />
                   </IonItem>             
                     
                   
               </IonList>
                <div className='btnContainer'>
                    {/* routerLink='/welcome' */}
               <IonButton 
                 color ="danger" 
                 className='btnReg'
                 onClick={registerUser}
                 >
                   Register
                </IonButton>
                </div>

                <div className='parap'>
                <p>Already have an account? <Link to="/home">Login</Link></p>
                </div>
            </IonContent>

        </IonPage>
    )
}

export default Signup;