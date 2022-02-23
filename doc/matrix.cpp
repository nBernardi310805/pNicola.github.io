//Le matrici o array multidimensionali
#include <iostream>
#define R 10
#define C 4
using namespace std;

void valorizzaArray(int [][C], int, int, int);
void stampaArray(int [][C], int);
int main() {
    int arr[R][C];
    
    srand(time(NULL));
    //Chiamata alle funzioni
    valorizzaArray(arr, R, 0, 9);
    stampaArray(arr, R);
    return 0;
}

void valorizzaArray(int v[][C], int r, int valMin, int valMax){
    for(int i=0; i<R; i++){
        for(int j=0; j<C; j++){
            v[i][j]=rand()%(valMin-valMax)+valMin;
        }
    }
}

void stampaArray(int v[][C], int r){
    cout<<"     a   b   c   d"<<endl;
    for(int i=0; i<R; i++){
        cout<<i<<")   ";
        for(int j=0; j<C; j++){
            cout<<v[i][j]<<"   ";
        }
        cout<<"\n";
    }
}
