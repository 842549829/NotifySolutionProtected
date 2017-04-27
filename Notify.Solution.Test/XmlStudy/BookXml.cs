using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace Notify.Solution.Test.XmlStudy
{
    public class BookXml
    {
        public void AnalysisRssXml()
        {
            CreateLinkBookXmlFile();
        }

        public void CreateBookXmlFile()
        {
            XmlDocument doc = new XmlDocument();
            XmlDeclaration declaration = doc.CreateXmlDeclaration("1.0", "utf-8", "yes");
            XmlElement books = doc.CreateElement("books");
            XmlElement authorl1 = doc.CreateElement("author");
            authorl1.InnerText = "authorl1";
            XmlElement authorl2 = doc.CreateElement("author");
            authorl2.InnerText = "authorl2";
            XmlElement authorl3 = doc.CreateElement("author");
            authorl3.InnerText = "authorl3";
            XmlElement title = doc.CreateElement("title");
            title.InnerText = "LINQ in Action";
            XmlElement book = doc.CreateElement("book");
            book.AppendChild(authorl1);
            book.AppendChild(authorl2);
            book.AppendChild(authorl3);
            book.AppendChild(title);
            books.AppendChild(book);
            doc.AppendChild(books);
            doc.InsertBefore(declaration, doc.DocumentElement);
            doc.Save(@"E:\MyCode\Protected\Notify.Solution.Protected\Notify.Solution.Test\XmlStudy\File\book.xml");
        }

        public void CreateLinkBookXmlFile()
        {
            string xmlUrl = "http://www.w3school.com.cn/example/xmle/simple.xml";
            XElement x = XElement.Load(xmlUrl);
            var xs = x.Elements("food");
            var d = xs.Where((w, i) => i == 2).First();
            d.Add(new XElement("p", "dffd"), new XElement("p2", "sds"));

             d.Element("p").Remove();

        }
    }


    public class MyAnnotation
    {
        public string Tag { get; set; }

        public MyAnnotation(string tag)
        {
            this.Tag = tag;
        }
    }
}
