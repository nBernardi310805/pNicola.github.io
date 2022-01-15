//fattoriale
#include <iostream>
//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
using namespace std;
int fattoriale(int);
int main(){
    int n;
    cout<<"Dammi il numero di cui vuoi calcolare il fattoriale: ";
    cin>>n;
    cout<<fattoriale(n)<<endl;
}//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
int fattoriale(int n){
    int fatt=1;
    while(n>1){
        fatt=fatt*n;
        n--;
    }//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
    return fatt;
}
