namespace Notify.Solution.WebApi.Exception
{
    /// <summary>
    /// The business exception.
    /// </summary>
    public class BusinessException : System.Exception
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessException"/> class.
        /// </summary>
        /// <param name="message">
        /// The message.
        /// </param>
        public BusinessException(string message)
            : base(message)
        {
        }
    }
}