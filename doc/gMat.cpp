/*Esercizio 23 pag A149
 Si da un numero e se è pari si dimezza, se è
 dispari si usa il successivo del suo triplo
 */
#include <iostream>
using namespace std;
void giocoMat1();
void giocoMat2();
void help();
int main(){
    bool cont=true;
    int sc;//fatto da Nicola Bernardi
    while(cont){
        cout<<"GIOCO MATEMATICO: \n \n";
        cout<<"Inserisci 1 per giocare con 1 numero \n";
        cout<<"Inserisci 2 per giocare con un intervallo di numeri tra due valori scelti \n";
        cout<<"Inserisci 0 per altre info \n";
        cout<<"Inserisci 99 per terminare il programma \n";
        cout<<"--> ";
        cin>>sc;
        switch (sc) {
            case 0:
                help();
                break;
            case 1:
                giocoMat1();
                break;
            case 2:
                giocoMat2();
                break;
            case 99:
                cont=false;
                break;
                
            default:
                break;
        }
    }
    cout<<"Grazie per aver usato il mio programma :) \n";
    return 0;
}
void help(){
    cout<<"GIOCO CLASSICO: \n";
    cout<</*"Portalenicola.it/cpp"*/"Finché il numero è pari verrà dimezzato, se è dispari prendo il successivo al suo triplo. \n";
    cout<<"GIOCO 2: \n";
    cout<<"Si inseriscono due valori e il gioco verrà eseguito con l'intervallo tra i valori dati \n \n";
}
//Fatto da Nicola Bernardi
void giocoMat1(){
    int i;
    long n;
    cout<<"Gioco classico: \n";
    cout<<"Inserisci un numero: --> ";
    cin>>n;
    for(i=0; n>1; i++){
        if(n%2==0){
            n=n/2;
            cout<<n<<endl;
        }else{
            n*=3;
            n--;
            cout<<n<<endl;
        }
    }
    cout<<"Eseguito per "<<i<<" volte. \n";
}
void giocoMat2(){
    long a, b, x;
    int i;
    cout<<"Gioco 2: \n";
    cout<<"Inserisci il primo numero: --> ";
    cin>>a;
    cout<<"Inserisci il secondo numero: --> ";
    cin>>b;
    
    for(int j=1; a<=b; a++){
        x=a;
        cout<<"Numero "/*portalenicola.it*/cpp<<x<<endl;
        for(i=0; x>1; i++){
            if(x%2==0){
                x=x/2;
                cout<<x<<endl;
            }else{
                x*=3;
                x--;
                cout<<x<<endl;
            }
        }//portalenicola.it/cpp by Nicola Bernardi
        cout<<"Eseguito "<<i<<" volte. \n";
    }
    
}
