//Programma calcolatrice
#include <iostream>
using namespace std;
//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
void opzioneSomma();
int somma(int, int);
void opzioneSottrazione();
int sottrazione(int, int);
void opzioneMoltiplicazione();
int moltiplicazione(int, int);
void opzioneDivisione();
int divisione(int, int);


int main(){
    int opzione;
    bool continua=true;
    while(continua){
        cout<<"1 - Addizione"<<endl;
        cout<<"2 - Sottrazione"<<endl;
        cout<<"3 - Moltiplicazione"<<endl;
        cout<<"4 - Divisione"<<endl;
        cout<<"99 - Fine"<<endl<<endl;
        cout<<"Scegliere una delle opzioni sopraelencate: ";
        cin>>opzione;
        switch (opzione) {
            case 1:
                opzioneSomma();
                break;
            case 2:
                opzioneSottrazione();
                break;
            case 3:
                opzioneMoltiplicazione();
                break;
            case 4:
                opzioneDivisione();
                break;
            case 99:
                cout<<"Grazie per aver usato il mio programma :)"<<endl;
                continua=false;
                break;
        }
    }
    return 0;
}

void opzioneSomma(){
    int a, b;
    cout<<"ADDIZIONE:"<<endl;
    cout<<"Dammi il primo addendo --> ";
    cin>>a;
    cout<<"Dammi il secondo addendo --> ";
    cin>>b;
    cout<<"La somma degli addendi "<<a<<" e "<<b<<" e' "<<somma(a, b)<<endl<<endl<<endl;//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
}

int somma(int a, int b){
    int totale;
    totale=a+b;
    return totale;
}

void opzioneSottrazione(){
    int a, b;
    cout<<"SOTTRAZIONE:"<<endl;
    cout<<"Dammi il minuendo --> ";
    cin>>a;
    cout<<"Dammi il sottraendo --> ";
    cin>>b;
    cout<<"La differenza tra "<<a<<" e "<<b<<" e' "<<sottrazione(a, b)<<endl<<endl<<endl;//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
}
int sottrazione(int a, int b){
    int differenza;
    differenza=a-b;
    return differenza;
}
//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
void opzioneMoltiplicazione(){
    int a, b;
    cout<<"MOLTIPLICAZIONE:"<<endl;
    cout<<"Dammi il moltiplicando --> ";
    cin>>a;
    cout<<"Dammi il moltiplicatore --> ";
    cin>>b;
    cout<<"Il prodotto di "<<a<<" e "<<b<<" e' "<<moltiplicazione(a, b)<<endl<<endl<<endl;//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
}
int moltiplicazione(int a, int b){
    int prodotto;
    prodotto=a*b;
    return prodotto;
}

void opzioneDivisione(){
    int a, b;
    cout<<"DIVISIONE:"<<endl;
    cout<<"Dammi il dividendo --> ";
    cin>>a;
    cout<<"Dammi il divisore --> ";
    cin>>b;
    cout<<"Il quoto di "<<a<<" e "<<b<<" e' "<<divisione(a, b)<<endl<<endl<<endl;//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
}//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
int divisione(int a, int b){
    int quoto;
    quoto=a/b;
    return quoto;
}
