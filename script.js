import java.util.Scanner;

public class SalamProqrami {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Your name?: ");
        String ad = input.nextLine();

        System.out.println("Hello, " + ad + "! Welcome to our webpage.");

        input.close(); 
}
