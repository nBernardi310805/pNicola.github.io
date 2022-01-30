//Programma per shiftare l'array
#include <iostream>
#define N 5
using namespace std;
void shiftArray(int[], int, int, int);
//by Nicola Bernardi
void stampaArray(int[], int);
int main()
{
    int arr[N], verso, add;
    cout<<"Shift array \n \n";
    cout<<"L'array ha "<<N/*https://portalenicola.it/didattica/cpp */ <<" posizioni. \n";
    cout<<"Per scambiare l'array verso sinistra digita 1, verso destra digita 2: (default=destra) --> ";
    cin>>verso;
    cout<<"Di quante posizioni vuoi shiftare?: --> ";
    cin>>add;
    for(int i=0; i<N; i++)
    {
        cout<<"Assegna un valore alla posizione "<<i<<" dell'array: --> ";
        cin>>arr[i];
    }
    shiftArray(arr, N, verso, add);
    stampaArray(arr, N);
    //by Nicola Bernardi
    return 0;
}
void shiftArray(int arr[], int dim, int verso, int add)
{
    int salva;
    if(verso==1)
    {
        for(int c=1; c<=add; c++){
            salva = arr[0];
            for(int i=0; i<dim; i++)
            {
                if(i<dim-1){
                    arr[i]=arr[i+1];
                }
            }
            arr[dim-1]=salva;
        }

    }
    else
     { /*https://portalenicola.it/didattica/cpp */
        for(int c=1; c<=add; c++){
            salva = arr[dim-1];
            for(int i=dim-1; i>=0; i--)
            {
                if(i>0)
                {
                    arr[i]=arr[i-1];
                }
            }
            arr[0]=salva;
        }
    }

}

void stampaArray(int arr[], int dim)
{
    for(int j=0; j<dim; j++)
    { //https://portalenicola.it/didattica/cpp
        cout<<"La posizione "<<j<<" dell'array ora vale: "<<arr[j]<<endl;
    }
}
