//  Created by Nicola  Bernardi on 16/03/22.
//https://portalenicola.it/didattica/cpp
#include <iostream>
#define DIM 2
using namespace std;
//https://portalenicola.it/didattica/cpp
//Struttura della data di nascita
struct Data { //https://portalenicola.it/didattica/cpp
    int giorno;
    int mese;
    int anno;
};//by Nicola Bernardi
//Struttura del proprietario dell'auto
struct Persona{
    string nome;
    string cognome;
    Data ddn;
};
//Struttura auto
struct Auto{
    string marca;
    int cilindrata;
    string modello;
    Persona acquirente;
};
//https://portalenicola.it/didattica/cpp
void valorizzaArray(Auto[]);
void stampaConcessionario(Auto[]);
int main(){
    Auto arr[DIM];
    valorizzaArray/*by Nicola Bernardi*/(arr);
    stampaConcessionario(arr);
    
    return 0;
}//https://portalenicola.it/didattica/cpp
//Valorizza campi
void valorizzaArray(Auto arr[]){
    for(int i=0; i<DIM; i++){
        cout<<"Inserire la marca: --> ";
        getline(cin, arr[i].marca);
        cout<<"Inserire la cilindrata: -->";
        cin>>arr[i].cilindrata;
        cout<<"Inserire il modello: -->";
        getline(cin, arr[i].modello);
        cout<<"Inserire il nome dell'acquirente: -->";//https://portalenicola.it/didattica/cpp
        getline(cin, arr[i].acquirente.nome);
        cout<<"Inserire il cognome dell'acquirente: -->";
        getline(cin, arr[i].acquirente.cognome);
        cout<<"Inserire il giorno di nascita dell'acquirente: -->";
        cin>>arr[i].acquirente.ddn.giorno;
        cout<<"Inserire il mese di nascita dell'acquirente: -->";
        cin>>arr[i].acquirente.ddn.mese;
        cout<<"Inserire l'anno di nascita dell'acquirente: -->";
        cin>>arr[i].acquirente.ddn.anno;
    }
}//https://portalenicola.it/didattica/cpp
//Stampa dati raccolti
void stampaConcessionario(Auto arr[]){
    for(int j=0; j<DIM; j++){
        cout<<"\n \n --- Auto --- \n \n";
        cout<<"La marce è --> "<<arr[j].marca<<endl;
        cout<<"La cilindrata è --> "<<arr[j].cilindrata<<endl;
        cout<<"Il modello è --> "<<arr[j].modello<<endl;
        cout<<"\n \n --- Proprietario --- \n \n";
        cout<<"Il nome è --> "<<arr[j].acquirente.nome<<endl;
        cout<<"Il cognome è --> "<<arr[j].acquirente.cognome<<endl;
        cout<<"La data di nascita è --> "<<arr[j].acquirente.ddn.giorno<<"/"<<arr[j].acquirente.ddn/*by Nicola Bernardi*/.mese<<"/"<<arr[j].acquirente.ddn.anno<<endl;
        //https://portalenicola.it/didattica/cpp
    }
}
