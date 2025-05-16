import java.util.Scanner;

public class SalamProqrami {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); // İstifadəçidən məlumat almaq üçün

        System.out.print("Adınızı daxil edin: ");
        String ad = input.nextLine(); // Adı oxuyur

        System.out.println("Salam, " + ad + "! Proqramımıza xoş gəldiniz.");

        input.close(); // Scanner obyektini bağlayır
    }
}
