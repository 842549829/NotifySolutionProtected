using System.Runtime.Serialization;

namespace Notify.Solution.WebApi.Models
{
    /// <summary>
    /// The result.
    /// </summary>
    public class XmlModel : Result
    {
        /// <summary>
        /// Gets or sets the date time.
        /// </summary>
        [IgnoreDataMember]
        public System.DateTime DateTime { get; set; }

        /// <summary>
        /// Gets or sets the date time string.
        /// </summary>
        public string DateTimeString
        {
            get
            {
                return this.DateTime.ToString("yyyy-MM-dd HH:mm:ss");
            }

            set
            {
                this.DateTime = System.Convert.ToDateTime(value);
            }
        }
    }
}