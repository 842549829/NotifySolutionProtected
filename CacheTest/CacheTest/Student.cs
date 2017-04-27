using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CacheTest
{
    [Serializable]
    public class Student
    {
        public Student()
        { 
        }

        public string Name { get; set; }

        public int Age { get; set; }

        public string Sex { get; set; }
    }
}