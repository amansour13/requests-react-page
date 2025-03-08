import java.util.Scanner;
import java.util.regex.Pattern;

public class PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String PASSWORD_REGEX = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9!?])(?=.*\\d).{12,20}$";
        
        System.out.print("Enter a password to validate: ");
        String password = scanner.nextLine();

        if (Pattern.matches(PASSWORD_REGEX, password)) {
            System.out.println("Password is valid!");
        } else {
            System.out.println("Password is invalid! It must:");
            System.out.println("- Contain at least one uppercase and one lowercase letter.");
            System.out.println("- Contain at least one special character (excluding ! and ?).");
            System.out.println("- End with a digit.");
            System.out.println("- Be between 12 and 20 characters long.");
        }

        scanner.close();
    }
}
