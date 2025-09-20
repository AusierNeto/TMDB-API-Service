
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Client {
    public String urlString;

    public Client(String urlString) {
        this.urlString = urlString;
        
    }
    public static void main(String[] args) {
        String option;
        try {
            option = args[1];
        } catch (Exception e) {
            System.out.println("No endpoint provided.");
            throw e;
        }

        Client client = new Client("http://192.168.0.62:3000/movies/" + option);

        HttpClient httpClient = HttpClient.newHttpClient();
        System.out.println("HTTP Client created: " + httpClient);

        try {
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(client.urlString))
                .GET()
                .build();
    
            System.out.println("HTTP Request created: " + request);
    
            HttpResponse<String> response;
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            System.err.println("Response for: " + option);
            System.out.println(response.body());
            
        } catch (Exception e) {
            System.out.println("Error during HTTP request/response:");
            e.printStackTrace();
        }
    }
}
