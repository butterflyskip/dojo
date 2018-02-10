//Program asks the user for their favorite animal, then repeats it back to them' 

#include<iostream>
#include<string>


int main()
{
   std::string faveAnimal;
   std::cout<<"Please enter your favorite animal."<<std::endl;
   std::cin>>faveAnimal;
   std::cout<<"Your favorite animal is the " <<faveAnimal;
   std::cout<<"." <<std::endl;

   return 0;
}
