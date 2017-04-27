using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;

namespace Notify.Solution.WebUi.Cache
{
    public class AccessProvider
    {
        public AccessProvider()
        {
        }
        public List<Student> GetStudentList(string filePath)
        {
            XElement root = XElement.Load(filePath);
            IEnumerable<XElement> enumerable = from e in root.Elements("Student") select e;
            List<Student> list = new List<Student>();
            Student student = null;
            foreach (XElement element in enumerable)
            {
                student = new Student();
                student.Name = element.Element("Name").Value;
                student.Age = Convert.ToInt32(element.Element("Age").Value);
                student.Sex = element.Element("Sex").Value;
                list.Add(student);
            }
            return list;
        } 
    }

    public class Student
    {
        public string Name { get; set; }

        public int Age { get; set; }

        public string Sex { get; set; }
    }

}