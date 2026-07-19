#include <iostream>
using namespace std;

int main(){
    //Question 1
    // int num;
    // cout << "Enter a Number :";
    // cin >> num;
    // int sum = 0;
    // for(int i = 0; i<=num; i++){
    //     sum +=i;
    // }
    // cout<<sum;

    //Question 2
    /*
    int n = 1560;
    int sum = 0;
    int lastDig;
    while(n>0){
        lastDig = n % 10;
        sum = sum + lastDig;
        n = n/10;
    }
    cout << "sum :"<< sum << endl;
    */

    //Question 3
    /*
    int n =12345;
     int lastDig;
     int res = 0;
    while(n > 0){
        lastDig = n % 10;
        res = res * 10 + lastDig;
        cout << lastDig;
        n /= 10;
    }
    */

    return 0;
}