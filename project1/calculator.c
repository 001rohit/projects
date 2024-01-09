#include <stdio.h>
void sum(int a, int b){
    printf("\n1) sum (+)  :- \n  \t%d  + %d  =   %d \n\n",a,b,a+b);
}
void substr(int a, int b){
    printf("\n 2) Minuse  (-) :-\n  \t %d  - %d  = %d \n\n",a,b,a-b);
}
void multi(int a, int b){
    printf("\n 3) Multiplication (*) :- \n \t%d * %d =  %d \n\n",a,b,a*b);
}
void devis(int a, int b){
    printf("\n 4) Devision (/) :-\n \t%d / %d =  %d \n\n",a,b,a/b);
}

int main(){
int choice=0;
while(choice!=5){
printf("\n\nWelcome to the dynamic calculator");
    printf("\n \n 1:sum\n");
    printf("\n 2:Minuse\n");
    printf("\n 3:Multiplication\n");
    printf("\n 4:Devision\n");
    printf("\n 5:Exit\n");
      
      printf(" \n  Enter your choice :- ");
      scanf("%d",&choice);
     

    if(choice == 5){
        break;
    }
    int x,y;
    printf("\nPlease Enter the value of number 1 :- ");
    scanf("%d",&x);

    printf("\nPlease Enter the value of number 2 :-  ");
    scanf("%d",&y);
     
     if(choice ==1){
         sum(x,y);
     }
     else if(choice==2){
        substr(x,y);
     }
     else if(choice ==3){
        multi(x,y);

     }
     else if(choice ==4){
        devis(x,y);
     }
   
}
   printf("\nExit the program");
   return 0;
}