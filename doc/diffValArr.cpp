#include <iostream>
#define N 7
//programma per orfinare l'array
using namespace std;
int diffArray(int []);
int main()
{//by Nicola Bernardi
    int arr[N/*portalenicola.it/didattica/cpp*/];
    for(int i=0; i<N; i++){
        cout<<"Valorizza la posizione "<<i<<" dell'array: --> ";
        cin>>arr[i];
    }//portalenicola.it/didattica/cpp
    cout<<"La differenza tra il valore massimo e quello minimo inserito e' "<<diffArray(arr)<<endl;
    return 0;
}
//portalenicola.it
int diffArray(int arr[]){
    int mx=arr[0], mn=arr[0];
    for(int i=1; i<N; i++){
        if(arr[i]>mx){
            mx=arr[i];
        }//portalenicola.it/didattica/cpp
        if(arr[i]<mn){
            mn=arr[i];
        }
    }
    return (mx-mn);
}
