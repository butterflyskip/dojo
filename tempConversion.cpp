/*
 * Program converts a user input of a Celsius 
 * to its corresponding Fahrenheit temperature
 */

# include <iostream>
using namespace std; /* this allows use of standard library names and 
		                  * will allow typing cout, cin and endl without
		                  * prefix such as std::cout etc 
		                  */
 
int main()

{

	float celsius;
	float fahrenheit;   

	cout << "Please enter a Celsius temperature. " << endl; 
	cin >> celsius;
	fahrenheit = ((9.0/5.0)*celsius)+ 32; 
	cout << fahrenheit << endl; 
	
	return 0; 

}

