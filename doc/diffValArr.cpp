#include <iostream>
#define N 7
using namespace std;
int diffArray(int []);
int main()
{
    int arr[N];
    for(int i=0; i<N; i++){
        cout<<"Valorizza la posizione "<<i<<" dell'array: --> ";
        cin>>arr[i];
    }
    cout<<"La differenza tra il valore massimo e quello minimo inserito e' "<<diffArray(arr)<<endl;
    return 0;
}

int diffArray(int arr[]){
    int mx=arr[0], mn=arr[0];
    for(int i=1; i<N; i++){
        if(arr[i]>mx){
            mx=arr[i];
        }
        if(arr[i]<mn){
            mn=arr[i];
        }
    }
    return (mx-mn);
}
