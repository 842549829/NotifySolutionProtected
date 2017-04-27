using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notify.Solution.Code.Write
{
    [AttributeUsage(AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class LogAttribute : Attribute
    {
        // 获取当前方法的 方法名称 
        // 获取输入参数
        // 获取输出参数
    }
}
