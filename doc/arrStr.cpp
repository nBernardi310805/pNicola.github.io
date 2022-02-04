//Programma per ordinare nomi in ordine alfabetico

#include <iostream>
#define N 50
//by Nicola Bernardi
using namespace std;

void scambio(string&, string&);
void exchangeSort(string[], int);
void bubbleSort(string[], int);
//portalenicola.it/didattica/cpp
int main()
{
    string arr[N], tmp;
    for(int i=0; i<N; i++)
    {
        cout<<"Scrivi un nome nella posizione "<<arr[i]<<" dell'array - (usa # per finire) \n";
        getline(cin, tmp);
        if(tmp=="#")
        {
            break;
        }
        arr[i]=tmp;
    }
    exchangeSort(arr, N);
    bubbleSort(arr, N);
    return 0;
}

void scambio(string& x, string& y)
{//portalenicola.it/didattica/cpp
    string z;
    if(x.length()==0)
    {
        x="~";
    }
    if(y.length()==0)
    {
        y="~";
    }
    z=x;
    x=y;
    y=z;

}

void exchangeSort/*portalenicola.it/didattica/cpp*/(string arr[], int dim)
{
    for(int i=0; i<dim-1; i++)
    {
        for(int j=i+1; j<dim; j++)
        {
            if(arr[j].length()==0)
            {
                break;
            }
            if(arr[i]>arr[j])
            {
                scambio(arr[i], arr[j]);


            }
        }
    }
    cout<<"Ordinamento con funzione Exchange-Sort \n";
    for(int k=0; k<dim; k++)
    {

        if(arr[k].length()
                ==0)
        {
            break;
        }
        cout<<"Il nome in posizione "<<k<<" e' "<<arr[k]<<endl;
    }

}//portalenicola.it/didattica/cpp

void bubbleSort(string arr[], int dim)
{
    bool s;
    do
    {
        s=false;
        for(int i=0; i<dim-1; i++)
        {
            if(arr[i]>arr[i+1])
            {
                scambio(arr[i], arr[i+1]);
                s=true;
            }
        }
    }
    while(s);
//portalenicola.it/didattica/cpp
    cout<<"Ordinamento con funzione Bubble-Sort \n";
    for(int j=0; j<dim; j++)
    {
        if(arr[j]=="~")
        {
            break;
        }//portalenicola.it/didattica/cpp
        cout<<"Il nome in posizione "<<j<<" e' "<<arr[j]<<endl;
    }
}

