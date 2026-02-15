using System.Security.Claims;
using System.Text;

namespace HousingAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _config;
    private readonly List<User> _users = new();

    public AuthController(IConfiguration config)
    {
        _config = config;
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] AuthRequest request) 
    {
        if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
        {
            return BadRequest(new { message = "Email and password are required." });
        }

        // Check if user already exists
        if (_users.Any(u => u.Email == request.Email))
        {
            return BadRequest(new { message = "User already exists" });
        }

        // Hash the password
        string hashedPassword = BCrypt.Net.BCrypt.HashPassword(request.Password);

        var user = new User
        {
            Id = _users.Count + 1,
            Email = request.Email,
            Password = hashedPassword
        };

        _users.Add(user);
        return Ok(new { message = "User registered successfully" });
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] AuthRequest request)
    {
        // Find user by email
        var user = _users.FirstOrDefault(u => u.Email == request.Email);

        // Check if user exists AND password is valid
        if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
        {
            return Unauthorized(new { message = "Invalid credentials" });
        }

        var token = GenerateJwtToken(user);

        return Ok(new AuthResponse { Token = token });
    }

    private string GenerateJwtToken(User user)
    {
        var securityKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["Jwt:Key"] ?? "your-super-secret-key-at-least-32-characters-long")
        );
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"] ?? "HousingAPI",
            audience: _config["Jwt:Audience"] ?? "HousingAppUsers",
            claims: new[] { new Claim(ClaimTypes.Email, user.Email) },
            expires: DateTime.UtcNow.AddHours(24),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}