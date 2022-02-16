//Prova verifica
#include <iostream>
#include <ctime>
#define N 10
using namespace std;
void valorizzaArray(char[]);
void cercaNellArray(char [], int&, int&, int&);

int main() {
    char arr[N];
    int vocali=0, consonanti=0, speciali=0;
    valorizzaArray(arr);
    cercaNellArray(arr, vocali, consonanti, speciali);
    cout<<"Sono state casualmente generate "<<vocali<<" vocali. \n";
    cout<<"Sono state casualmente generate "<<consonanti<<" consonanti. \n";
    cout<<"Sono stati casualmente generati "<<speciali<<" caratteri speciali. \n";
    return 0;
}
//Funzione per valorizzare l'array
void valorizzaArray(char arr[]){
    srand(time(NULL));
    for(int i=0; i<N; i++){
        arr[i]=rand()%106+65;
        cout<<"pos "<<i<<" : "<<arr[i]<<endl;
    }
}
//Funzione per cercare nell'array
void cercaNellArray(char arr[], int& vocali, int& consonanti, int& speciali){
    for(int i=0; i<N; i++){
        if((arr[i]>='a'&&arr[i]<='z') || (arr[i]>='A'&&arr[i]<='Z')){
            
            if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'||arr[i]=='A'||arr[i]=='E'||arr[i]=='I'||arr[i]=='O'||arr[i]=='U'){
                vocali++;
            }else {
                consonanti++;
            }
            
        }else {
            speciali++;
        }
    }
}


