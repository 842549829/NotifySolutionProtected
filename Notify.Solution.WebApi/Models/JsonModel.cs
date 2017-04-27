using Newtonsoft.Json;

namespace Notify.Solution.WebApi.Models
{
    /// <summary>
    /// The result.
    /// </summary>
    public class JsonModel : Result
    {
        /// <summary>
        /// Gets or sets the date time.
        /// </summary>
        [JsonConverter(typeof(Notify.Solution.WebApi.Format.DateTimeFormat))]
        public System.DateTime DateTime { get; set; }
    }
}