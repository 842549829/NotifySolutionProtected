using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Http.Metadata;

namespace Notify.Solution.WebMvc.Models
{
    public class Contact
    {
        [UIHint("A")]
        public string Name { get; set; }

        public string Address { get; set; }
    }
}