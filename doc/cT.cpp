#include <iostream>
using namespace std;
long calcolaSecondi (int gg, int hh, int mm, int ss){
    long s;
    s=ss+mm*60+hh*3600+gg*86400;
    return s;
}
int main(){
    int gg, hh, mm, ss;
    cout<<"Inserisci i giorni ";
    cin>>gg;
    cout<<"Inserisci le ore ";
    cin>>hh;
    cout<<"Inserisci i minuti ";
    cin>>mm;
    cout<<"Inserisci i secondi ";
    cin>>ss;
    cout<<"Equivalgono a "<<calcolaSecondi(gg, hh, mm, ss)<<" secondi";
    
}
