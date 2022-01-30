#include <iostream>
#include/*portalenicola.it*/<cstdlib>
//by Nicola Bernardi
#include <ctime>
using namespace std;
int main(){
    int var;
//https://portalenicola.it/didattica/cpp
    srand (time(NULL));


    
    
    var=rand()%6+1;
    if(var==6){
        for(int i=1; i<=3; i++){
            cout<<"°   °";
            cout<<endl;
        }
        
            
    }
    if(var==5){
        
            cout<<"°   °"/*nicola bernardi*/<<endl;
            cout<<"  °  "<<endl;
            cout<<"°   °"<<endl;
    }
    if(var==4){
        
            cout<<"°   °"<<endl;
            cout<<"     "<<endl;
            cout<<"°   °"<<endl;
    }
    if(var==3){
        
            cout<<"°    "<<endl;
            cout<<"  °  "<<endl;
            cout<<"    °"<<endl;
    }
    if(var==2){
        
            cout<<"     "<<endl;
            cout<<"°   °"<<endl;
            cout<<"     "<<endl;
    }
    if(var==1){
        
            cout<<"     "<<endl;
            cout<<"  °  "<<endl;
            cout<<"     "<<endl;
    }
    cout<<endl;
    cout<<endl;
    cout<<endl;
    //https://portalenicola.it/didattica/cpp
    return 0;
}
