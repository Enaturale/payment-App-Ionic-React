import {useState} from 'react';
import {IonContent, IonHeader, IonPage, IonButton, IonText, IonList, IonItem, IonLabel, IonInput} from '@ionic/react';
import './Signup.css';
import { Link, NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebaseConfig';
import { config } from '../firebaseConfig';
import Welcome from "./Welcome";

const Signup: React.FC =() =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState();

    function registerUser(){
        // if(email){
        //     if(password == cpassword){
        //         createUserWithEmailAndPassword(auth, email, password).then(() =>{
        //             alert("User created");
        //         })

        //     }else{
        //         alert("Passwords do not match");
        //     }
        // }else{
        //     alert("Please Check Details");
        // }




        if(email){
            if(password !== cpassword){
                alert('Passwords do not match');
            }else{
                createUserWithEmailAndPassword(auth, email, password).then(()=>{
                    alert('User Created');
                     
                })
            }
     
        }
       
       


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
                        required
                        />
                   </IonItem>

                   <IonItem>
                       <IonInput 
                        type = "text"  
                        value={email}
                        placeholder='Email'
                        onIonChange={(e:any) => setEmail(e.target.value)}
                        
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
                        type="password" 
                        value={password}
                        placeholder='Password'
                        onIonChange={(e:any) => setPassword(e.target.value)}                   
                        />
                   </IonItem>

                   <IonItem>
                       <IonInput 
                        type="password"
                        placeholder='Confirm Password'
                        onIonChange={(e:any) => setCPassword(e.target.value)}                   
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

                <div className='centerParap'>
                   <p>Already have an Account? <Link to={'/home'}> Login</Link></p> 
                </div>

               
            </IonContent>

        </IonPage>
    )
}

export default Signup;