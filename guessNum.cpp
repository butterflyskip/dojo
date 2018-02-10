/* Program is a number guessing game, which prompts a user
 * to guess a pre-determined number and gives hints to arrive at the correct
 * number via looping
 */


# include <iostream> 
# include <string>  // library to use c++ string function
using namespace std;

int main ()
{
    int  num, guess, tries = 0; /*integer number, guesses from player and attempts aka tries
                                * "tries accumulates the number of tries needed to guess 
                                * the correct number
                                */
    cout << "Enter the number for the player to guess.\n";
    cin >> num;

    do
    {
       cout << "Enter your guess.\n";
       cin >> guess;
       tries ++;
        if (guess > num)
            cout << "lower" << endl;
        else if (guess < num)
            cout << "higher" << endl;
        else
            cout << "You guessed it in " << tries << " tries." << endl;

    } while (guess != num);   /* this will ensure the loop iterates till the
			                        * number is guessed correctly
			                        */
                          

     return 0;
}
