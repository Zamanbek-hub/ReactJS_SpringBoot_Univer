import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        createFile();
        String realPass = "thisissohardpassword";
        File file = new File("file.txt");
        Scanner fileReader = new Scanner(file);
        String passwordFile = "";
        while (fileReader.hasNextLine()) {
            passwordFile = fileReader.next();
        }
        System.out.println("=======================");
        fileReader.close();
        if(passwordFile.equals("")){
            System.out.println("File is empty. Please enter part of the password into the file.");
        }
        else {
            String password = "";
            int chance = 1;
            while (chance < 4) {
                if (chance >= 2) {
                    System.out.println("Chance #" + chance + "!");
                }
                System.out.print("Password: ");
                password = scanner.next();
                chance++;
                if (realPass.equals(password + passwordFile)) {
                    System.out.println("CORRECT PASSWORD!");
                    break;
                } else {
                    System.out.println("PASSWORD IS INCORRECT!");
                }
            }
        }

    }

    static void createFile() throws IOException {
        File file1 = new File("file.txt");
        if (file1.createNewFile()) {
            System.out.println("File created: " + file1.getName());
        } else {
            System.out.println("File already exists.");
        }
    }

}
