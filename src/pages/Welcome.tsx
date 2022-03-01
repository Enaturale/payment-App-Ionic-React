import {IonContent, IonHeader, IonPage, IonButton, IonText, IonLabel, 
    IonCard, IonCardTitle, IonTitle, IonCardHeader, IonCardContent, IonList, 
    IonItem, IonBadge, IonIcon, IonTabBar, IonTabButton, IonTabs,
     IonRouterOutlet, IonFooter, IonToolbar} from '@ionic/react';
import './Welcome.css';

import { calendar, personCircle, map, informationCircle, menuOutline } from 'ionicons/icons';
import { Route } from 'react-router-dom';
import Profile from './Profile';
import Savings from './Savings';
import Investment from './Investment';
import { IonReactRouter } from '@ionic/react-router';

const Welcome: React.FC =() =>{
    return(
        <IonPage>
          
           
        <IonContent >
                {/* <div className='titleContainer'>
                <IonLabel className='title'>PAYEE</IonLabel>
                </div> */}

                <IonTitle className='title'>
                    <h3>PAYEE
                       <IonIcon style={{color: '#a52a2a', marginLeft:'120px'}} icon={menuOutline}/>
                    </h3>                    
                </IonTitle>


                <div className='container'>
                  <div className='scroll'>
                
                <IonLabel className="username">Dear Username</IonLabel>
                
              
                <IonCard className='card1'>
                    <IonCardHeader>
                    <IonCardTitle>
                        Wallet Balance
                    </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonLabel>Your Wallet Balance is: ********</IonLabel>

                    </IonCardContent>             
               
                </IonCard>

               

                <IonCard className='card2'>
                    <IonCardHeader>
                    <IonCardTitle>
                        Notification
                    </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        You have 30 new Notifications
                    </IonCardContent>
                    
                </IonCard>

              

                <IonCard style={{marginBottom: '40px'}}>
                    <IonCardHeader>
                    <IonCardTitle>
                        Transaction History
                    </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                You paid #20,000 to Ade                                
                            </IonItem>
                            <IonItem>
                                You received #20,000 from Jones
                            </IonItem>
                            <IonItem>
                                You paid #20,000 to Ade                                
                            </IonItem>
                            <IonItem>
                                You received #20,000 from Jones
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
               
                 
                </div>
                </div>

                      

               

            </IonContent>
          
            <IonFooter>
            
                 <IonToolbar>
                    
                 <IonTabs >
                    <IonRouterOutlet>
                        <Route path="/welcome" component={Welcome} exact />
                        <Route path="/savings" component={Savings} exact />
                        <Route path="/investment" component={Investment} exact />
                        <Route path="/profile" component={Profile}  exact/>
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom" className='tabBar'>

                       <IonTabButton tab="home" href="/welcome">
                            <IonLabel>Home</IonLabel>
                        </IonTabButton>
                        
                        <IonTabButton tab="savings" href="/savings">
                            <IonLabel>Savings</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="investment" href="/investment">
                            <IonLabel>Investments</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="profile" href="/profile">
                            <IonLabel>Profile</IonLabel>
                        </IonTabButton>

                    </IonTabBar>
                </IonTabs> 
                
                </IonToolbar>
                
               
            
            </IonFooter> 

            
        </IonPage>
    )
}

export default Welcome;