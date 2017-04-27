using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading;

namespace CacheConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Run();
            for (int i = 1; i <= 10000; i++)
            {
                int value = Cache.Get();
                Console.WriteLine("第"+i+"次取值: "+value);
                Thread.Sleep(3000);
            }
        }

        private static void Run()
        {
            FileSystemWatcher watcher = new FileSystemWatcher();
            watcher.Path = @"F:\File\";
            watcher.NotifyFilter = NotifyFilters.CreationTime | NotifyFilters.DirectoryName | NotifyFilters.FileName | NotifyFilters.LastAccess | NotifyFilters.LastAccess | NotifyFilters.Size;
            watcher.Filter = "*.txt";
            watcher.Created += delegate(object source, FileSystemEventArgs e) { Console.WriteLine("创建新的文件：" + DateTime.Now.ToString()); Cache.Update(10); };
            watcher.Changed += delegate(object source, FileSystemEventArgs e) { Console.WriteLine("文件修改：" + DateTime.Now.ToString()); Cache.Update(20); };
            watcher.Deleted += delegate(object source, FileSystemEventArgs e) { Console.WriteLine("文件删除:" + DateTime.Now.ToString()); Cache.Update(30); };
            watcher.Renamed += delegate(object source, RenamedEventArgs e) { Console.WriteLine("文件重命名:" + DateTime.Now.ToString()); Cache.Update(40); };
            watcher.EnableRaisingEvents = true;
        }
    }
}
