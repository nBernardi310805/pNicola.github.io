//fattoriale
#include <iostream>
using namespace std;
int fattoriale(int);
int main(){
    int n;
    cout<<"Dammi il numero di cui vuoi calcolare il fattoriale: ";
    cin>>n;
    cout<<fattoriale(n)<<endl;
}
int fattoriale(int n){
    int fatt=1;
    while(n>1){
        fatt=fatt*n;
        n--;
    }
    return fatt;
}
