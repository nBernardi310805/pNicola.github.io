//Programma che calcola la base di alcune fig. geometriche piane
#include <iostream>
using namespace std;
void aQua();
int qua(int);
void aRet();
int ret(int, int);
void aTri();
int tri(int, int);
void aTra();
int tra(int, int, int);



int main(){
    int opz;
    bool cont=true;
    while(cont){
        cout<<"Opzioni:"<<endl;
        cout<<"1 - Area del quadrato"<<endl;
        cout<<"2 - Area del rettangolo"<<endl;
        cout<<"3 - Area del triangolo"<<endl;
        cout<<"4 - Area del trapezio"<<endl;
        cout<<"99 - Fine"<<endl;
        cout<<"---> ";
        cin>>opz;
        switch (opz) {
            case 1:
                aQua();
                break;
            case 2:
                aRet();
                break;
            case 3:
                aTri();
                break;
            case 4:
                aTra();
                break;
            case 99:
                cont=false;
                break;
            default:
                break;
        }
    }
}

void aQua(){
    int l;
    cout<<"Dammi il lato: ";
    cin>>l;
    cout<<"L'area del quadrato e' "<<qua(l)<<endl<<endl;//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
}
int qua(int l){
    int area;
    area=l*l;
    return area;
}
void aRet(){
    int b, h;
    cout<<"Dammi la base: ";
    cin>>b;
    cout<<"Dammi l'altezza: ";
    cin>>h;
    cout<<"L'area del rettangolo e' "<<ret(b, h)<<endl<<endl;
}
int ret(int b, int h){
    int area;
    area=b*h;
    return area;
}
void aTri(){
    int b, h;
    cout<<"Dammi la base: ";
    cin>>b;
    cout<<"Dammi l'altezza: ";
    cin>>h;
    cout<<"L'area del triangolo e' "<<tri(b, h)<<endl<<endl;
}
int tri(int b, int h){
    int area;
    area=(b*h)/2;
    return area;
}
void aTra(){
    int b, h, b2;
    cout<<"Dammi la base minore: ";
    cin>>b;
    cout<<"Dammi la base maggiore: ";
    cin>>b2;
    cout<<"Dammi l'altezza: ";
    cin>>h;
    cout<<"L'area del trapezio e' "<<tra(b, h, b2)<<endl<<endl; //SCARICATO DAL SITO https://portalenicola.it/cpp
}
int tra(int b, int h, int b2){//SCARICATO DAL SITO https://portalenicola.it/cpp
    int area;
    area=(b+b2)*h/2;
    return area;
}



//creato da Nicola Bernardi, caricato su https://portalenicola.it/cpp
