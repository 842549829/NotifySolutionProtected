using Newtonsoft.Json.Converters;

namespace Notify.Solution.WebApi.Format
{
    /// <summary>
    /// The date time format.
    /// </summary>
    public class DateTimeFormat : IsoDateTimeConverter
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DateTimeFormat"/> class.
        /// </summary>
        public DateTimeFormat()
        {
            this.DateTimeFormat = "yyyy-MM-dd HH:mm:ss";
        }
    }
}