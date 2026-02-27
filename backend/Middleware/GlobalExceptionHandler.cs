using Microsoft.AspNetCore.Diagnostics;

namespace backend.Middleware
{
    public partial class GlobalExceptionHandler : IExceptionHandler
    {
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> _logger)
        {
            this._logger = _logger;
        }

        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {
            _logger.LogError(exception, exception.Message);

            int statusCode;
            string errorCode;

            switch (exception)
            {
                case KeyNotFoundException:
                    statusCode = StatusCodes.Status404NotFound;
                    errorCode = ErrorCodes.NotFound;
                    break;

                case ArgumentException:
                    statusCode = StatusCodes.Status400BadRequest;
                    errorCode = ErrorCodes.ValidationError;
                    break;

                case UnauthorizedAccessException:
                    statusCode = StatusCodes.Status401Unauthorized;
                    errorCode = ErrorCodes.Unauthorized;
                    break;

                default:
                    statusCode = StatusCodes.Status500InternalServerError;
                    errorCode = ErrorCodes.ServerError;
                    break;
            }

            var error = new ApiError
            {
                ErrorCode = errorCode,
                ErrorMessage = exception.Message,
                Timestamp = DateTime.Now,
                ErrorDetails = new
                {
                    TraceId = httpContext.TraceIdentifier
                }
            };

            httpContext.Response.StatusCode = statusCode;

            await httpContext.Response.WriteAsJsonAsync(
                error,
                cancellationToken
            );

            return true;
        }
    }

    public class ApiError
    {
        public string? ErrorCode { get; set; }
        public string? ErrorMessage { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        public object? ErrorDetails { get; set; }

    }

    public static class ErrorCodes
    {
        public const string NotFound = "NOT_FOUND";
        public const string ValidationError = "VALIDATION_ERROR";
        public const string ServerError = "SERVER_ERROR";
        public const string Unauthorized = "UNAUTHORIZED";
    }
}