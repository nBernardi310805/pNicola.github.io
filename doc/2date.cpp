/*Esercizio 29 pag A150:
 Programma per calcolare la distanza tra due date
 */
#include <iostream>
using namespace std;
void data(int);
void aCom(int, int, long, int, int, long); //SCARICATO DAL SITO https://portalenicola.it/cpp#2d
void aSol(int, int, long, int, int, long);
void help();

int main(){
    int opz;
    bool cont=true;
    while(cont){
        cout<<"PROGRAMMA PER MISURARE L'INTERVALLO DI TEMPO TRA DUE DATE \n \n";
        cout<<"Inserire 1 per usare l'ANNO COMMERCIALE \n";
        cout<<"Inserire 2 per usare l'ANNO SOLARE \n";
        cout<<"Inserire 0 per MAGGIORI INFORMAZIONI \n";
        cout<<"Inserire 99 quando si HA FINITO \n";
        cout<<"--> ";
        cin>>opz;
        switch (opz) {
            case 0:
                help();
                break;
            case 1:
                data(opz);
                break;
            case 2:
                data(opz);
                break;
            case 99:
                cont=false;
                break;
            default:
                break;
        }
    }
    cout<<"Grazie per aver usato il mio programma. :) \n";
    return 0;
}
void data(int opz){
    int gg1, gg2, mm1, mm2;
    long yy1, yy2;
    cout<<"PRIMA data: \n";
    cout<<"Inserire il GIORNO: -> ";
    cin>>gg1;
    cout<<"Inserire il MESE: -> ";
    cin>>mm1;
    cout<<"Inserire l'ANNO: -> ";
    cin>>yy1;
    cout<<"SECONDA data: \n";
    cout<<"Inserire il GIORNO: -> ";
    cin>>gg2;
    cout<<"Inserire il MESE: -> ";
    cin>>mm2;
    cout<<"Inserire l'ANNO: -> ";
    cin>>yy2;
    if(opz==1){
        aCom(gg1, mm1, yy1, gg2, mm2, yy2);
    }else{
        aSol(gg2, mm2, yy2, gg1, mm1, yy1);
    }
}
void aCom(int gg1, int mm1, long yy1, int gg2, int mm2, long yy2){
    long mm, yy, gg;
    yy=yy2-yy1;
    gg=gg2-gg1;
    mm=mm2-mm1;
    if(gg<0){
        mm--;
        gg+=30;
    }
    if(mm<0){
        yy--;
        mm+=12;
    }

    cout<<"Dalla prima data alla seconda sono passati "<<gg<<" GIORNI, "<<mm<<" MESI, "<<yy<<" ANNI. \n \n \n";//QUESTO PROGRAMMA È STATO CREATO DA NICOLA BERNARDI
}


void aSol(int gg2, int mm2, long yy2, int gg1, int mm1, long yy1){
    long mm, gg, yy;
    yy=yy2-yy1;
    mm=mm2-mm1;
    gg=gg2-gg1;
    if(mm<0){
        mm+=12;
        yy--;
    }
    if(gg<0){//SCARICATO DAL SITO https://portalenicola.it/cpp
        mm--;
        switch (mm) {
            case 12:
                gg+=31;
                break;
            case 11:
                gg+=30;
                break;
            case 10:
                gg+=31;
                break;
            case 9:
                gg+=30;
                break;
            case 8:
                gg+=31;
                break;
            case 7:
                gg+=31;
                break;
            case 6:
                gg+=30;
                break;
            case 5:
                gg+=31;
                break;
            case 4:
                gg+=30;
                break;
            case 3:
                gg+=31;
                break;
            case 2:
                gg+=28;
                break;
            case 1:
                gg+=31;
                break;
            case 0:
                gg+=31;
                break;
            
            default:
                break;
        }
    }
    cout<<"Dalla prima data alla seconda sono passati "<<gg<<" GIORNI, "<<mm<<" MESI, "<<yy<<" ANNI. \n \n \n";//SCARICATO DAL SITO https://portalenicola.it/cpp
}

void help(){
    cout<<"AIUTO: \n";
    cout<<"L'anno commerciale è quello che, ogni mese ha 30 giorni, dunque 360 giorni. Viene usato per esempio nell'ambito finanziario per calcolare gli interessi nei prestiti. \n";//SCARICATO DAL SITO https://portalenicola.it/cpp
    cout<<"L'anno solare è quello che tutti noi usiamo e ha 365 giorni. \n \n \n"; //CREATO DA NICOLA BERNARDI, CARICATO SU portalenicola.it/cpp#2d
}
