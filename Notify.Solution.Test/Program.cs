/*
 神兽保佑－代码无BUG
       ┏┓　　　┏┓
     ┏┛┻━━━┛┻┓
     ┃　　　　　　　┃ 　
     ┃　　　━　　　┃
     ┃　┳┛　┗┳　┃
     ┃　　　　　　　┃
     ┃　　　┻　　　┃
     ┃　　　　　　　┃
     ┗━┓　　　┏━┛
         ┃　　　┃   神兽保佑　　　　　　　　
         ┃　　　┃   代码无BUG！
         ┃　　　┗━━━┓
         ┃　　　　　　　┣┓
         ┃　　　　　　　┏┛
         ┗┓┓┏━┳┓┏┛
           ┃┫┫　 ┃┫┫
           ┗┻┛　 ┗┻┛
 */
/* 
* 
↖(^ω^)↗
%>_<%
(+﹏+)~狂晕
~~o(>_<)o ~~
/(ㄒoㄒ)/~~
(╰_╯)#
\(^o^)/
o(︶︿︶)o唉
(@﹏@)~ 
(╯﹏╰）
╮(╯_╰)╭
(╯﹏╰)b
~\(≧▽≦)/~
O__O"…
(*^__^*) 嘻嘻……
X﹏X
(⊙_⊙?)
\(^o^)/~
( ⊙ o ⊙ )啊！
~~~~(>_<)~~~~ 
o_O???
\(^o^)/同意
(⊙o⊙)哦
(⊙_⊙)？
╮(╯_╰)╭
(⊙o⊙)
(⊙o⊙)？
(⊙v⊙)嗯
(⊙_⊙)
O(∩_∩)O嗯！
( ⊙ o ⊙ )！
~\(≧▽≦)/~啦啦啦
\(^o^)/YES！
O(∩_∩)O好的
O(∩_∩)O哈！
(O_O)？
*/
/*

                            _ooOoo_  
                           o8888888o  
                           88" . "88  
                           (| -_- |)  
                            O\ = /O  
                        ____/`---'\____  
                      .   ' \\| |// `.  
                       / \\||| : |||// \  
                     / _||||| -:- |||||- \  
                       | | \\\ - /// | |  
                     | \_| ''\---/'' | |  
                      \ .-\__ `-` ___/-. /  
                   ___`. .' /--.--\ `. . __  
                ."" '< `.___\_<|>_/___.' >'"".  
               | | : `- \`.;`\ _ /`;.`/ - ` : | |  
                 \ \ `-. \_ __\ /__ _/ .-` / /  
         ======`-.____`-.___\_____/___.-`____.-'======  
                            `=---='  
         .............................................  
                  佛祖保佑             永无BUG 
          佛曰:  
                  写字楼里写字间，写字间里程序员；  
                  程序人员写程序，又拿程序换酒钱。  
                  酒醒只在网上坐，酒醉还来网下眠；  
                  酒醉酒醒日复日，网上网下年复年。  
                  但愿老死电脑间，不愿鞠躬老板前；  
                  奔驰宝马贵者趣，公交自行程序员。  
                  别人笑我忒疯癫，我笑自己命太贱；  
                  不见满街漂亮妹，哪个归得程序员？ 
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Sockets;
using System.Reflection;
using System.Runtime.Remoting.Proxies;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Caching;
using System.Xml;
using System.Xml.Linq;

using Notify.Solution.Code.Extension;
using Notify.Solution.Test;
using Notify.Solution.Test.XmlStudy;

namespace Notify.Solution.Test
{
    using System.Data.SqlClient;
    using System.Globalization;
    using System.Runtime.Remoting.Messaging;
    using System.Runtime.Serialization.Json;
    using System.ServiceModel;
    using System.Text.RegularExpressions;

    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    using Notify.Solution.Code.Common.Model;
    using Notify.Solution.Code.IdentityCard;
    using Notify.Solution.Code.Utility;
    using System.ServiceModel.Channels;

    class Program
    {
        /// <summary>
        /// The main.
        /// </summary>
        public static void Main()
        {
            //StartWCFService();
            //ClientWCF();
           
            Console.ReadLine();
        }
        static void sql_OnChange(object sender, SqlNotificationEventArgs e)
        {
            throw new NotImplementedException();
        }

        public class Qu
        {
            static Qu()
            {
                Thread tread = new Thread(run);
                tread.Start();

            }

            /// <summary>
            /// The queue.
            /// </summary>
            public static readonly Queue<Q> queue = new Queue<Q>();
            public string ex(Q task)
            {
                queue.Enqueue(task);
                string rel = string.Empty;
                while (true)
                {
                    if (task.Resulut != null)
                    {
                        rel = task.Resulut;
                        break;
                    }
                }

                return rel;
            }
            public static void run()
            {
                while (true)
                {
                    if (queue.Any())
                    {
                        var tase = queue.Dequeue();
                        if (tase.Action != null)
                        {
                            tase.Action();
                        }
                        tase.Resulut = "完成";
                    }
                    Thread.Sleep(500);
                }
            }
        }

        public class Q
        {
            /// <summary>
            /// 异步完成
            /// </summary>
            public Action Action { get; set; }

            /// <summary>
            /// 结果
            /// </summary>
            public string Resulut { get; set; }
        }

        /// <summary>
        /// 求2个集合的差集
        /// </summary>
        public class wage
        {
            public static void Test()
            {
                List<wage> list1 = new List<wage>
                                       {
                                           new wage { Id = 1, Name = "list1" },
                                           new wage { Id = 2, Name = "list1" },
                                           new wage { Id = 3, Name = "list1" },
                                           new wage { Id = 5, Name = "list1" },
                                           new wage { Id = 6, Name = "list1" }
                                       };
                List<wage> list2 = new List<wage>
                                       {
                                           new wage { Id = 1,Name = "list2", },
                                           new wage { Id = 2, Name = "list2", },
                                           new wage { Id = 3, Name = "list2", },
                                           new wage { Id = 4, Name = "list2", },
                                           new wage { Id = 5, Name = "list2", }
                                       };

                ////var union = list1.Union(list2, new MyComparer()).ToList();
                ////var intersect = list1.Intersect(list2, new MyComparer()).ToList();
                ////var except = union.Except(intersect, new MyComparer()).ToList();

                var result = list1.Union(list2, new MyComparer()).Except(list1.Intersect(list2, new MyComparer()), new MyComparer());
                foreach (var item in result)
                {
                    Console.WriteLine("id = {0},  name = {1}", item.Id, item.Name);
                }
            }

            public int Id { get; set; }

            public string Name { get; set; }

            public class MyComparer : IEqualityComparer<wage>
            {
                public bool Equals(wage x, wage y)
                {
                    return x.Id == y.Id;
                }

                public int GetHashCode(wage obj)
                {
                    return obj.Id;
                }
            }
        }

        public static string ToCamelCase(string s)
        {
            if (string.IsNullOrEmpty(s))
            {
                return s;
            }
            if (!char.IsUpper(s[0]))
            {
                return s;
            }
            char[] chArray = s.ToCharArray();
            for (int i = 0; i < chArray.Length; i++)
            {
                bool flag = (i + 1) < chArray.Length;
                if (((i > 0) && flag) && !char.IsUpper(chArray[i + 1]))
                {
                    break;
                }
                chArray[i] = char.ToLower(chArray[i], CultureInfo.InvariantCulture);
            }
            return new string(chArray);
        }

        private static void Splirt()
        {
            string str = "a.b，a.b.c";
            Regex reg = new Regex("([^,]{0,}),([^,]{0,})");
            var m = reg.Matches(str);
            foreach (Match item in m)
            {
                var r = item.Groups[0];
                var r1 = item.Groups[1];
            }
        }

        private static void NewtonsoftDeserialize()
        {
            var tt = new { Name = "aaa", val = "ss", inz = 9 };

            string str = tt.NewtonsoftSerialize();

            dynamic dy = str.NewtonsoftDeserialize();

            var name = dy.Name;

            if (dy.tt != null)
            {
                Console.WriteLine(dy.tt);
            }
            if (dy.val != null)
            {
                Console.WriteLine(dy.val);
            }
            if (dy.inz != null && dy.inz.Value != 0)
            {
            }

            Console.WriteLine(name);
        }

        private static void ClientWCF()
        {
            var result = TestWCF.GetMessage();
            Console.WriteLine(result);
        }

        private static void StartWCFService()
        {
            ServiceHost host = new ServiceHost(typeof(Notify.Solution.Test.WCF.Service));
            if (host.State != CommunicationState.Opening)
            {
                host.Open();
            }
        }

        private static void Validator()
        {
            // 正确的
            Validator v = new Validator("330719196804253671");
            var rel = v.Execute();

            // 错误的 更改第5位数
            Validator v1 = new Validator("330729196804253671");
            var rel1 = v1.Execute();

            var rr = IsIdentityCard("330729196804253671");
        }

        private static void Regxe()
        {
            string str = File.ReadAllText(@"C:\Users\liuxiaoji\Desktop\cc.txt", Encoding.UTF8);
            string regexstr = @"(<[^<>]*?span[^<>]*?((left-pos)|(right-pos)|(space))[^<>]*?[^>]*?>)|(<[^<>]*?/span[^<>]*?>)";
            str = Regex.Replace(str, regexstr, string.Empty, RegexOptions.IgnoreCase);
        }

        private static void Regex1()
        {
            string str = File.ReadAllText(@"C:\Users\rongbo\Desktop\source.txt", Encoding.UTF8);
            str = str.ToLower();

            string reg1 = "(?![^>]*(?=<))(?=width|cellspacing|cellpadding|class|height|nowrap)\\b[^\\s]+=[\"']?[^\"']*[\"']?(?=\\s|>)|(</?([p]|(strong)|(span))+[^><]*>)|(&nbsp[;]*)|((?=padding|background|color|font)[^;]*[;\"])";
            str = Regex.Replace(str, reg1, string.Empty, RegexOptions.IgnoreCase);

            /*
             * 思路分析
             * 分3不解决问题
             * 3个正则逐步解决问题
             */
            ////删除属性
            string attributeReg = "(?![^>]*(?=<))(?=width|style|cellspacing|cellpadding|class|height|nowrap)\\b[^\\s]+=[\"']?[^\"']*[\"']?(?=\\s|>)";
            str = Regex.Replace(str, attributeReg, string.Empty, RegexOptions.IgnoreCase);
            ////删除标签
            string tagReg = "</?([p]|(strong)|(span))+[^><]*>";
            str = Regex.Replace(str, tagReg, string.Empty, RegexOptions.IgnoreCase);
            ////删除空格
            string nbspReg = "&nbsp[;]*";
            str = Regex.Replace(str, nbspReg, string.Empty, RegexOptions.IgnoreCase);

            //// 综合上述问题3个正则合并为一个正则
            string reg = "(?![^>]*(?=<))(?=width|style|cellspacing|cellpadding|class|height|nowrap)\\b[^\\s]+=[\"']?[^\"']*[\"']?(?=\\s|>)|(</?([p]|(strong)|(span))+[^><]*>)|(&nbsp[;]*)";
            str = Regex.Replace(str, reg, string.Empty, RegexOptions.IgnoreCase);
        }

        private static void Regex2()
        {
            string str = File.ReadAllText(@"C:\Users\rongbo\Desktop\source.txt", Encoding.UTF8);
            var count = Regex.Matches(str, @"\r\n").Count;
        }

        /// <summary>
        /// 使用正则表达式验证是否是身份证，包含以下三种情况：
        ///     (1):身份证号码为15位数字
        ///     (2):身份证号码为18位数字
        ///     (3):身份证号码为17位数字+1个字母
        /// </summary>
        /// <param name="value">传递需要验证的字符串信息</param>
        /// <returns>返回验证是否通过的标志</returns>
        public static bool IsIdentityCard(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return false;
            }

            //模式字符串
            var pattern = new StringBuilder();
            pattern.Append(@"^(11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|");
            pattern.Append(@"50|51|52|53|54|61|62|63|64|65|71|81|82|91)");
            pattern.Append(@"(\d{13}|\d{15}[\dx])$");
            //验证身份证信息是否正确
            return Regex.IsMatch(value.Trim(), pattern.ToString());
        }
    }

    public static class MyEnumerable
    {
        /// <summary>
        /// 多条件排序扩展方法
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="sources">sources</param>
        /// <param name="keySelector">keySelector</param>
        /// <returns>排序结果</returns>
        public static IEnumerable<TSource> Sort<TSource>(this IEnumerable<TSource> sources, params KeyValuePair<bool, Func<TSource, object>>[] keySelector)
        {
            if (sources == null)
            {
                throw new ArgumentNullException("sources");
            }

            IOrderedEnumerable<TSource> orderBys = null;
            int i = 0;
            foreach (var func in keySelector)
            {
                if (i == 0)
                {
                    orderBys = func.Key ? sources.OrderBy(func.Value) : sources.OrderByDescending(func.Value);
                }
                else
                {
                    if (orderBys != null)
                    {
                        orderBys = func.Key ? orderBys.ThenBy(func.Value) : orderBys.ThenByDescending(func.Value);
                    }
                }

                i++;
            }

            return orderBys;
        }

        /// <summary>
        ///  获取最大值的当前对象
        /// </summary>
        /// <typeparam name="TElement">TElement</typeparam>
        /// <typeparam name="TData">TData</typeparam>
        /// <param name="source">source</param>
        /// <param name="selector">selector</param>
        /// <returns>MaxValue</returns>
        public static TElement MaxElement<TElement, TData>(this IEnumerable<TElement> source, Func<TElement, TData> selector)
            where TData : IComparable<TData>
        {
            return ComparableElement(source, selector, true);
        }

        /// <summary>
        ///  获取最小值的当前对象
        /// </summary>
        /// <typeparam name="TElement">TElement</typeparam>
        /// <typeparam name="TData">TData</typeparam>
        /// <param name="source">source</param>
        /// <param name="selector">selector</param>
        /// <returns>MaxValue</returns>
        public static TElement MinElement<TElement, TData>(this IEnumerable<TElement> source, Func<TElement, TData> selector)
          where TData : IComparable<TData>
        {
            return ComparableElement(source, selector, false);
        }

        /// <summary>
        ///  获取最大or最小值的当前对象
        /// </summary>
        /// <typeparam name="TElement">TElement</typeparam>
        /// <typeparam name="TData">TData</typeparam>
        /// <param name="source">source</param>
        /// <param name="selector">selector</param>
        /// <param name="isMax">最大还是最小</param>
        /// <returns>MaxValue</returns>
        private static TElement ComparableElement<TElement, TData>(IEnumerable<TElement> source, Func<TElement, TData> selector, bool isMax)
            where TData : IComparable<TData>
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            if (selector == null)
            {
                throw new ArgumentNullException("selector");
            }

            bool firstElement = true;
            TElement result = default(TElement);
            TData maxValue = default(TData);
            foreach (TElement element in source)
            {
                var candidate = selector(element);
                if (!firstElement)
                {
                    if (isMax && candidate.CompareTo(maxValue) <= 0)
                    {
                        continue;
                    }

                    if (!isMax && candidate.CompareTo(maxValue) > 0)
                    {
                        continue;
                    }
                }

                firstElement = false;
                maxValue = candidate;
                result = element;
            }

            return result;
        }
    }

    public class ContactComparer : IEqualityComparer<Contact>
    {
        public bool Equals(Contact x, Contact y)
        {
            return x.CompanyId == y.CompanyId;
        }

        public int GetHashCode(Contact a)
        {
            return a.CompanyId.GetHashCode();
        }
    }

    public class Contact
    {
        public int CompanyId { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public static IEnumerable<Contact> Defaults
        {
            get
            {
                return new List<Contact>
                           {
                               new Contact { CompanyId = 1, Name = "简简单单", Phone = "1355645455", Address = "北京" },
                               new Contact { CompanyId = 2,  Name = "冻豆腐", Phone = "1254624155654", Address = "成都" },
                               new Contact { CompanyId = 3,  Name = "战", Phone = "025965456645", Address = "广州" },
                               new Contact { CompanyId = 3,  Name = "王琦", Phone = "965465469", Address = "上海" },
                               new Contact { CompanyId = 1,  Name = "机制", Phone = "15465875", Address = "重庆" },
                               new Contact { CompanyId = 6,  Name = "万古", Phone = "16854545545", Address = "昆明" },
                               new Contact { CompanyId = 6,  Name = "万古", Phone = "16854545545", Address = "昆明" },
                               new Contact { CompanyId = 6,  Name = "刘小吉", Phone = "16854545545", Address = "昆明" },
                               new Contact { CompanyId = 6,  Name = "刘小吉", Phone = "16854545545", Address = "昆明" },
                           };
            }
        }

        public static IEnumerable<Contact> Defaults1
        {
            get
            {
                return new List<Contact>
                           {
                               new Contact { CompanyId = 7, Name = "打架", Phone = "1355645455", Address = "北京" },
                               new Contact { CompanyId = 8,  Name = "肯定", Phone = "1254624155654", Address = "成都" },
                               new Contact { CompanyId = 9,  Name = "战", Phone = "025965456645", Address = "广州" },
                               new Contact { CompanyId = 1,  Name = "刘芳菲", Phone = "965465469", Address = "上海" },
                               new Contact { CompanyId = 2,  Name = "两个", Phone = "15465875", Address = "重庆" },
                               new Contact { CompanyId = 4,  Name = "开发方法 ", Phone = "16854545545", Address = "昆明" },
                           };
            }
        }
    }

    public class Company
    {
        public int Id { get; set; }

        public string CompanyName { get; set; }

        public bool IsAdministrator { get; set; }

        public int Type { get; set; }

        public string History { get; set; }

        public static IEnumerable<Company> Defaults
        {
            get
            {
                return new List<Company>
                           {
                               new Company
                                   {
                                       Id = 1,
                                       CompanyName = "去哪儿",
                                       IsAdministrator = true,
                                       Type = 1,
                                       History = "暂无"
                                   },
                               new Company
                                   {
                                       Id = 2,
                                       CompanyName = "完美国际",
                                       IsAdministrator = true,
                                       Type = 1,
                                       History = "暂无"
                                   },
                               new Company
                                   {
                                       Id = 3,
                                       CompanyName = "腾讯",
                                       IsAdministrator = true,
                                       Type = 1,
                                       History = "暂无"
                                   },
                               new Company
                                   {
                                       Id = 4,
                                       CompanyName = "淘宝",
                                       IsAdministrator = true,
                                       Type = 1,
                                       History = "暂无"
                                   },
                               new Company
                                   {
                                       Id = 5,
                                       CompanyName = "京东",
                                       IsAdministrator = true,
                                       Type = 1,
                                       History = "暂无"
                                   },
                               new Company
                                   {
                                       Id = 6,
                                       CompanyName = "苏宁",
                                       IsAdministrator = true,
                                       Type = 1,
                                       History = "暂无"
                                   },
                               new Company
                                   {
                                       Id = 7,
                                       CompanyName = "携程",
                                       IsAdministrator = true,
                                       Type = 1,
                                       History = "暂无"
                                   },
                           };
            }
        }
    }

    public sealed class Product
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public double Value { get; set; }

        public override string ToString()
        {
            return string.Format("[{0}: {1} - {2}]", this.Id, this.Category, this.Value);
        }

        public static List<Product> GetList()
        {
            var products = new List<Product>
                               {
                                   new Product { Id = 1, Category = "Electronics", Value = 15.0 },
                                   new Product { Id = 2, Category = "Groceries", Value = 40.0 },
                                   new Product { Id = 3, Category = "Garden", Value = 210.3 },
                                   new Product { Id = 4, Category = "Pets", Value = 2.1 },
                                   new Product { Id = 5, Category = "Electronics", Value = 19.95 },
                                   new Product { Id = 6, Category = "Pets", Value = 21.25 },
                                   new Product { Id = 7, Category = "Pets", Value = 5.50 },
                                   new Product { Id = 8, Category = "Garden", Value = 13.0 },
                                   new Product { Id = 9, Category = "Automotive", Value = 10.0 },
                                   new Product { Id = 10, Category = "Electronics", Value = 250.0 },
                               };
            return products;
        }
    }

    class Student
    {
        public int Score { get; set; }

        public Student(int score)
        {
            this.Score = score;
        }
    }

    class Teacher
    {
        public string Name { get; set; }

        public List<Student> Students;

        public Teacher(string order, List<Student> students)
        {
            this.Name = order;

            this.Students = students;
        }
    }

    internal class Book
    {
        public string Title { get; set; }

        public int PageCount { get; set; }
    }

    public class MyClass
    {
        public void Lambda()
        {
            // 定义变量
            ParameterExpression book = Expression.Parameter(typeof(Book), "book");

            // book.Title != "Funny Stories"
            MemberExpression leftTitle = Expression.Property(book, "Title");
            ConstantExpression rightTitle = Expression.Constant("Funny Stories", typeof(string));
            BinaryExpression titleExpression = Expression.NotEqual(leftTitle, rightTitle);

            MemberExpression leftPageCount = Expression.Property(book, "PageCount");
            ConstantExpression rightPageCount = Expression.Constant(100, typeof(int));
            BinaryExpression pageCountExpression = Expression.GreaterThan(leftPageCount, rightPageCount);

            BinaryExpression andExpression = Expression.And(titleExpression, pageCountExpression);
            LambdaExpression predicate = Expression.Lambda(andExpression, book);
            IEnumerable<Book> query = Enumerable.Where(new List<Book>(), (Func<Book, bool>)predicate.Compile());
        }

        public void LinqToFile()
        {
            var r = from line in File.ReadAllLines("123.txt") select line;
        }
    }

    public static class S
    {
        #region 拆分字符串
        /// <summary>
        /// 根据字符串拆分字符串
        /// </summary>
        /// <param name="source">要拆分的字符串</param>
        /// <param name="separator">拆分符</param>
        /// <returns>数组</returns>
        public static string[] Split(this string source, string separator)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            if (separator == null)
            {
                throw new ArgumentNullException("separator");
            }

            string[] strtmp = new string[1];
            // ReSharper disable once StringIndexOfIsCultureSpecific.2
            int index = source.IndexOf(separator, 0);
            if (index < 0)
            {
                strtmp[0] = source;
                return strtmp;
            }

            strtmp[0] = source.Substring(0, index);
            return Split(source.Substring(index + separator.Length), separator, strtmp);
        }

        /// <summary>
        /// 采用递归将字符串分割成数组
        /// </summary>
        /// <param name="source">要拆分的字符串</param>
        /// <param name="separator">拆分符</param>
        /// <param name="attachArray">attachArray</param>
        /// <returns>string[]</returns>
        private static string[] Split(string source, string separator, string[] attachArray)
        {
            // while循环的方式
            while (true)
            {
                string[] strtmp = new string[attachArray.Length + 1];
                attachArray.CopyTo(strtmp, 0);

                // ReSharper disable once StringIndexOfIsCultureSpecific.2
                int index = source.IndexOf(separator, 0);
                if (index < 0)
                {
                    strtmp[attachArray.Length] = source;
                    return strtmp;
                }

                strtmp[attachArray.Length] = source.Substring(0, index);
                source = source.Substring(index + separator.Length);
                attachArray = strtmp;
            }

            // 递归的方式
            /*
            string[] strtmp = new string[attachArray.Length + 1];
            attachArray.CopyTo(strtmp, 0);

            // ReSharper disable once StringIndexOfIsCultureSpecific.2
            int index = source.IndexOf(separator, 0);
            if (index < 0)
            {
                strtmp[attachArray.Length] = source;
                return strtmp;
            }
            else
            {
                strtmp[attachArray.Length] = source.Substring(0, index);
                return Split(source.Substring(index + separator.Length), separator, strtmp);
            }*/
        }

        #endregion
    }

    public class Bill
    {
        public Bill(decimal a)
        {

        }

        public decimal Amount { get; set; }

        public string Name { get; set; }

        public int Count { get; set; }
    }
}

/// <summary>
/// 账单
/// </summary>
public class Bill
{
    /// <summary>
    /// 添加公司信息(当方法参数超过5个以上必须封装)
    /// </summary>
    /// <param name="company">公司信息</param>
    public void AddCompany(Company company)
    {

    }
}

/// <summary>
/// linq
/// </summary>
public class Linq
{
    /// <summary>
    /// 测试
    /// </summary>
    public static void Test()
    {
        try
        {
            Aggregate1();
            Aggregate2();
            Aggregate3();
            All();
            Any();
            Any1();
            Average1();
            Cast();
            Concat();
            Contains();
            DefaultIfEmpty();
            Distinct();
            ElementAt();
            First();
            OrderBy();
            Select();
            SelectMany();
            Skip();
            Where();
        }
        catch (Exception)
        {
        }
    }

    /// <summary>
    /// 对序列应用累加器函数。 
    /// </summary>
    public static void Aggregate1()
    {
        // 1+2+3+4+5
        var numbers = GetArray(5);
        var result = numbers.Aggregate<int>((a, b) => a + b);
        Console.WriteLine("和为:{0}", result);
        /*
         * Aggregate 接收一个 Func<TSource, TSource, TSource> func 参数
         * 要对每个元素调用的累加器函数
         * 累加器的最终值
         * 所以1-5的最终累加结果为15
         * 如果在1-5累加的时候 需要首先加个5怎么办 见 Aggregate2()
         */
    }

    /// <summary>
    ///  对序列应用累加器函数。 将指定的种子值用作累加器初始值。 
    /// </summary>
    public static void Aggregate2()
    {
        // 1+2+3+4+5
        var numbers = GetArray(5);
        var result = numbers.Aggregate<int, int>(5, (a, b) => a + b);
        Console.WriteLine("和为:{0}", result);
        /*
         * Aggregate 接收2个参数 TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func
         * seed 累加器的初始值
         * func 要对每个元素调用的累加器函数
         * 累加器的最终值
         * 所以1-5的最终累加结果为20 因为累加的初始值是5
         * 如果要对最终结果 在-2 怎么处理呢 Aggregate3()
         */
    }

    /// <summary>
    ///  对序列应用累加器函数。 将指定的种子值用作累加器初始值。 
    /// </summary>
    public static void Aggregate3()
    {
        // 1+2+3+4+5
        var numbers = GetArray(5);
        var result = numbers.Aggregate<int, int, int>(5, (a, b) => a + b, rel => rel - 2);
        Console.WriteLine("和为:{0}", result);
        /*
         * Aggregate 接收3个参数 TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func, Func<TAccumulate, TResult> resultSelector
         * seed 累加器的初始值
         * func 要对每个元素调用的累加器函数
         * resultSelector 结果处理
         * 累加器的最终值
         * 所以1-5的最终累加结果为18 因为累加的初始值是5 并且最终几个会 -2
         * 
         */
    }

    /// <summary>
    /// 确定序列中的所有元素是否满足条件
    /// </summary>
    public static void All()
    {
        var list = Book.Books;

        // 这个集合中是否 所有的页数都大于200页 如果都大于则返回true否则返回 false
        var result = list.All(item => item.PageCount > 100);
    }

    /// <summary>
    /// 确定序列是否包含任何元素
    /// </summary>
    public static void Any()
    {
        var list = Book.Books;

        // 这个集合是否有元素 如果存在则有true 否则 返回false
        var result = list.Any();
    }

    /// <summary>
    /// 确定序列是否包含任何元素
    /// </summary>
    public static void Any1()
    {
        var list = Book.Books;

        // 这个集合中是否 包含的页数大于200页的元素 如果包含则返回true否则返回 false
        var result = list.Any(item => item.PageCount > 200);
    }

    /// <summary>
    /// 计算可以为 null 的 System.Decimal 值序列的平均值。
    /// </summary>
    public static void Average1()
    {
        var numbers = GetArray(5);

        // 平均值
        var result = numbers.Average();

        // 最大值
        var rel = numbers.Max();

        // 最小值
        var rel1 = numbers.Min();

        // 求和
        var rel2 = numbers.Sum();

        var list = Book.Books;
    }

    /// <summary>
    /// 计算序列的平均值。
    /// </summary>
    public static void Average2()
    {
        var list = Book.Books;

        // 求平均页数
        var result = list.Average(item => item.PageCount);
    }

    /// <summary>
    /// 将 System.Collections.IEnumerable 的元素强制转换为指定的类型
    /// </summary>
    public static void Cast()
    {
        // 首先创建一个以前版本的集合
        ArrayList arraylist = new ArrayList();

        // 原本希望在这里初始化，但是这个初始化功能不支持以前的版本
        arraylist.Add("111");
        arraylist.Add("222333");
        arraylist.Add("333333333");
        arraylist.Add("xxxxxxxxx");

        // 数据类型不一直的时候 Cast会抛出异常OfType 则会返回一个空序列 
        // IEnumerable<int> lists = arraylist.Cast<int>();
        IEnumerable<int> lists = arraylist.OfType<int>();
        foreach (int list in lists)
        {
            Console.WriteLine(list);
        }
    }

    /*Concat/Union/Intersect/Except操作*/
    /*
     * 连接操作
     * Concat  :连连接两个序列
     * Union  : 通过使用默认的相等比较器生成两个序列的并集
     * Intersect : 通过使用默认的相等比较器对值进行比较生成两个序列的交集
     * Except : 排除相交项；延迟。即是从某集合中删除与另一个集合中相同的项。先遍历第一个集合，找出所有唯一的元素，然后再遍历第二个集合，返回第二个集合中所有未出现在前面所得元素集合中的元素
     */

    /// <summary>
    /// 连连接两个序列
    /// </summary>
    public static void Concat()
    {
        // 假设有两序列：
        var a = new List<int> { 1, 1, 2, 3, 4 };
        var b = new List<int> { 4, 5, 5, 6, 7 };
        /*
         * 那么A.Concat(B) 表示将A序列和B序列串联起来，以创建新的序列，不去除重复部分;
         * A.Union(B)表示将A序列和B序列串联起来，并去除重复部分，以创建新的序列;
         * 而A.Intersect(B) 只取A序列和B序列相同的部分(交集)，以创建新的序列。
         * Except则是差集
         */
        var concat = a.Concat(b).ToList();
        var union = a.Union(b).ToList();
        var intersect = a.Intersect(b).ToList();
        var except = a.Except(b).ToList();
    }

    /// <summary>
    /// 通过使用默认的相等比较器确定序列是否包含指定的元素
    /// </summary>
    public static void Contains()
    {
        IEnumerable<int> a = new List<int> { 1, 1, 2, 3, 4 };

        // 序列是否包含 元素3
        bool rel = a.Contains(3);

        var list = Book.Books;

        // 使用自定义比较器
        bool rel1 = list.Contains(new Book { Title = "C#" }, new BookEqualityComparer());
    }

    /// <summary>
    /// 返回序列中的元素数量。
    /// </summary>
    public static void Count()
    {
        var list = Book.Books;
        var count = list.Count();
        var count1 = list.Count(item => item.Title == "C#");
    }

    /// <summary>
    /// 返回指定序列的元素；如果序列为空，则返回单一实例集合中的类型参数的默认值。
    /// </summary>
    public static void DefaultIfEmpty()
    {
        IEnumerable<Book> list = new List<Book>();
        var rek = list.DefaultIfEmpty();
        var rek1 = list.DefaultIfEmpty(new Book { Title = "VV" });
    }

    /// <summary>
    /// 去除重复
    /// </summary>
    public static void Distinct()
    {
        IEnumerable<int> a = new List<int> { 1, 1, 2, 3, 4 };
        var rel = a.Distinct();
    }

    /// <summary>
    /// 返回序列中指定索引处的元素。
    /// </summary>
    public static void ElementAt()
    {
        IEnumerable<int> a = new List<int> { 1, 1, 2, 3, 4 };

        // 返回索引为3的元素
        var rel = a.ElementAt(3);

        // 返回序列中指定索引处的元素；如果索引超出范围，则返回默认值。
        // int类型的默认值 则为0
        var rel1 = a.ElementAtOrDefault(50);
    }

    /// <summary>
    /// 返回元素第一个元素
    /// </summary>
    public static void First()
    {
        var a = Book.Books;

        // 返回第一个元素 没有元素则报错
        var r1 = a.First();

        // 返回第一个元素 没有元素则返回默认值
        var r2 = a.FirstOrDefault();

        // 返回序列的唯一元素；如果该序列并非恰好包含一个元素，则会引发异常
        // var r3 = a.Single();

        // 返回序列中的唯一元素；如果该序列为空，则返回默认值；如果该序列包含多个元素，此方法将引发异常。
        // var r4 = a.SingleOrDefault();

        // 返回最后一个元素 没有元素则报错
        var r5 = a.Last();

        // 返回最后一个元素 没有元素则返回默认值
        var r6 = a.LastOrDefault();
    }

    /// <summary>
    /// 分组
    /// </summary>
    public static void GroupBy()
    {
        var list = Book.Books;

        // 计数
        var q = from p in list
                group p by p.Title into g
                select new
                {
                    g.Key,
                    NumProducts = g.Count()
                };

        // 带条件计数
        var q1 = from p in list
                 group p by p.Title into g
                 select new
                 {
                     g.Key,
                     NumProducts = g.Count(p => p.PageCount > 200)
                 };

        // Where限制
        var q2 = from p in list
                 group p by p.Title into g
                 where g.Count() >= 10
                 select new
                 {
                     g.Key,
                     NumProducts = g.Count(p => p.PageCount > 200)
                 };

        // 多列(Multiple Columns)
        var categories = from p in list group p by new { p.Title, p.PageCount } into g select new { g.Key, g };

        // 表达式(Expression)
        var categories1 = from p in list group p by new { Criterion = p.PageCount > 10 } into g select g;
    }

    /// <summary>
    /// 排序
    /// </summary>
    public static void OrderBy()
    {
        var list = Book.Books;

        // 根据页码升序
        var rel1 = list.OrderBy(o => o.PageCount);

        // 根据页码+标题升序
        var rel11 = list.OrderBy(o => o.PageCount).ThenBy(o => o.Title);

        // 根据页码降序
        var rel2 = list.OrderByDescending(o => o.PageCount);

        // 根据页码+标题降序
        var rel22 = list.OrderByDescending(o => o.PageCount).ThenByDescending(o => o.Title);

        // 根据标题的长度升序 排序
        var rel = list.OrderBy(o => o.Title, new BookComparer()).ToList();
    }

    /// <summary>
    /// 投影
    /// </summary>
    public static void Select()
    {
        var list = Book.Books;

        // 投影一个新的集合
        var select = list.Select(item => new { T = item.Title });

        // 投影一个待索引的集合
        var select1 = list.Select((item, index) => new { I = index });
    }

    /// <summary>
    /// 将序列的每个元素投影并将结果序列合并为一个序列。
    /// </summary>
    public static void SelectMany()
    {
        /*
         * 类School下面有一个Class的集合，每个Class下面有有一个Student的集合。每个学生有Name和Sex两个属性。现在需要遍历School下面的所有的学生，当然我们可以用两个嵌套的foreach语句类遍历School下面的所有的Class，然后再用foreach来遍历Class下面的所有的Student，把他们添加到一个List里去。这个场景也是实际编程中经常遇到的。有了Linq我们就可以大大的简化我们的代码：
         */

        // 初始化数据  
        School s = new School();
        for (int i = 0; i < 5; i++)
        {
            s.Classes.Add(new Class());
        }
        s.Classes[0].Students.Add(new Student(1, "a0"));
        s.Classes[1].Students.Add(new Student(1, "b0"));
        s.Classes[2].Students.Add(new Student(0, "c0"));
        s.Classes[3].Students.Add(new Student(0, "d0"));
        s.Classes[4].Students.Add(new Student(0, "e0"));
        s.Classes[0].Students.Add(new Student(0, "a1"));
        s.Classes[0].Students.Add(new Student(1, "a1"));
        s.Classes[0].Students.Add(new Student(1, "a2"));
        s.Classes[0].Students.Add(new Student(1, "a3"));
        s.Classes[1].Students.Add(new Student(0, "b1"));
        s.Classes[2].Students.Add(new Student(0, "c1"));
        s.Classes[3].Students.Add(new Student(0, "d1"));

        // 取出school下的所有性别是0的student  
        var x = s.Classes.SelectMany(b => b.Students).Where(i => i.Sex == 0);
        foreach (var b in x)
        {
            Console.WriteLine(b.Name);
        }

        // 合并
        var x1 = s.Classes.SelectMany(b => b.Students, (a, c) => new { a.Students.Count, c.Name });
    }

    /// <summary>
    ///  跳过序列中指定数量的元素，然后返回剩余的元素。
    /// </summary>
    public static void Skip()
    {
        var list = Book.Books;

        // 跳高前2个元素
        var rel = list.Skip(2);

        // 只要满足指定的条件，就跳过序列中的元素，然后返回剩余元素。
        var rel1 = list.SkipWhile(iem => iem.PageCount < 2000).ToList();

        // 返回前2个元素
        var rel2 = list.Take(2);

        // 只要满足指定的条件，就会返回序列的元素。
        var rel3 = list.TakeWhile(w => w.PageCount < 2000).ToList();
    }

    /// <summary>
    /// 查询
    /// </summary>
    public static void Where()
    {
        var list = Book.Books;

        // 页码大于2000页的
        var rel = list.Where(w => w.PageCount > 2000);

        // 页码大于2000页的 并且索引大于2
        var rel1 = list.Where((a, b) => a.PageCount > 2000 && b > 2);
    }

    /// <summary>
    /// 比较器
    /// </summary>
    public class BookComparer : IComparer<string>
    {
        /// <summary>
        /// 实现
        /// </summary>
        /// <param name="x">x</param>
        /// <param name="y">y</param>
        /// <returns>一个有符号整数，指示 x 与 y 的相对值，如下表所示。 值 含义 小于零 x 小于 y。 零 x 等于 y。 大于零 x 大于 y</returns>
        public int Compare(string x, string y)
        {
            if (x.Length > y.Length)
            {
                return 1;
            }
            else if (x.Length < y.Length)
            {
                return -1;
            }

            return 0;
        }
    }

    /// <summary>
    /// 书籍比较器
    /// </summary>
    public class BookEqualityComparer : IEqualityComparer<Book>
    {
        /// <summary>
        /// 比较器
        /// </summary>
        /// <param name="x">x</param>
        /// <param name="y">y</param>
        /// <returns>结果</returns>
        public bool Equals(Book x, Book y)
        {
            return x.Title == y.Title;
        }

        /// <summary>
        /// GetHashCode
        /// </summary>
        /// <param name="obj">obj</param>
        /// <returns>HashCode</returns>
        public int GetHashCode(Book obj)
        {
            return obj.Title.GetHashCode();
        }
    }

    /// <summary>
    /// 获取一个值的集合
    /// </summary>
    /// <param name="max">最大值</param>
    /// <returns>一个值的集合</returns>
    public static IEnumerable<int> GetArray(int max)
    {
        List<int> result = new List<int>(max);
        for (int i = 0; i < max; i++)
        {
            result.Add(i + 1);
        }
        return result;
    }

    /// <summary>
    /// 书籍
    /// </summary>
    public class Book
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 页数
        /// </summary>
        public int PageCount { get; set; }

        /// <summary>
        /// 默认的书籍集合
        /// </summary>
        public static IEnumerable<Book> Books
        {
            get
            {
                return new List<Book>
                           {
                               new Book { Title = "C#", PageCount = 1200 },
                               new Book { Title = "MVC", PageCount = 2200 },
                               new Book { Title = "ASP.NET", PageCount = 12200 },
                               new Book { Title = "java", PageCount = 1500 },
                               new Book { Title = "jquery", PageCount = 2140 },
                           };
            }
        }
    }

    /// <summary>
    /// 学校
    /// </summary>
    public class School
    {
        /// <summary>
        /// m_Classes
        /// </summary>
        private IList<Class> classes = new List<Class>();

        /// <summary>
        /// Classes
        /// </summary>
        internal IList<Class> Classes
        {
            get { return this.classes; }
            set { this.classes = value; }
        }
    }

    /// <summary>
    /// class
    /// </summary>
    public class Class
    {
        /// <summary>
        /// m_Students
        /// </summary>
        private IList<Student> students = new List<Student>();

        /// <summary>
        /// Students
        /// </summary>
        internal IList<Student> Students
        {
            get { return this.students; }
            set { this.students = value; }
        }
    }

    /// <summary>
    /// 学生
    /// </summary>
    public class Student
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Student"/> class.
        /// </summary>
        /// <param name="i">
        /// The i.
        /// </param>
        /// <param name="name">
        /// The name.
        /// </param>
        public Student(int i, string name)
        {
            this.Sex = i;
            this.Name = name;
        }

        /// <summary>
        /// 姓名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 性别
        /// </summary>
        public int Sex { get; set; }
    }
}

public class TaskPool<T> : IDisposable
{
    /// <summary>
    /// 正在操作的线程
    /// </summary>
    private static readonly Dictionary<string, Task<T>> taskPool = new Dictionary<string, Task<T>>();

    public bool Execte(string key, Task<T> value)
    {
        if (taskPool.ContainsKey(key))
        {
            return false;
        }

        taskPool.Add(key, value);
        value.Start();
        value.ContinueWith(a => { taskPool.Remove(key); });
        while (value.IsCompleted || value.IsCanceled || value.IsFaulted)
        {
            return true;
        }

        return false;
    }

    /// <summary>
    /// 释放
    /// </summary>
    public void Dispose()
    {
        throw new NotImplementedException();
    }
}

public class MutexTask
{
    /// <summary>
    /// 获取一个信号量
    /// </summary>
    /// <param name="lockName">名称</param>
    /// <param name="timeoutMill">超时时间(毫秒)</param>
    /// <returns>结果</returns>
    public static bool LockUp(string lockName, int timeoutMill)
    {
        Mutex mutex;
        if (!Mutex.TryOpenExisting(lockName, out mutex))
        {
            mutex = new Mutex(true, lockName);
        }
        return !mutex.WaitOne(timeoutMill);
    }

    /// <summary>
    /// 释放信号量
    /// </summary>
    /// <param name="lockName">名称</param>
    public static void UnLock(string lockName)
    {
        Mutex mutex;
        if (Mutex.TryOpenExisting(lockName, out mutex))
        {
            mutex.ReleaseMutex();
        }
    }
}

public class Imag
{
    public static void Test()
    {
        int port = 6000;
        string host = "127.0.0.1";

        IPAddress ip = IPAddress.Parse(host);
        IPEndPoint ipe = new IPEndPoint(ip, port);

        Socket sSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
        sSocket.Bind(ipe);
        sSocket.Listen(0);
        Console.WriteLine("监听已经打开，请等待");

        //receive message
        Socket serverSocket = sSocket.Accept();
        Console.WriteLine("连接已经建立");
        string recStr = "";
        byte[] recByte = new byte[4096];
        int bytes = serverSocket.Receive(recByte, recByte.Length, 0);
        recStr += Encoding.ASCII.GetString(recByte, 0, bytes);

        //send message
        Console.WriteLine("服务器端获得信息:{0}", recStr);
        string sendStr = "send to client :hello";
        byte[] sendByte = Encoding.ASCII.GetBytes(sendStr);
        serverSocket.Send(sendByte, sendByte.Length, 0);
        serverSocket.Close();
        sSocket.Close();
    }

    public static byte[] GetPictureData(string path)
    {
        FileStream fs = new FileStream(path, FileMode.Open);
        byte[] byData = new byte[fs.Length];
        fs.Read(byData, 0, byData.Length);
        fs.Close();
        return byData;
    }


}